import React, { useState, useEffect } from 'react';
import './ApplicationDashboard.css';

const StatusCard = ({ startupName, applicationID, status }) => {
  const getStatus = () => {
    switch (status.toLowerCase()) {
      case 'approved':
        return 'status-button approved';
      case 'waitlisted':
        return 'status-button waitlisted';
      case 'disapproved':
        return 'status-button disapproved';
      default:
        return 'status-button';
    }
  };

  return (
    <div className="card">
      <h2>Startup Name:- {startupName}</h2>
      <p>Application ID:- {applicationID}</p>
      <button className={getStatus()}>{status}</button>
    </div>
  );
};

const ApplicationDashboard = () => {

  const [data, setData] = useState([]);

  // fetching data from the backend
  // useEffect(() => {
  //   fetch('/api/endpoint') // Replace with your backend API endpoint
  //     .then(response => response.json())
  //     .then(data => setData(data))
  //     .catch(error => console.error('Error fetching data:', error));
  // }, []);

  // fake data 
  useEffect(() => {
    const fakeData = [
      {
        startupName: "Maksad",
        applicationID: "A12345",
        status: "Approved"
      },
      {
        startupName: "TechNova",
        applicationID: "B67890",
        status: "Waitlisted"
      },
      {
        startupName: "InnoVenture",
        applicationID: "C11223",
        status: "Disapproved"
      },
      {
        startupName: "AlphaWave",
        applicationID: "D44556",
        status: "Approved"
      },
      {
        startupName: "CodeCrafter",
        applicationID: "E77889",
        status: "Waitlisted"
      },
      {
        startupName: "Healthify",
        applicationID: "H31415",
        status: "Waitlisted"
      },
      {
        startupName: "UrbanNest",
        applicationID: "J71819",
        status: "Approved"
      },
      {
        startupName: "EcoVation",
        applicationID: "K92021",
        status: "Waitlisted"
      },
      {
        startupName: "AgriBoost",
        applicationID: "L12223",
        status: "Disapproved"
      },
      {
        startupName: "QuantumLeap",
        applicationID: "M32425",
        status: "Approved"
      },
      {
        startupName: "SolarSynergy",
        applicationID: "N52627",
        status: "Waitlisted"
      },
      {
        startupName: "BioGenix",
        applicationID: "O72829",
        status: "Disapproved"
      }
    ];
      
    setData(fakeData);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>   
      {data.map((item, index) => (
        <StatusCard
          key={index}
          startupName={item.startupName}
          applicationID={item.applicationID}
          status={item.status}
        />
      ))}
    </div>
  );
};

export default ApplicationDashboard;
