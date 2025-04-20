import { useState } from "react";

function UserDetails({ item }) {
  const { id, name, skills, availability } = item;
  const skillsList = skills.join(", ");
  const [isAvailable, setIsAvailable] = useState(availability);
  return (
    <div>
      <div className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group">
        <img
          className="h-60 w-60 object-fit bg-[#f2ffff] group-hover:bg-primary transition-all duration-500"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtuphMb4mq-EcVWhMVT8FCkv5dqZGgvn_QiA&s"
          alt="hr-image"
        />
        <div className="p-4">
          <p className="text-neutral-800 text-lg font-medium">{name}</p>
          <p className="text-neutral-600 text-sm">Skills: {skillsList}</p>
          <div className="mt-2 flex items-center gap-1 text-sm">
            <input
              name="availability"
              id={`availability-${id}`}
              type="checkbox"
              checked={isAvailable}
              onChange={(e) => {
                setIsAvailable(e.target.checked);
              }}
              className="cursor-pointer"
            />
            <label htmlFor={`availability-${id}`}>Available</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
