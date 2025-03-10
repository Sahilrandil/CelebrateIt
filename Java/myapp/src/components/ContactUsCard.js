
import axios from "axios";
import { useEffect, useState } from "react";
import '../assets/style/ContactUsCard.css';

export function ContactUsCard() {
  const [contacts, setContacts] = useState([]);

  async function fetchData() {
    try {
      const response = await axios.get("http://localhost:8080/api/contacts");
      setContacts(response.data);
    } catch (error) {
      console.error("Error fetching contact us data:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (contacts.length === 0) {
    return (
      <div className="no-contact-data">
        No Contact Us Data Available
      </div>
    );
  }

  return (
    <div className="contact-us-cards">
      {contacts.map((contact) => (
        <div key={contact.id} className="contact-us-card">
          <h3>{contact.name}</h3>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Contact Number:</strong> {contact.mobile}</p>
          <p><strong>Message:</strong> {contact.message}</p>
        </div>
      ))}
    </div>
  );
}

