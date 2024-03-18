import React, { useEffect, useState } from "react";
import "./Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
    message: "",
    id: Math.floor(Math.random() * 1000)
  });
  const nameHandler = (event) => {
    setContact({ ...contact, [event.target.name]: event.target.value });
  };

  const submitHandler = () => {};
  console.log(contact);
  return (
    <div className="contact_container">
      <div className="contact_header">
        <h1>CONTACT with US</h1>
      </div>
      <div className="contact_body">
        <div className="contact_form">
          <h2 className="contact_forom_header">Send us a message</h2>
          <div className="contact_form_body">
            <form action="submit" className="form">
              <div className="contact_form_input">
                <label className="form_label">Name *</label>
                <input
                  className="form_input"
                  type="text"
                  placeholder="Your name"
                  required
                  onChange={nameHandler}
                  value={contact.name}
                  name="name"
                />
              </div>
              <div className="contact_form_input">
                <label className="form_label">Email *</label>
                <input
                  className="form_input"
                  type="text"
                  placeholder="Your email"
                  required
                  value={contact.email}
                  onChange={nameHandler}
                  name="email"
                />
              </div>
              <div className="contact_form_input">
                <label className="form_label">Phone</label>
                <input
                  className="form_input"
                  type="text"
                  value={contact.number}
                  onChange={nameHandler}
                  name="number"
                  placeholder="Phone #"
                />
              </div>
              <div className="contact_form_input">
                <label className="form_label">Company</label>
                <input
                  className="form_input"
                  type="text"
                  placeholder="Company name"
                  value={contact.company}
                  onChange={nameHandler}
                  name="company"
                />
              </div>
              <div className="contact_form_textarea">
                <label className="form_label">Message *</label>
                <textarea
                  className="form_textarea"
                  type=""
                  placeholder="Write your message"
                  required
                  value={contact.message}
                  onChange={nameHandler}
                  name="message"
                />
              </div>
              <button
                className="form_btn"
                type="submit"
                onClick={submitHandler}
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
        <div className="contact_info">
          <div className="contact_info_body">
            <h2 className="contact_info_title">Contact Information</h2>
            <p className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              eaque, minus ex ab aspernatur harum.
            </p>
            <div className="info_content">
              <FaLocationDot className="info_icon" />
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
            </div>
            <div className="info_content">
              <FaPhoneAlt className="info_icon" />
              <p>+1(291) 0991 9695</p>
            </div>
            <div className="info_content">
              <IoMdMail className="info_icon" />
              <p>info@mywebsite.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
