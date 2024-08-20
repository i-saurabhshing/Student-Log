import React, { useState } from "react";
import "./StudentLog.css";

const StudentLog = () => {
  const studentsData = [
    { name: "Alice Smith", details: "Age: 20, Major: Computer Science" },
    { name: "Bob Johnson", details: "Age: 22, Major: Mechanical Engineering" },
    { name: "Charlie Brown", details: "Age: 21, Major: Mathematics" },
    { name: "David White", details: "Age: 23, Major: Physics" },
    { name: "Eve Black", details: "Age: 22, Major: Chemistry" },
    { name: "Frank Green", details: "Age: 20, Major: Biology" },
    { name: "Grace Lee", details: "Age: 21, Major: Statistics" },
    { name: "Hannah Adams", details: "Age: 22, Major: Engineering" },
    { name: "Isaac Miller", details: "Age: 23, Major: Economics" },
    { name: "Jack Wilson", details: "Age: 21, Major: Sociology" },
    { name: "Kaitlyn Taylor", details: "Age: 20, Major: Political Science" },
    { name: "Liam Davis", details: "Age: 22, Major: History" },
    { name: "Mia Thomas", details: "Age: 21, Major: Philosophy" },
    { name: "Noah Martinez", details: "Age: 23, Major: Literature" },
    { name: "Olivia Anderson", details: "Age: 22, Major: Art" },
    { name: "Paul Clark", details: "Age: 20, Major: Music" },
    { name: "Quinn Lewis", details: "Age: 21, Major: Anthropology" },
    { name: "Riley Walker", details: "Age: 22, Major: Design" },
    { name: "Sophia Hall", details: "Age: 23, Major: Architecture" },
    { name: "Tyler Young", details: "Age: 21, Major: Film Studies" },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelectStudent = (student) => {
    setSelectedStudent(student);
    setSearchTerm(student.name); // Set search term to selected student's name
    setDropdownVisible(false); // Close dropdown after selection
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="student-log">
      <header>
        <h1>Student Log</h1>
      </header>
      <div className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search student..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setDropdownVisible(true)}
          />
          <button onClick={toggleDropdown} className="dropdown-arrow">
            &#9660; {/* Down arrow symbol */}
          </button>
        </div>
        {dropdownVisible && filteredStudents.length > 0 && (
          <ul className="dropdown show">
            {filteredStudents.map((student, index) => (
              <li key={index} onClick={() => handleSelectStudent(student)}>
                {student.name}
              </li>
            ))}
          </ul>
        )}
      </div>
      {selectedStudent && (
        <div className="student-details">
          <h2>{selectedStudent.name}</h2>
          <p>{selectedStudent.details}</p>
        </div>
      )}
    </div>
  );
};

export default StudentLog;
