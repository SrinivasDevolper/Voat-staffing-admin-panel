import { useState } from "react";

function Hrdetails({ item, handleAvailabilityChange }) {
  const { id, name, skills, availability, experience, location } = item;
  const skillsList = skills.join(", ");
  const [isAvailable, setIsAvailable] = useState(availability);
  const handleChange = (e) => {
    setIsAvailable(e.target.checked);
    handleAvailabilityChange(id, e.target.checked); // Call the parent function to update availability
  };
  return (
    <div className="border border-indigo-200 rounded-xl max-w-56 overflow-hidden cursor-pointer group">
      <img
        className="h-60 w-60 object-fit bg-[#f2ffff] group-hover:bg-primary transition-all duration-500"
        src="https://img.freepik.com/premium-vector/hr-manager-icon-vector-image-can-be-used-hiring-process_120816-351312.jpg"
        alt="hr-image"
      />
      <div className="p-4">
        <p className="text-neutral-800 text-lg font-medium">{name}</p>
        <p className="text-neutral-600 text-sm">
          <span className="text-[#2B7FFF]">Location:</span> {location}
        </p>
        <p className="text-neutral-600 text-sm">
          <span className="text-[#2B7FFF]">Experience:</span> {experience} years
        </p>
        <p className="text-neutral-600 text-sm">
          <span className="text-[#2B7FFF]">HR Skills:</span> {skillsList}
        </p>
        <div className="mt-2 flex items-center gap-1 text-sm">
          <input
            name="availability"
            id={`availability-${id}`}
            type="checkbox"
            checked={isAvailable}
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <label htmlFor={`availability-${id}`}>Available</label>
        </div>
      </div>
    </div>
  );
}

export default Hrdetails;
