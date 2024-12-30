import React, { useState, useEffect } from "react";
import "./Card3.css"; // Ensure to include updated styles
import "./Projects.css";
import { Link } from "react-router-dom";

const Project = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/projects.json"); // Replace with your API or JSON path
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="card-container">
      {data.map((item) => (
        <div className="p-card" key={item.id}>
          {/* Add Link around hover-prompt */}
          <Link to={`${item.link}`} className="card-link">
            <img
              src={`${item.imgsrc}`}
              alt={item.title}
              className="card-image1"
            />
            <div className="title1">{item.title}</div>
            <div className="desc">{item.desc}</div>
            {/* Hover prompt */}
            <div className="hover-prompt">Click to Visit Website</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Project;
