"use client";
import { useState } from "react";
import { CheckCircle } from "lucide-react";

export default function TabBar() {
  const [activeTab, setActiveTab] = useState("accounting");

  const tabs = [
    { id: "accounting", label: "Accounting" },
    { id: "softwaredevelopment", label: "Software Development" },
    { id: "graphicdesign", label: "Graphic Design & Animation" },
    { id: "websolutions", label: "Web & App Solutions" },
    { id: "cloudcomputing", label: "Cloud Computing" },
  ];

  const tabContent = {
    accounting: {
      title: "Accounting",
      description:
        "We as an Accounting consultants assist you in making different accounting reports , analyze financial information for business decision making. We help you with a number of tasks related to accounting services:",
      features: [
        "financial forecasting",
        "analyzing financial statements",
        "determining the profitability of your business",
        "analyzing accounts payable to see where your business might be able to save money",
        "determining what accounting services you need",
        "setting up consistent accounting practices",
      ],
      image: "/accounting.webp",
    },
    softwaredevelopment: {
      title: "Software Development",
      description:
        "Global-Tech strives to provide customized software solutions that will keep you a step ahead in competition by continuously improving your IT based business solutions. We take a flexible and long-term approach to technology and design decisions.",
      features: [],
      image: "/software.jpg",
    },
    graphicdesign: {
      title: "Graphic Design & Animation",
      description:
        "Graphic Design & Animation services to bring your ideas to life with stunning visuals and engaging animations.",
      features: [
        "Motion Graphics",
        "3D Animation",
        "Logo & Brand Design",
        "Marketing Collaterals",
        "Packaging Design",
        "Social Media Graphics",
        "UI/UX Design",
      ],
      image: "/graphic.jpg",
    },
    
    websolutions: {
      title: "Web & App Solutions",
      description:
        "Web & App Solutions that streamline your sales process and enhance customer experience.",
      features: [
        "Portal Development",
        "E-commerce Integration",
        "Responsive Design",
        "Mobile App android & ios Development",
        "CMS Solutions",
      ],
      image: "/web-app.jpeg",
    },
    
    cloudcomputing: {
      title: "Cloud Computing",
      description: "Web hosting and domain registration",
      features: [
        "Domain Registration",
        "Reliable Web Hosting",
        "SSL Certificates",
        "Email Hosting",
        "Linux VPS Hosting",
        "Windows VPS Hosting",
        "Dedicated Server Hosting",
      ],
      image: "/cloud.avif",
    },
  };

  const content = tabContent[activeTab];

  return (
    <section className="bg-linear-to-b from-green-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-12">
          Global Tech Handles All Unique Needs for Your{" "}
          <span className="text-green-600">diverse Businesses!</span>
        </h2>

        {/* Tab Bar */}
        <div className="bg-white rounded-full shadow-lg p-2 mb-16 max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-green-600 text-white shadow-md"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Preview Image */}
          <div className="order-2 lg:order-1">
            <div className="border-4 border-green-200 rounded-2xl overflow-hidden shadow-lg h-80 sm:h-96">
                <img
                  src={content.image}
                  alt={content.title}
                  className="w-full h-full object-cover border border-green-400"
                  loading="lazy"
                  width={500}
                  height={500}
                />
             
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {content.title}
            </h3>
            <p className="text-lg text-gray-600 mb-8">{content.description}</p>

            {/* Features List */}
            <div className="space-y-4 mb-8">
              {content.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-green-900 text-white font-semibold rounded-xl hover:bg-green-800 transition-colors">
                Explore More
              </button>
              <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-semibold rounded-xl hover:bg-gray-50 transition-colors">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
