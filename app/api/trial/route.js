import net from 'node:net';
import tls from 'node:tls';

export const runtime = 'nodejs';

function readReply(socket) {
  return new Promise((resolve, reject) => {
    let buffer = '';
    const onData = (chunk) => {
      buffer += chunk.toString('utf8');
      const lines = buffer.split(/\r?\n/);
      const finalLine = lines.find((line) => /^\d{3} /.test(line));
      if (finalLine) {
        socket.off('data', onData);
        socket.off('error', onError);
        resolve({ code: Number(finalLine.slice(0, 3)), text: lines.filter(Boolean).join('\n') });
      }
    };
    const onError = (error) => {
      socket.off('data', onData);
      reject(error);
    };
    socket.on('data', onData);
    socket.once('error', onError);
  });
}

async function expect(socket, expected) {
  const reply = await readReply(socket);
  if (!expected.includes(reply.code)) throw new Error(`SMTP ${reply.code}: ${reply.text}`);
  return reply;
}

async function command(socket, value, expected = [250]) {
  socket.write(`${value}\r\n`);
  return expect(socket, expected);
}

function sendDemoEmail(to) {
  const host = process.env.SmtpServer || process.env.SMTP_HOST;
  const port = Number(process.env.SmtpPort || process.env.SMTP_PORT || 587);
  const username = process.env.Username || process.env.SMTP_USER;
  const password = process.env.Password || process.env.SMTP_PASSWORD;
  const from = process.env.SenderEmail || process.env.SMTP_FROM || username;
  const senderName = process.env.SenderName || 'OMSLITE';
  if (!host || !username || !password || !from) throw new Error('Email service is not configured.');

  return new Promise((resolve, reject) => {
    let settled = false;
    let socket = net.connect({ host, port });
    const fail = (error) => {
      if (settled) return;
      settled = true;
      socket.destroy();
      reject(error);
    };
    socket.setTimeout(15000, () => fail(new Error('SMTP connection timed out.')));
    (async () => {
      try {
        await expect(socket, [220]);
        await command(socket, `EHLO ${process.env.SMTP_HELO || 'localhost'}`, [250]);
        socket.write('STARTTLS\r\n');
        await expect(socket, [220]);
        const plainSocket = socket;
        socket = tls.connect({ socket: plainSocket, servername: host });
        await new Promise((res, rej) => {
          socket.once('secureConnect', res);
          socket.once('error', rej);
        });
        await command(socket, `EHLO ${process.env.SMTP_HELO || 'localhost'}`, [250]);
        await command(socket, 'AUTH LOGIN', [334]);
        await command(socket, Buffer.from(username).toString('base64'), [334]);
        await command(socket, Buffer.from(password).toString('base64'), [235]);
        await command(socket, `MAIL FROM:<${from}>`);
        await command(socket, `RCPT TO:<${to}>`, [250, 251]);
        await command(socket, 'DATA', [354]);
        const subject = 'Your OMS|WEB ERP demo login details';
        const html = `<p>Dear Subscriber,</p><p>Thank you for your interest in OMS|WEB ERP Software.</p><p>Please find below the demo login details to explore our software.</p><p><strong>Demo Login Details</strong><br>URL: <a href="https://myoms.globaltechsolution.com.np">https://myoms.globaltechsolution.com.np</a><br>Username: demo<br>Password: 123</p><p>For a quick response or any further assistance, please contact our Marketing Team at +977-9851069643.</p><p>Thank you for your interest in OMS|WEB ERP Software.</p><p>Best regards,<br>Marketing Team<br>Global Tech Nepal Pvt. Ltd.<br>Website: <a href="https://globaltech.com.np">https://globaltech.com.np</a></p>`;
        const encodedSubject = `=?UTF-8?B?${Buffer.from(subject).toString('base64')}?=`;
        const safeName = senderName.replace(/[\r\n"<>]/g, '');
        const message = [
          `From: "${safeName}" <${from}>`, `To: <${to}>`, `Subject: ${encodedSubject}`,
          'MIME-Version: 1.0', 'Content-Type: text/html; charset=UTF-8', 'Content-Transfer-Encoding: 8bit', '', html,
        ].join('\r\n').replace(/(^|\r\n)\./g, '$1..');
        socket.write(`${message}\r\n.\r\n`);
        await expect(socket, [250]);
        socket.write('QUIT\r\n');
        if (!settled) { settled = true; socket.end(); resolve(); }
      } catch (error) { fail(error); }
    })();
  });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'Please enter a valid email address.' }, { status: 400 });
    }
    await sendDemoEmail(email);
    return Response.json({ ok: true });
  } catch (error) {
    console.error('Trial email could not be sent:', error.message);
    return Response.json({ error: 'We could not send the demo email right now. Please try again or call +977-9851069643.' }, { status: 500 });
  }
}
