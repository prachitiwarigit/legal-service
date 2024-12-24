import React from 'react';

const customers = [
  { name: 'OYO', logo: '/images/oyo.svg' },
  { name: 'Swiggy', logo: '/images/swiggy.svg' },
  { name: 'BigBasket', logo: '/images/big.svg' },
  { name: 'HDFC Bank', logo: '/images/hdfc.svg' },
  { name: 'Amazon', logo: '/images/amazon.svg' },
];

const Features = () => {
  return (
    <section className="bg-[#002244] py-12 px-4">
      {/* Section Title */}
      <h2 className="text-center text-white text-3xl font-bold mb-8">Our Customers</h2>

      {/* Logo Grid */}
      <div className="flex flex-wrap justify-center items-center gap-8">
        {customers.map((customer, index) => (
          <div key={index} className="w-32 h-16 flex items-center justify-center">
            <img
              src={customer.logo}
              alt={customer.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
