import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineArrowForwardIos } from "react-icons/md";


export default function Hero() {
  const avatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5",
  ];

  const servicesData = [
    {
      title: "Register your company",
      price: "₹999/-",
      icon: "/images/brief.svg",
      services: [
        "Private Limited company",
        "Limited Liability Partnership",
        "One Person company",
        "Partnership Firm",
      ],
    },
    {
      title: "File GST",
      price: "₹399/-",
      icon: "/images/gst.svg",
      services: [
        "GST Registration",
        "GST Filing",
        "GST Cancellation and Revocation",
        "Reply to GST Notice",
      ],
    },
    {
      title: "Protect your Intellectual Property",
      price: "₹1499/-",
      icon: "/images/protect.svg",
      services: [
        "Trademark Registration",
        "Copyright Registration",
        "Patent Registration",
        "Trademark Objection",
      ],
    },
    {
      title: "Maintain your Accounts",
      price: "₹4999/-",
      icon: "/images/account.svg",
      services: [
        "Accounting and Book-keeping",
        "Annual Compliance",
        "TDS Return Filing",
        "Income Tax Notice",
      ],
    },
    {
      title: "Licenses",
      price: "₹999/-",
      icon: "/images/starting.svg",
      services: [
        "ISO Registration",
        "FSSAI Registration",
        "IEC Registration",
        "Liquor License Registration",
      ],
    },
  ];
  return (
    <>
      <div>
        <div>
          <p className="bg-custom-pink py-2 px-4 text-center text-sm flex items-center justify-center">
            <img src="/images/attention.svg" alt="Attention" className="mr-2" />
            <span style={{ fontWeight: "bold" }}>Attention:</span> File GSTR
            9/9C by 31 Dec — Avoid Penalties Now!
            <span style={{ color: "red", borderBottom: "1px solid red" }}>
              Talk to our expert
            </span>
          </p>
        </div>
        <section className="bg-[#002244] text-white py-12 px-4 md:px-16 pb-64">
          {/* Google Rating */}
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="relative flex items-center">
              {/* Avatars */}
              <div className="flex items-center">
                {avatars.map((avatar, index) => (
                  <img
                    key={index}
                    src={avatar}
                    alt={`Avatar ${index + 1}`}
                    className={`w-10 h-10 rounded-full border-2 border-white shadow-md ${
                      index !== 0 ? "-ml-3 gap-2" : ""
                    }`}
                  />
                ))}
              </div>
              <div className="text-yellow-400 text-2xl">
                <FaRegStar />
              </div>{" "}
              <div className="text-yellow-400 text-2xl">
                <FaRegStar />
              </div>{" "}
              <div className="text-yellow-400 text-2xl">
                <FaRegStar />
              </div>
            </div>
            <p className="text-lg">4.5/5 (16k+ Reviews)</p>
          </div>

          {/* Heading */}
          <h1 className="text-center text-4xl md:text-5xl font-bold leading-snug">
            India's <span className="text-yellow-400">Top Rated</span>{" "}
            Professional Services Platform
          </h1>
          <p className="text-center mt-4 text-lg">
            Connecting you with experts to simplify your legal, tax &
            compliance.
          </p>

          {/* Search Bar */}
          <div className="mt-6 flex justify-center w-full">
            <div className="relative w-full max-w-lg">
              <input
                type="text"
                placeholder="Try 'GST F'"
                className="w-full px-4 py-3 rounded-md text-black focus:outline-none"
              />
              <button className="absolute right-2 text-lg top-1/2 transform -translate-y-1/2 text-black">
                <CiSearch />
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
              GST Registration
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
              Company Registration
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
              Accounting & Business Compliance
            </button>
            <button className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700">
              Trademark
            </button>
          </div>
        </section>


        <section className=" py-12 px-6 -mt-52">
        <div className="max-w-9xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-card-color rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Title and Price */}
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Starting from
                <span className="text-blue-600 font-semibold">
                  {service.price}
                </span>
              </p>

              {/* Icon */}
              <div className="flex  mb-4">
                <img
                  src={service.icon}
                  alt={service.title}
                  className="w-18 h-18 object-contain"
                />
              </div>

              {/* Services List */}
              <ul className="space-y-2 text-gray-600">
                {service.services.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between items-center hover:text-blue-600 cursor-pointer"
                  >
                    {item}
                    <span><MdOutlineArrowForwardIos /></span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      </div>

   
    </>
  );
}
