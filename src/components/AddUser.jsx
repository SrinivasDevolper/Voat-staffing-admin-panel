import AdminNavbar from "./AdminNavbar";
import Navbar from "./Navbar";

function AddHR() {
  return (
    <div>
      <Navbar />
      <div className="flex items-start">
        <AdminNavbar />
        <div className="p-2 md:p-5 w-full sm:ml-2 mt-2">
          <form className="md-3 w-full">
            <p className="mb-3 text-lg font-medium">Add User Details</p>
            <div className="bg-white px-3 md:px-8 py-8 border w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
              <div className="flex items-center gap-4 mb-8 text-gray-500">
                <label htmlFor="doc-image">
                  <img
                    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                    alt="profile img"
                    className="w-28 h-28 bg-gray-100 object-fit rounded-full cursor-pointer"
                  />
                </label>
                {/* <input
                onChange={(e) => setDocImg(e.target.files[0])}
                type="file"
                id="doc-image"
                hidden
              /> */}
                <p>picture</p>
              </div>
              <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
                <div className="w-full lg:flex-1 flex flex-col gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <p>User NAME</p>
                    <input
                      className="border rounded px-3 py-2"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <p>User EMAIL</p>
                    <input
                      className="border rounded px-3 py-2"
                      type="email"
                      placeholder="email"
                      required
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <p>User PASSWORD</p>
                    <input
                      className="border rounded px-3 py-2"
                      type="password"
                      placeholder="password"
                      required
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <p>User AVAILBILTY</p>
                    <select className="border rounded px-3 py-2">
                      <option value={true}>AVAILBLE</option>
                      <option value={false}>NOT AVAILBLE</option>
                    </select>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <p>Experience</p>
                    <select className="border rounded px-3 py-2" name="" id="">
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
                    <div className="flex-1 flex flex-col gap-1">
                      <p>FEES</p>
                      <input
                        className="border rounded px-3 py-2"
                        type="number"
                        placeholder="fees"
                        required
                      />
                    </div>
                  </div>
                </div>
                <div className="w-full lg:flex-1 flex flex-col gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <p>User Skills</p>
                    <select className="border rounded px-3 py-2" name="" id="">
                      <option value="Neurologist">MERN STACk</option>
                      <option value="Dermatology">MEAN STACk</option>
                      <option value="Cardiologist">Andriod Devolper</option>
                    </select>
                    <div className="flex-1 flex flex-col gap-1 mt-3">
                      <p>Address</p>
                      <input
                        className="border rounded px-3 py-2"
                        type="text"
                        placeholder="Address 1"
                        required
                      />
                      <input
                        className="border rounded px-3 py-2"
                        type="text"
                        placeholder="Address 2"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <p className="mt-4 mb-2 ">About User</p>
                <textarea
                  className="w-full px-4 pt-2 border rounded"
                  type="text"
                  placeholder="write about doctor"
                  rows={5}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#2b7fff] px-10 py-3 mt-4 text-white rounded-full cursor-pointer hover:bg-[#1164e0] transition duration-300"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddHR;
