import React from 'react';

const products = [
  {
    id: 1,
    img: '/images/tab1.svg',
    name: 'LIBRA',
    description: 'AI-powered case alerts & research for your legal practice',
    descriptionTextColor: 'text-[#022B50]', // Added description-specific text color
    features: [
      'Hearings: Get instant court notifications, including case number and room details, with just one click.',
      'Judgements: Access over 5 million judgments quickly by searching keywords, citations, parties, or judges.',
      'Display Board: Stay updated on daily item numbers with our live display board.',
      'Case Alerts: Stay ahead in your legal strategy with real-time case updates from India’s largest case directory.',
    ],
    image: '/images/table1.webp',
    bgColor: 'bg-white',
    textColor: 'text-[#022B50]',
    borderColor: 'border-gray-200',
  },
  {
    id: 2,
    name: 'zolvít',
    img: '/images/tab2.svg',
    description: 'A complete overview of your business',
    descriptionTextColor: 'text-white', // Added description-specific text color
    features: [
      'Unified Dashboard: Compliance to legal, all in one place.',
      'Expert lawyer + CA + CS in your pocket!',
      'Automatic Compliance Reminder: Stay aligned with regulations.',
      'Efficient Compliance Tracking: Automated monitoring and reminders for regulatory alignment.',
    ],
    image: '/images/table2.webp',
    bgColor: 'bg-[#002244]',
    textColor: 'text-white',
    borderColor: 'border-[#002244]',
  },
];


const Section = () => {
  return (
    <section className="py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Our Free Product Suite Trial</h2>
        <p className="text-gray-600 mt-2">
          Increase efficiency and productivity with our scalable solutions
        </p>
      </div>

      {/* Product Cards */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
      {products.map((product) => (
  <div
    key={product.id}
    className={`rounded-xl border ${product.borderColor} shadow-md p-6 md:w-1/2 ${product.bgColor}`}
  >
    {/* Product Title */}
    <img
      src={product.img}
      alt={product.name}
      className="rounded-lg w-70 h-auto"
    />

    {/* Product Description with Unique Color */}
    <h2 className={`text-4xl pt-4 pb-5 ${product.descriptionTextColor}`}>
      {product.description}
    </h2>

    {/* Features */}
    <ul className="space-y-2 mb-4">
      {product.features.map((feature, index) => (
        <li key={index} className={`flex items-start gap-2 ${product.textColor}`}>
           {feature}
        </li>
      ))}
    </ul>

    {/* Product Image */}
    <div className="mt-4 flex justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="rounded-lg w-70 h-auto"
      />
    </div>

    {/* Button (For Highlighted Card) */}
    {product.id === 2 && (
      <div className="mt-6 flex justify-center">
        <button className="bg-yellow-400 text-black px-4 py-2 rounded-md font-medium hover:bg-yellow-500 transition">
          EXPLORE NOW 
        </button>
      </div>
    )}
  </div>
))}
      </div>
    </section>
  );
};

export default Section;
