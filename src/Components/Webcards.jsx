import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Webcards.css";

const Webcards = () => {
  const [data, setData] = useState([]);
  const [visibleCards, setVisibleCards] = useState(5); // Default: Show 5 cards

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/projects.json"); // Replace with your API
        const result = await response.json();
        setData(result); // Set full data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Handle responsive card count
  useEffect(() => {
    const updateVisibleCards = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1024) {
        setVisibleCards(5); // Show 5 cards
      } else if (screenWidth <= 1024 && screenWidth > 750) {
        setVisibleCards(3); // Show 3 cards
      } else {
        setVisibleCards(2); // Show 2 cards
      }
    };

    // Call function on load
    updateVisibleCards();

    // Add resize event listener
    window.addEventListener("resize", updateVisibleCards);

    // Cleanup listener on unmount
    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  return (
    <div className="card-grid">
      {data.slice(0, visibleCards).map((item) => (
        <div className="webcard" key={item.id}>
          {/* Add Link to each card */}
          <Link to={`${item.link}`} className="card-link">
            <img
              src={`${item.imgsrc}`}
              alt={item.title}
              className="card-image1"
            />
            <div className="title1">{item.title}</div>
            <div className="desc">{item.desc}</div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Webcards;
