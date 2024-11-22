import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminNavbar from "./components/Navbar"; // Import the AdminNavbar
import AdminDashboard from "./components/AdminDashboard";
import Login from "./components/Login";
import ManageStudents from "./components/Students";
import Students from "./components/Student-manage";
import AddStudent from "./components/AddStudent";
import Faculty from "./components/Faculty-manage";
import AddFaculty from "./components/AddFaculty";
import AddCourse from "./components/AddCourse";
import Courses from "./components/Courses";
import Relationships from "./components/Relationships";
import FacultyAssignments from "./components/FacultyAssignments";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route
            path="/"
            element={<Login />}
          />
          <Route
            path="*"
            element={
              <>
                <AdminNavbar /> 
                <div className="">
                  <Routes>
                    <Route path="/dashboard" element={<AdminDashboard />} />
                    <Route path="/students" element={<Students />} />
                    <Route path="/home" element={<Students />} />
                    <Route path="/addstudent" element={<AddStudent />} />
                    <Route path="/faculty" element={<Faculty />} />
                    <Route path="/addfaculty" element={<AddFaculty />} />
                    <Route path="/addcourse" element={<AddCourse />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/relationships" element={<Relationships />} />
                    <Route
                      path="/FacultyAssignments"
                      element={<FacultyAssignments />}
                    />
                  </Routes>
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
