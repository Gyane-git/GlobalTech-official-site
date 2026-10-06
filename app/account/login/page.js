"use client";

import { useState } from "react";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [data, setData] = useState(null);

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const json = await res.json();
      setData(json);

      if (!res.ok) {
        setMessage(json.message || "Invalid credentials");
      } else {
        setMessage("Login successful!");
        console.log("Login Response:", json);
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Error connecting to server");
    }

    setLoading(false);
  }

  return (
    <div>

    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 gap-8">
      <form
        onSubmit={handleLogin}
        className="w-full max-w-sm bg-white p-6 rounded-xl shadow-md space-y-5"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>

        <div>
          <label className="text-sm text-gray-600">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
            placeholder="Enter username"
            required
          />
        </div>

        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:outline-none"
            placeholder="Enter password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {message && <p className="text-center text-sm text-red-600">{message}</p>}
      </form>

     
    </div>
     <div className="p-6">
        <h2 className="text-xl font-bold mb-4">Response</h2>
        <pre className="bg-gray-900 text-green-300 p-4 rounded text-sm overflow-auto">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
      
    </div>
  );
}
