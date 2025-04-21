import { useState } from "react";
import * as XLSX from "xlsx";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "jspdf-autotable";
import Hrdetails from "../Pages/Hrdetails";
import AdminNavbar from "./AdminNavbar";
import Navbar from "./Navbar";
const hrList = [
  {
    id: 1,
    name: "John Doe",
    skills: ["JavaScript", "React", "Nodejs"],
    experience: "2 Year",
    fees: 5000,
    location: "New York",
    availability: true,
  },
  {
    id: 2,
    name: "Jane Smith",
    skills: ["Python", "Django", "Machine Learning"],
    experience: "3 Year",
    fees: 6000,
    location: "San Francisco",
    availability: false,
  },
  {
    id: 3,
    name: "Alice Johnson",
    skills: ["Java", "Spring", "Microservices"],
    experience: "4 Year",
    fees: 7000,
    location: "Los Angeles",
    availability: true,
  },
  {
    id: 4,
    name: "Bob Brown",
    skills: ["ReactNative", "JavaScript"],
    experience: "5 Year",
    fees: 8000,
    location: "Chicago",
    availability: true,
  },
  {
    id: 5,
    name: "Charlie Davis",
    skills: ["Java", "Spring"],
    experience: "6 Year",
    fees: 9000,
    location: "Houston",
    availability: false,
  },
  {
    id: 6,
    name: "Eve Wilson",
    skills: ["Python", "Machine Learning"],
    experience: "7 Year",
    fees: 10000,
    location: "Seattle",
    availability: true,
  },
  {
    id: 7,
    name: "David Lee",
    skills: ["React", "Nodejs"],
    experience: "8 Year",
    fees: 11000,
    location: "Miami",
    availability: true,
  },
  {
    id: 8,
    name: "Grace Kim",
    skills: ["JavaScript", "ReactNative"],
    experience: "9 Year",
    fees: 12000,
    location: "Boston",
    availability: false,
  },
  {
    id: 9,
    name: "Henry Martinez",
    skills: ["Java", "Microservices"],
    experience: "10 Year",
    fees: 13000,
    location: "Dallas",
    availability: true,
  },
  {
    id: 10,
    name: "Isabella Garcia",
    skills: ["JavaScript", "React"],
    experience: "1 Year",
    fees: 4000,
    location: "Austin",
    availability: true,
  },
];

