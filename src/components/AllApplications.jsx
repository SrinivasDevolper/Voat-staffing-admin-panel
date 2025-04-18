import AdminNavbar from "./AdminNavbar";
import Navbar from "./Navbar";
function AllApplications() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <AdminNavbar />
        <div className="overflow-x-auto w-full p-3 flex">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm sm:text-base">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-white"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-white"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-white"
                >
                  Booking Date
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-white"
                >
                  HR Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-white"
                >
                  Payment
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 text-left font-semibold text-gray-700 dark:text-white"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <tr key={index}>
                    <td className="px-4 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                      Srinivas
                    </td>
                    <td className="px-4 py-4 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                      Srinivas1234@gmail.com
                    </td>
                    <td className="px-4 py-4 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                      18/04/2025 at 8:30 AM
                    </td>
                    <td className="px-4 py-4 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                      Kesav HR
                    </td>
                    <td className="px-4 py-4 text-gray-600 dark:text-gray-300 whitespace-nowrap">
                      Rs. 25,000/-
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                        Booked
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AllApplications;

{
  /* <div>
  <div class="relative overflow-x-auto flex-1 ml-5 mt-5">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="px-6 py-3">
            jobSeeker (name)
          </th>
          <th scope="col" class="px-6 py-3">
            jobSeeker (email)
          </th>
          <th scope="col" class="px-6 py-3">
            Date & Time
          </th>
          <th scope="col" class="px-6 py-3">
            HR (name)
          </th>
          <th scope="col" class="px-6 py-3">
            Fees
          </th>
          <th scope="col" class="px-6 py-3">
            status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white font-medium">
                Srinivas
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                Srinivas1234@gmail.com
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                Booked on 18/04/2025 at 8:30 AM
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                Kesav HR
              </td>
              <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                Rs. 25,000/-
              </td>
              <td className="px-6 py-4 text-sm">
                <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                  Booked
                </span>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </div>
</div>; */
}

//  <tbody>
//    {Array[10].fill(0).map((_, index) => (
//      <tr class="bg-white dark:bg-gray-800" key={index}>
//        <th
//          scope="row"
//          class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
//        >
//          Srinivas
//        </th>
//        <td class="px-6 py-4">Srinivas1234@gmail.com</td>
//        <td class="px-6 py-4">Booked on 10 18/4/2025 at 8:30 AM</td>
//        <td class="px-6 py-4">Kesav HR</td>
//        <td class="px-6 py-4">Rs.25000/-</td>
//        <td class="px-6 py-4">Booked</td>
//      </tr>
//    ))}
//  </tbody>;
