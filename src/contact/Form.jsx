
import React, { useState } from "react";
import "./ContactForm.css";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // you can add form validation or backend API call here
    alert("მადლობა! თქვენი მესიჯი გაგზავნილია");
    setFormData({ name: "", mobile: "", email: "", message: "" });
  };

  return (
    <section className="contact-section">
      <h2>მოგვწერეთ</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">სახელი:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="შეიყვანეთ თქვენი სახელი"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">ტელ:</label>
          <input
            type="tel"
            id="mobile"
            name="mobile"
            placeholder="შეიყვანეთ თქვენი ტელეფონის ნომერი"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">ელექტრონული ფოსტა:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="შეიყვანეთ თქვენი ელექტრონული ფოსტა"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">მესიჯი</label>
          <textarea
            id="message"
            name="message"
            placeholder="თუ ჩემთან რაიმე კითხვა გაქვთ, მომწერეთ..."
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          გაგზავნა
        </button>
      </form>
    </section>
  );
}