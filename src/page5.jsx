import React, { useState } from "react";
import Bg from "./components/bg.jsx";
import "./page5.css";
 
// Faculty images
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import p5 from "./assets/p5.png";
import p6 from "./assets/p6.png";
import p7 from "./assets/p7.png";
import p8 from "./assets/p8.png";
import p9 from "./assets/p9.png";
import p10 from "./assets/p10.png";
import p11 from "./assets/p11.png";
import p12 from "./assets/p12.png";
import p13 from "./assets/p13.png";
import p14 from "./assets/p14.png";

const facultyData = [
  { img: p1, name: "Dr. A Sharma", domain: "AI & Robotics" },
  { img: p2, name: "Prof. B Kumar", domain: "Computer Vision" },
  { img: p3, name: "Dr. C Gupta", domain: "Data Science" },
  { img: p4, name: "Dr. D Patel", domain: "Networks" },
  { img: p5, name: "Prof. E Singh", domain: "Mathematics" },
  { img: p6, name: "Dr. F Verma", domain: "Human-Computer Interaction" },
  { img: p7, name: "Dr. G Nair", domain: "Cybersecurity" },
  { img: p8, name: "Dr. H Rao", domain: "Embedded Systems" },
  { img: p9, name: "Dr. I Das", domain: "Machine Learning" },
  { img: p10, name: "Dr. Romi Banerjee", domain: "Assistant Professor CSE" },
  { img: p11, name: "Dr. K Choudhary", domain: "Blockchain" },
  { img: p12, name: "Dr.Sumit Kalra", domain: "Assistant Professor Department of Computer Science & Engineering" },
  { img: p13, name: "Dr. M Roy", domain: "Cloud Computing" },
  { img: p14, name: "Dr. N Mehta", domain: "IoT Systems" },
];

function Page5() {
  const [hoveredFaculty, setHoveredFaculty] = useState(null);

  return (
    <div className="page5-container">
      <Bg style={{backgroundColor:"white"}}/>

      <h1 className="page5-heading">Comics Studies<br />Lab@IITJ</h1>

      {/* Faculty Section */}
      <div className="faculty-section">
        <h2 className="faculty-title">IITJ Faculty</h2>

        <div className="faculty-grid">
          {facultyData.map((faculty, index) => (
            <div
              key={index}
              className="faculty-card"
              onMouseEnter={() => setHoveredFaculty(faculty)}
              onMouseLeave={() => setHoveredFaculty(null)}
            >
              <img src={faculty.img} alt={faculty.name} />
            </div>
          ))}
        </div>

        {/* Hover Info Box */}
        {hoveredFaculty && (
          <div className="info-box">
            <h3>{hoveredFaculty.name}</h3>
            <p>{hoveredFaculty.domain}</p>
          </div>
        )}
      </div>

      {/* Students Section */}
      <div className="students-section">
        <h2 className="student-title">IITJ Students</h2>
        <p>78 students & alumni</p>
      </div>

      {/* Artists Section */}
      <div className="artists-section">
        <h2 className="artist-title">Comics Artists & Scholars</h2>
        <p>(Add your artist section here later)</p>
      </div>
    </div>
  );
}

export default Page5;
