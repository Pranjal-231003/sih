import React, { useEffect, useState } from "react";
import "./ApplicationsAdmin.css";
import AdminNavbar from '../AdminNavbar/AdminNavbar'

const ApplicationsAdmin = () => {

    // const [applications, setApplications] = useState([]);

    // Fetch data from the backend
    // useEffect(() => {
    //   const fetchApplications = async () => {
    //     try {
    //       const response = await axios.get("BACKEND_API_ENDPOINT");
    //       setApplications(response.data);  // if data format matches
    //     } catch (error) {
    //       console.error("Error fetching the data:", error);
    //     }
    //   };  
    //   fetchApplications();
    // }, [dependencies]);   // add dependencies

  const fakeData = [
    {
      id: 1,
      startupName: "Maksad",
      applicationId: "APP-001"
    },
    {
      id: 2,
      startupName: "TechNova",
      applicationId: "APP-002"
    },
    {
      id: 3,
      startupName: "InnoGen",
      applicationId: "APP-003"
    },
    {
      id: 4,
      startupName: "EcoVision",
      applicationId: "APP-004"
    }
  ];
  
    // change the variable name to applications from fakedata after fetchingdata from backend


    // *******also add the admin navbar which is different from the normal user navbar***********
    
    return (
      <>
        <AdminNavbar/>
        <div className="applications-list">
          {fakeData.map((app) => (
            <div key={app.id} className="application-card">
              <div className="application-details">
                <p><strong>Startup Name:-</strong> {app.startupName}</p>
                <p><strong>Application ID:-</strong> {app.applicationId}</p>
              </div>
              <button
                className="view-button"
                onClick={() => window.location.href = `/view-application/${app.id}`}
              >
                View Application
              </button>
            </div>
          ))}
        </div>
      </>
  );
}

export default ApplicationsAdmin;
