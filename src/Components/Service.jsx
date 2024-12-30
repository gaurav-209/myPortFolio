import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import{ useState, useEffect } from "react";
import "./Service.css";
import ServiceCard from './Servicecard';
import LetsConnectCard from './LetsConnectCard';


const Service = () => {

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from your API
    fetch('/data/Service.json')
      .then((response) => response.json())
      .then((data) => {
        setServices(data.services); // Assuming your API response is { services: [...] }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching services:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  return (
    <>
    <main>
        <Navbar/>
        <div className="portfolio-container">
          <h2>Services</h2>
          <h4></h4>
        </div>
        <div className="section-3">
                    <LetsConnectCard/>
                </div>
                <div className="services-container">
      <h1>Our Services</h1>
      <p className="services-description">Explore the wide range of services we offer, tailored to meet your needs.</p>
      <div className="services-grid">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            price={service.price}
            unit={service.unit || ''}
          />
        ))}
      </div>
    </div>
        <div className="section-2">
        <Footer/>
        </div>
    </main>
    </>
  )
}

export default Service