import React from "react";
import { NavLink } from "react-router-dom";

function AdminNavbar() {
  const navItems = [
    {
      label: "Dashboard",
      to: "/admin-dashboard",
      icon: "https://static.thenounproject.com/png/423483-200.png",
    },
    {
      label: "Add HR",
      to: "/add-hr",
      icon: "https://cdn-icons-png.flaticon.com/512/2303/2303871.png",
    },
    {
      label: "Add User",
      to: "/add-user",
      icon: "https://img.freepik.com/premium-vector/businessman-briefcase-icon-outline_1076610-39618.jpg",
    },
    {
      label: "Doctors List",
      to: "/all-hr",
      icon: "https://static.thenounproject.com/png/199571-200.png",
    },
    {
      label: "Users List",
      to: "/all-users",
      icon: "https://media.istockphoto.com/id/1682903427/vector/coding-team-icon.jpg?s=612x612&w=0&k=20&c=nZ2IlFTKHrlFGjnLvaE29-BaLg2Q1CMzGsOo_8nGPY0=",
    },
  ];

  return (
    <div className="h-screen w-full md:w-72 bg-white border-r border-gray-200 shadow-sm">
      <ul className="mt-4 space-y-2">
        {navItems.map(({ label, to, icon }) => (
          <NavLink
            to={to}
            key={label}
            className={({ isActive }) =>
              `flex items-center gap-4 py-3 px-6 rounded-l-full transition-all duration-200 ${
                isActive
                  ? "bg-[#f2fcfc] border-r-4 border-[#5A5AFD] text-[#2E3A59] font-medium"
                  : "text-[#515151] hover:bg-gray-50"
              }`
            }
          >
            <img src={icon} alt={`${label}-icon`} className="h-6 w-6" />
            <span className="hidden md:inline">{label}</span>
          </NavLink>
        ))}
      </ul>
    </div>
  );
}

export default AdminNavbar;
