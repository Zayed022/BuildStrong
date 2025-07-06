import React, { useState } from "react";

const questions = [
  {
    question: "What services do you offer?",
    answer:
      "We offer residential and commercial construction, remodeling, interior finishing, and project planning services.",
  },
  {
    question: "Are your projects delivered on time?",
    answer:
      "Yes, we follow strict project timelines and have a strong track record of on-time delivery without compromising quality.",
  },
  {
    question: "Do you provide cost estimates before starting a project?",
    answer:
      "Absolutely. We provide detailed project plans and cost estimates after site assessment and client consultation.",
  },
  {
    question: "Is your team certified and experienced?",
    answer:
      "Yes, our team consists of highly experienced and certified professionals with years of hands-on expertise.",
  },
];

const QA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-700 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="text-left space-y-4">
          {questions.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-sm transition duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left p-4 font-medium text-gray-800 hover:text-blue-600 focus:outline-none flex justify-between items-center"
              >
                <span>{item.question}</span>
                <span className="text-xl">{activeIndex === index ? "−" : "+"}</span>
              </button>
              {activeIndex === index && (
                <div className="px-4 pb-4 text-gray-600 text-sm">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QA;
