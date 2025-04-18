import React from "react";
import AdminNavbar from "../components/AdminNavbar";
import Navbar from "./Navbar";
function AdminDashboard() {
  return (
    <div>
      <Navbar />
      <div className="flex items-start">
        <AdminNavbar />
        <div className="p-5 w-full">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {[
              {
                icon: "https://static.thenounproject.com/png/1120813-200.png",
                count: "14",
                label: "HR Teams",
              },
              {
                icon: "https://static.vecteezy.com/system/resources/thumbnails/012/174/332/small_2x/simple-magnifying-icon-png.png",
                count: "2",
                label: "Booked Applications",
              },
              {
                icon: "https://static.vecteezy.com/system/resources/thumbnails/035/861/087/small_2x/simple-people-icon-in-black-and-grey-colors-png.png",
                count: "5",
                label: "Users",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center p-4 rounded shadow bg-white"
              >
                <img
                  src={item.icon}
                  alt="icon"
                  className="bg-[#f0fcf9] rounded p-3 m-0 md:mr-4 w-16"
                />
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-3xl">{item.count}</p>
                  <h1 className="text-[#8893b0] text-xl text-center md:text-left">
                    {item.label}
                  </h1>
                </div>
              </div>
            ))}
          </div>

          {/* Latest Applications Section */}
          <div className="border border-gray-200 p-4 rounded bg-white">
            <div className="flex items-center gap-3 font-semibold mb-2">
              <img
                className="w-10"
                src="https://static.vecteezy.com/system/resources/previews/026/221/294/non_2x/playlist-icon-symbol-design-illustration-vector.jpg"
                alt="playlist"
              />
              <h1 className="hidden md:flex text-xl">
                Latest Book Applications
              </h1>
            </div>
            <hr />
            <ul className="mt-4 space-y-4">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <li
                    key={index}
                    className="flex flex-col md:flex-row justify-between items-center gap-5"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <img
                        src="https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2264922221.jpg"
                        alt="avatar"
                        className="w-16 h-16 object-cover rounded-full"
                      />
                      <div className="text-center md:text-left">
                        <h1 className="text-lg font-semibold">
                          Srinivas Developer
                        </h1>
                        <p className="text-gray-500">
                          Booking on 24th July, 2024
                        </p>
                      </div>
                    </div>
                    <button className="bg-red-100 text-red-500 p-2 rounded-full w-10 h-10 flex items-center justify-center">
                      X
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
