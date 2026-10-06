"use client";
import { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch FAQs from API
  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const res = await fetch("https://globaltechnepal.com/api/faqs");
        const data = await res.json();
        setFaqs(data.data); // Set API FAQs
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFAQs();
  }, []);

  const displayedFAQs = showAll ? faqs : faqs.slice(0, 5);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          <span className="text-green-600">Frequently Asked Questions</span>{' '}
          <span className="text-gray-900">About Global Tech</span>
        </h2>

        {/* Loading State */}
        {loading && (
          <p className="text-center text-gray-500">Loading FAQs...</p>
        )}

        {/* FAQ Items */}
        {!loading && (
          <div className="space-y-4">
            {displayedFAQs.map((faq, index) => (
              <div key={faq.id} className="border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between text-left py-4 hover:text-green-600 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.title}
                  </h3>

                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <Minus className="w-5 h-5 text-white" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>
                </button>

                {openIndex === index && (
                  <div className="pb-4 pr-12 text-gray-600 leading-relaxed animate-fadeIn">
                    {faq.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Show More Button */}
        {!showAll && faqs.length > 5 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAll(true)}
              className="px-12 py-4 border-2 border-green-600 text-green-600 font-semibold rounded-xl hover:bg-green-50 transition-colors"
            >
              Show More &gt;&gt;
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
