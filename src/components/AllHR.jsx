import Hrdetails from "../Pages/Hrdetails";
import AdminNavbar from "./AdminNavbar";
import Navbar from "./Navbar";

function AllHR() {
  return (
    <div>
      <Navbar />
      <div className="flex items-start">
        <AdminNavbar />
        <div className="p-5 w-full ml-5 mt-3">
          <h1 className="text-lg font-medium">All HR's</h1>
          <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
            {Array(10)
              .fill(0)
              .map((item, index) => {
                return <Hrdetails item={item} eachId={index} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllHR;
