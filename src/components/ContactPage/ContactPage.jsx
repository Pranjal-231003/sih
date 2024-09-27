import React, { useEffect, useState } from 'react';
import './ContactPage.css';  // Import the CSS file

const ContactPage = () => {
    const [contacts, setContacts] = useState([]);

  // Fetch contacts from the backend
    
//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const response = await fetch('?'); // Adjust the endpoint as per your backend setup
//         const data = await response.json();
//         setContacts(data);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       }
//     };

//     fetchContacts();
//     }, []);
    

    // fake data
//   const contacts = [
//     { name: 'John Doe', email: 'john.doe@example.com', phone: '123-456-7890' },
//     { name: 'Jane Smith', email: 'jane.smith@example.com', phone: '987-654-3210' },
//     { name: 'Michael Johnson', email: 'michael.j@example.com', phone: '456-789-0123' },
//     { name: 'Emily Davis', email: 'emily.davis@example.com', phone: '789-012-3456' },
//     { name: 'Chris Evans', email: 'chris.evans@example.com', phone: '234-567-8901' },
//     { name: 'Sophia Brown', email: 'sophia.brown@example.com', phone: '890-123-4567' },
//     { name: 'Liam Wilson', email: 'liam.wilson@example.com', phone: '567-890-1234' },
//     { name: 'Olivia Martinez', email: 'olivia.martinez@example.com', phone: '012-345-6789' }
    //   ];
    

  return (
    <div className="contact-page-container">
      <h1 className="contact-page-title">CONTACT US</h1>
      <div className="contact-list">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-item">
            <p><strong>{index + 1}. {contact.name}</strong></p>
            <p>Email: {contact.email}</p>
            <p>Contact: {contact.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
