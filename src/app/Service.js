import React from 'react';
import { MdOutlineArrowForwardIos } from "react-icons/md";

const consultations = [
  {
    title: 'Talk to Lawyer',
    description: 'Provide legal advice, draft contracts, handle litigation, and offer legal representation.',
    icon: '/images/lawyer.svg',
  },
  {
    title: 'Talk to Chartered accountant',
    description: 'Provide financial auditing, taxation advice, and financial planning services.',
    icon: '/images/talk.svg',
    highlighted: true,
  },
  {
    title: 'Talk to Company secretary',
    description: 'Advisory on corporate governance, regulatory compliance, and secretarial services.',
    icon: '/images/img.svg',
  },
  {
    title: 'Talk to Intellectual Property Lawyer',
    description: 'Assist with trademarks, copyrights, patents, and intellectual property rights.',
    icon: '/images/home.svg',
  },
];

const Service = () => {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-8 px-4">
        350+ Verified CA, CS, and Legal Experts  Ready to <br /> Streamline Your Business Operations.
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-8 max-w-7xl mx-auto">
        <div className="flex-1 flex justify-center">
          <img
            src="/images/people.svg"
            alt="Expert Illustration"
            className="w-100 h-100 "
          />
        </div>

        {/* Consultation Cards */}
        <div className="flex-1">
          {consultations.map((consult, index) => (
            <div
              key={index}
              className={`flex items-center gap-4 p-4 m-4 rounded-lg border ${
                consult.highlighted ? 'bg-yellow-100 border-yellow-400 shadow-md' : 'bg-gray-100'
              } hover:shadow-lg transition-all`}
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <img src={consult.icon} alt={consult.title} className="w-14 h-14" />
              </div>
              {/* Text Content */}
              <div>
                <h4
                  className={`text-lg font-semibold ${
                    consult.highlighted ? 'text-black' : 'text-gray-700'
                  }`}
                >
                  {consult.title}
                </h4>
                <p className="text-sm text-gray-600">{consult.description}</p>
              </div>
              {/* Arrow */}
              <div className="ml-auto text-black-400 text-3xl">
                <MdOutlineArrowForwardIos /> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
