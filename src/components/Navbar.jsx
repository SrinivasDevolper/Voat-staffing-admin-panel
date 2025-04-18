import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-white border-b p-4">
      <h1 className="text-xl">Navbar</h1>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}

export default Navbar;
