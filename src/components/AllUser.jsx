import { useState } from "react";
import UserDetails from "../Pages/UserDetails";
import AdminNavbar from "./AdminNavbar";
import Navbar from "./Navbar";

const userList = [
  {
    id: 1,
    name: "Liam Parker",
    skills: ["JavaScript", "React"],
    availability: true,
  },
  {
    id: 2,
    name: "Olivia Reed",
    skills: ["Python", "Machine Learning"],
    availability: true,
  },
  {
    id: 3,
    name: "Noah Bennett",
    skills: ["Java", "Microservices"],
    availability: false,
  },
  {
    id: 4,
    name: "Emma Collins",
    skills: ["ReactNative", "Nodejs"],
    availability: true,
  },
  {
    id: 5,
    name: "Mason Turner",
    skills: ["Spring", "Java"],
    availability: true,
  },
  {
    id: 6,
    name: "Ava Foster",
    skills: ["Django", "Python"],
    availability: false,
  },
  {
    id: 7,
    name: "Elijah Morgan",
    skills: ["JavaScript", "Nodejs"],
    availability: true,
  },
  {
    id: 8,
    name: "Sophia Hughes",
    skills: ["React", "ReactNative"],
    availability: false,
  },
  {
    id: 9,
    name: "Logan Rivera",
    skills: ["Spring", "Microservices"],
    availability: true,
  },
  {
    id: 10,
    name: "Isla Bennett",
    skills: ["JavaScript", "Django"],
    availability: true,
  },
];

function AllHR() {
  const [showFilter, setShowFilter] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const finalList = userList.filter((item) => {
    const nameMatch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const skillMatch = selectedSkill
      ? item.skills.includes(selectedSkill)
      : true;
    return nameMatch && skillMatch;
  });
  return (
    <div>
      <Navbar />
      <div className="flex items-start">
        <AdminNavbar />
        <div className="p-2 md:p-5 w-full sm:ml-2 md:ml-2 mt-3">
          <div className="flex items-center justify-between ">
            <h1 className="text-lg font-medium">All Users</h1>
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
            <div className="flex flex-col md:flex-row items-center gap-4 mt-4">
              <input
                type="search"
                placeholder="Search by name"
                className="border border-gray-300 rounded-md px-4 py-2 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <select
                className="border border-gray-300 rounded-md px-4 py-2"
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
          )}
          <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
            {finalList.map((item, index) => {
              return <UserDetails item={item} key={index} />;
            })}
          </div>
          {finalList.length === 0 && (
            <div className="text-center text-gray-500 mt-4">
              <h2>No users found.</h2>
              <button
                onClick={() => {
                  setSearchTerm(""), setSelectedSkill("");
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
