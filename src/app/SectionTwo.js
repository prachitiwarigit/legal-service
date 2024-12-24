import React from 'react'

export default function SectionTwo() {
  return (
    <div className="flex  items-center bg-gradient-to-r from-yellow-50 to-white rounded-xl shadow-lg" style={{margin:'50px'}}>
    {/* Left Icon Section */}
    <div className="flex-shrink-0 relative -ml-12 mb-0" style={{marginBottom:'0px'}}>
      <div className="">
        <img src="/images/1.svg" alt="Security Icon" className="w-50 h-50 ml-4" />
      </div>
    </div>
  
    {/* Right Content Section */}
    <div className="ml-6">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
        Security, Confidentiality & Results
      </h2>
  
      {/* Features */}
      <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
        <li className="flex items-center gap-2 text-gray-700">
          <span className="text-yellow-400 text-xl"></span>
          <span>Operate with discretion and professionalism.</span>
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <span className="text-yellow-400 text-xl"></span>
          <span>Ensure timely delivery with quick turnaround.</span>
        </li>
        <li className="flex items-center gap-2 text-gray-700">
          <span className="text-yellow-400 text-xl"></span>
          <span>Deliver accurate and reliable results consistently.</span>
        </li>
      </ul>
    </div>
  </div>
  
  )
}
