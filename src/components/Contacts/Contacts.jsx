import React, { useState } from "react";

const Contacts = () => {
  return (
    <div className="container mt-5 col-lg-6 col-md-8 col-sm-10">
      <h1 className="text-center mb-4">Get in Touch</h1>
      <form className="p-4 shadow rounded">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control inp"
            id="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control inp"
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Subject
          </label>
          <input
            type="text"
            className="form-control inp"
            id="subject"
            placeholder="Enter subject"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            className="form-control inp"
            id="message"
            rows="5"
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn-send btn w-100 py-2">
          Send Message
        </button>
      </form>

      <div className="mt-5 text-center">
        <h5>Connect with Me</h5>
        <div className="d-flex justify-content-center align-items-center gap-4 mt-3">
          <a
            href="mailto:mashazbn@gmail.com"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
              alt="Email"
              style={{ width: "40px" }}
            />
          </a>
          <a
            href="https://t.me/mashechka1222"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png"
              alt="Telegram"
              style={{ width: "40px" }}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
