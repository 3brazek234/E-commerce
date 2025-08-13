import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { faqItems } from "../../Constants";
import HeroSection from "../../Components/Common/Hero/HeroSection";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <HeroSection
        title="Frequently Asked Questions"
        description="Do you have another question? Don't hesitate to contact us"
      />
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-12">
      
          <p className="text-gray-600">
            Do you have another question? Don't hesitate to contact us
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <button
                className={`w-full px-6 py-4 text-right flex justify-between items-center ${
                  activeIndex === index ? "bg-purple-50" : "bg-white"
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-lg font-medium text-gray-900 ml-2">
                  {item.question}
                </span>
                {activeIndex === index ? (
                  <FiChevronUp className="text-purple-600 w-5 h-5 flex-shrink-0" />
                ) : (
                  <FiChevronDown className="text-gray-500 w-5 h-5 flex-shrink-0" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40 py-4" : "max-h-0 py-0"
                }`}
              >
                <p className="text-gray-600 text-right leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-4">
            Did you not find an answer?
          </h3>
          <p className="text-gray-600 mb-6">
            You can contact our support team and we will be happy to assist you
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
};

export default Faq;
