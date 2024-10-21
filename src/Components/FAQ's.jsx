import { useState } from "react";

const FAQs = () => {
  const faqData = [
    {
      question: "What Languages Do You Support For Transcription?",
      answer:
        "We currently support multiple languages, including English, Spanish, and French. More languages will be added soon.",
    },
    {
      question: "Can I Customise The Summaries?",
      answer: "Yes, you can customize the summaries based on your preferences.",
    },
    {
      question: "How Does The Chatbot Work?",
      answer:
        "The chatbot processes transcripts and provides answers based on the content.",
    },
    {
      question: "How Do I Organize My Saved Content?",
      answer:
        "You can organize your saved content in folders and tag them for easy navigation.",
    },
    {
      question: "Is My Data Secure?",
      answer:
        "Yes, all your data is securely encrypted and stored with industry-standard protocols.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <div className="bg-gray-100 py-32">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Questions About Our Services?
        </h2>
        <p className="text-center text-lg mb-8">
          Please feel free to reach out to us. We are always happy to assist you
          and provide any additional information.
        </p>

        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center bg-white px-4 rounded-md cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="font-semibold text-[#083A5E]">{faq.question}</h3>
              <span className="text-2xl select-none">
                {openIndex === index ? "-" : "+"}
              </span>
            </div>

            {/* Collapsible answer */}
            <div
              className={`bg-white overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40" : "max-h-0"
              }`}
            >
              <p className="px-4 py-2 text-[#497696]">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
