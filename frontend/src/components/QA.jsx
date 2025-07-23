import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const questions = [
  {
    question: "What services do you offer?",
    answer:
      "We offer residential and commercial construction, remodeling, interior finishing, architectural planning, and project consultancy services.",
  },
  {
    question: "Do you provide cost estimates before starting a project?",
    answer:
      "Absolutely. We provide detailed cost breakdowns and project timelines after initial consultation and site assessment.",
  },
  {
    question: "Is your team certified and experienced?",
    answer:
      "Yes, our team consists of certified engineers, architects, and skilled laborers with years of industry experience.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Timelines vary by project size and scope, but we always ensure transparency and regular progress updates.",
  },
  {
    question: "Can I customize my project design?",
    answer:
      "Of course! We work closely with clients to tailor every element of the project to their vision and needs.",
  },
  {
    question: "Do you handle all legal permits and approvals?",
    answer:
      "Yes, we take care of all necessary permits, documentation, and approvals to make the process hassle-free for you.",
  },
];

const QA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-5 text-left">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl shadow-md transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-lg font-medium text-gray-800 hover:text-blue-700 focus:outline-none"
              >
                <span>{item.question}</span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-700" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              <div
                className={`px-6 pt-0 pb-5 text-gray-600 text-sm leading-relaxed transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "block" : "hidden"
                }`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QA;