function AllHR() {
  const [hrData, setHrData] = useState(hrList);
  const [showFilter, setShowFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");
  const [exportType, setExportType] = useState("Export");
  const onClickSearch = () => {
    const filteredData = hrList.filter((item) => {
      const isNameMatch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const isLocationMatch = selectedLocation
        ? item.location === selectedLocation
        : true;
      const isExperienceMatch = selectedExperience
        ? item.experience === selectedExperience
        : true;
      const isSkillMatch = selectedSkill
        ? item.skills.includes(selectedSkill)
        : true;
      return (
        isNameMatch && isLocationMatch && isExperienceMatch && isSkillMatch
      );
    });
    setHrData(filteredData);
  };
  const exportData = () => {
    const exportData = hrData.map((item) => ({
      Name: item.name,
      Skills: item.skills.join(", "),
      Experience: item.experience,
      Fees: item.fees,
      Location: item.location,
      Availability: item.availability ? "Available" : "Not Available",
    }));
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "HR Data");
    XLSX.writeFile(wb, "hr_data.xlsx");
    setExportType("Export");
  };

  const exportToPDF = () => {
    const doc = new jsPDF();

    const tableColumn = [
      "Name",
      "Skills",
      "Experience",
      "Fees",
      "Location",
      "Availability",
    ];
    const tableRows = hrData.map((item) => [
      item.name,
      item.skills.join(", "),
      item.experience,
      item.fees,
      item.location,
      item.availability ? "Available" : "Not Available",
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      margin: { top: 20 },
      styles: { fontSize: 10 },
    });

    doc.save("hr_data.pdf");
    setExportType("Export");
  };

  const handleAvailabilityChange = (id, availability) => {
    const updatedData = hrData.map((item) => {
      if (item.id === id) {
        return { ...item, availability: availability };
      }
      return item;
    });
    setHrData(updatedData);
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-start">
        <AdminNavbar />
        <div className="p-2 md:p-5 w-full sm:ml-2 md:ml-2 mt-2">
          <div className="flex items-center justify-between ">
            <h1 className="text-lg font-medium">All HR's</h1>
            <div className="flex items-center gap-4">
              <button
                className="border border-[#5A5AFD] text-[#5A5AFD] px-4 py-2 rounded-md hover:bg-[#5A5AFD] hover:text-[#ffffff] transition duration-300 cursor-pointer"
                onClick={() => setShowFilter(!showFilter)}
              >
                {showFilter ? "Hide Filter" : "Show Filter"}
              </button>
            </div>
          </div>
          {showFilter && (
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
              <div className="flex flex-col lg:flex-row w-full md:w-11/12 px-2 py-2 bg-white shadow rounded-md">
                <div className="w-full flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
                  </svg>
                  <input
                    type="search"
                    placeholder="Search by name"
                    className="px-4 py-2 outline-0 border-r-0 md:border-r-1 border-gray-300 w-full"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="w-full flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 12 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  <select
                    value={selectedLocation}
                    onChange={(e) => {
                      setSelectedLocation(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="px-4 py-2 w-full outline-0 mb-1 md:mr-2 border-0 md:border-r-1 border-gray-300"
                  >
                    <option value="">All Locations</option>
                    <option value="New York">New York</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Houston">Houston</option>
                    <option value="Seattle">Seattle</option>
                    <option value="Miami">Miami</option>
                    <option value="Boston">Boston</option>
                    <option value="Dallas">Dallas</option>
                    <option value="Austin">Austin</option>
                  </select>
                </div>
                <div className="w-full flex items-center">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2"
                  >
                    <g>
                      <path fill="none" d="M0 0h24v24H0z"></path>
                      <path
                        fillRule="nonzero"
                        d="M12 2a7 7 0 0 1 7 7h1.074a1 1 0 0 1 .997.923l.846 11a1 1 0 0 1-.92 1.074L20.92 22H3.08a1 1 0 0 1-1-1l.003-.077.846-11A1 1 0 0 1 3.926 9H5a7 7 0 0 1 7-7zm7.147 9H4.852l-.693 9H19.84l-.693-9zM14 13v2h-4v-2h4zm-2-9a5 5 0 0 0-4.995 4.783L7 9h10a5 5 0 0 0-4.783-4.995L12 4z"
                      ></path>
                    </g>
                  </svg>
                  <select
                    value={selectedExperience}
                    onChange={(e) => {
                      setSelectedExperience(e.target.value);
                      console.log(e.target.value);
                    }}
                    className="px-4 py-2 w-full outline-0 mb-1 md:mr-2 md:border-r-1 border-gray-300"
                  >
                    <option value="">All Experience</option>
                    <option value="1 Year">1 Year</option>
                    <option value="2 Year">2 Year</option>
                    <option value="3 Year">3 Year</option>
                    <option value="4 Year">4 Year</option>
                    <option value="5 Year">5 Year</option>
                    <option value="6 Year">6 Year</option>
                    <option value="7 Year">7 Year</option>
                    <option value="8 Year">8 Year</option>
                    <option value="9 Year">9 Year</option>
                    <option value="10 Year">10 Year</option>
                  </select>
                </div>
                <div className="w-full flex items-center">
                  <select
                    className="px-4 py-2 w-full outline-0 mb-1 md:mr-2"
                    onChange={(e) => {
                      setSelectedSkill(e.target.value);
                      console.log(e.target.value);
                    }}
                    value={selectedSkill}
                  >
                    <option value="">All Skills</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="React">React</option>
                    <option value="Nodejs">Nodejs</option>
                    <option value="Python">Python</option>
                    <option value="Django">Django</option>
                    <option value="MachineLearning">Machine Learning</option>
                    <option value="Java">Java</option>
                    <option value="Spring">Spring</option>
                    <option value="Microservices">Microservices</option>
                    <option value="ReactNative">ReactNative</option>
                  </select>
                </div>
                <button
                  onClick={onClickSearch}
                  className="bg-[#5A5AFD] text-white px-4 py-2 rounded-md cursor-pointer hover:bg-[#0a5dd8] transition duration-300"
                >
                  Search
                </button>
              </div>
              <button className="bg-[#5A5AFD] text-white px-4 py-2 rounded-md cursor-pointer flex items-center gap-2">
                <select
                  value={exportType}
                  onChange={(e) => {
                    setExportType(e.target.value);
                    if (e.target.value === "Excel") {
                      exportData();
                    } else if (e.target.value === "PDF") {
                      exportToPDF();
                    }
                  }}
                  className="bg-[#5A5AFD] text-white px-2 rounded-md outline-0 cursor-pointer"
                >
                  <option value="Export">Export</option>
                  <option value="Excel">Excel</option>
                  <option value="PDF">PDF</option>
                </select>
              </button>
            </div>
          )}
          <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
            {hrData.map((item, index) => {
              return (
                <Hrdetails
                  handleAvailabilityChange={handleAvailabilityChange}
                  item={item}
                  key={index}
                />
              );
            })}
          </div>
          {hrData.length === 0 && (
            <div className="text-center text-gray-500 mt-4">
              <h2>No users found.</h2>
              <button
                onClick={() => {
                  setSearchTerm(""), setSelectedSkill("");
                  setSelectedLocation("");
                  setSelectedExperience("");
                  setHrData(hrList);
                  setShowFilter(false);
                  setExportType("Export");
                }}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md cursor-pointer"
              >
                Show All Available Talent
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllHR;
