import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ClientFeedback() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ramesh Khatri',
      title: 'Managing Director',
      company: 'Jobs Dynamics',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      feedback: "Global Tech has become synonymous to 'ease' in terms of our accounting since the last fiscal year. With Global Tech, we can easily fill purchases, track receivables and payables, and even generate VAT reports. Moreover, with Global Tech's sales reports, it has provided us with required infrastructures to not just make plans, but take crucial decisions as well. We even thank Global Tech for their immaculate support when we needed help. We're happy and proud to be using Global Tech in our day to day accounting."
    },
    {
      name: 'Suman Gurung',
      title: 'Director Finance',
      company: 'Sajilo Sewa',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      feedback: "I have been using Global Tech for the past year and it has changed the way I run my business. The user interface is intuitive and easy to navigate, making it simple for me to manage my finances and stay on top of my expenses. The software also integrates seamlessly with business tools, saving me time and streamlining my workflow. I highly recommend Global Tech to our clients who are looking for a reliable and efficient accounting solution."
    },
    {
      name: 'Nisha Shrestha',
      title: 'CEO',
      company: 'Digital Solutions Nepal',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      feedback: "Switching to Global Tech was one of the best decisions we made for our company. The automation features have saved us countless hours, and the real-time reporting gives us insights we never had before. The customer support team is exceptional and always ready to help. Global Tech has truly transformed our accounting processes."
    },
    {
      name: 'Binod Adhikari',
      title: 'Financial Controller',
      company: 'Himalayan Traders',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      feedback: "As a growing business, we needed an accounting solution that could scale with us. Global Tech has exceeded our expectations in every way. The multi-currency support, inventory management, and seamless integration with our POS system have made our operations so much more efficient. Highly recommended!"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our <span className="text-green-600">Clients Say</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about Global Tech.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          {/* Testimonials */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10">
                    {/* Header with Profile */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                          <h3 className="text-xl font-bold text-green-600">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-600">
                            {testimonial.title} | {testimonial.company}
                          </p>
                        </div>
                      </div>
                      
                      {/* Quote Icon */}
                      <div className="flex-shrink-0">
                        <svg
                          className="w-12 h-12 text-green-200"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>
                    </div>

                    {/* Feedback Text */}
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {testimonial.feedback}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-green-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}