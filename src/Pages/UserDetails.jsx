import React from "react";

function Hrdetails({ eachId }) {
  return (
    <div>
      <div
        className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group"
        key={eachId}
      >
        <img
          className="h-60 w-60 object-fit bg-[#f2ffff] group-hover:bg-primary transition-all duration-500"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
          alt="hr-image"
        />
        <div className="p-4">
          <p className="text-neutral-800 text-lg font-medium">User</p>
          <p className="text-neutral-600 text-sm">Skills: </p>
          <div className="mt-2 flex items-center gap-1 text-sm">
            <input
              name="availability"
              id="availability"
              type="checkbox"
              checked="checked"
            />
            <label htmlFor="availability">Available</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hrdetails;
