import React, { useState } from "react";
import { FaGraduationCap, FaHospital, FaBriefcase, FaLandmark } from "react-icons/fa";



const Clientele = () => {
  // State to track the active category
  const [activeCategory, setActiveCategory] = useState("education");

  // Data for clientele categories
  const categories = {
    education: {
      title: "Educational Institutes & Colleges",
      icon: <FaGraduationCap className="text-blue-700 text-3xl" />,
      items: [
        "St. Joseph P U College",
        "St. Joseph Commerce College",
        "MPEC Institute",
        "National College, Basavanagudi",
        "L R G College & Hostel",
        "National College, Bagepalli",
        "Yallamma Dasappa Institute of Technology",
        "National College, Jayanagar",
        "St. Joseph Evening College",
        "Rajarajeswari Management College",
        "St. Joseph Management",
      ],
    },
    hospitals: {
      title: "Hospitals",
      icon: <FaHospital className="text-red-700 text-3xl" />,
      items: [
        "Apollo Hospital",
        "Fortis Hospital",
        "Narayana Health",
        "Manipal Hospital",
        "Sakra World Hospital",
        "Columbia Asia Hospital",
      ],
    },
    corporate: {
      title: "Corporate Clients",
      icon: <FaBriefcase className="text-green-700 text-3xl" />,
      items: [
        "Infosys",
        "Wipro",
        "TCS",
        "Capgemini",
        "Accenture",
        "Cognizant",
      ],
    },
    government: {
        title: "Government Clients",
        icon: <FaLandmark className="text-gray-700 text-3xl" />,  // Use FaLandmark instead of FaGovernment
        items: [
          "Indian Railways",
          "BSNL",
          "DRDO",
          "ISRO",
          "National Highways Authority of India",
        ],
      },
    }      

  return (
    <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center text-blue-900 mb-6">
        Our <span className="text-gray-700">“Satisfied Clients”</span>
      </h1>
      <p className="text-gray-600 text-center mb-8">
        We offer consistent customer support to every individual customer. We stay updated with the latest global technologies to ensure maximum client satisfaction.
      </p>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 border-r pr-4">
          {Object.keys(categories).map((key) => (
            <div
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 cursor-pointer p-3 ${
                activeCategory === key ? "bg-blue-100 font-bold" : "hover:bg-gray-100"
              } rounded-md`}
            >
              {categories[key].icon}
              <span>{key.charAt(0).toUpperCase() + key.slice(1)} Clients</span>
            </div>
          ))}
        </div>

        {/* Content Area */}
        <div className="w-3/4 pl-6">
          <div className="flex items-center gap-3 mb-4">
            {categories[activeCategory].icon}
            <h2 className="text-xl font-semibold text-blue-900">
              {categories[activeCategory].title}
            </h2>
          </div>
          <ul className="list-disc pl-5 text-gray-800">
            {categories[activeCategory].items.map((item, index) => (
              <li key={index} className="mb-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Clientele;
