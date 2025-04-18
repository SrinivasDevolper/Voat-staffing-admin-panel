import AdminDashboard from "./components/AdminDashboard";
import AddHR from "./components/AddHR";
import AddUser from "./components/AddUser";
import AllHR from "./components/AllHR";
import AllUser from "./components/AllUser";
import AllApplications from "./components/AllApplications";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/all-applications" element={<AllApplications />} />
      <Route path="/add-hr" element={<AddHR />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/all-hr" element={<AllHR />} />
      <Route path="/all-users" element={<AllUser />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
}

export default App;
