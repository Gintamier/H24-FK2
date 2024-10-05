import React, { useState } from "react";

export default function ContactForm() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Request",
    message: "",
  });

  // Handler for form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded shadow-md text-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full mt-1 p-2 border rounded text-gray-700"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full mt-1 p-2 border rounded text-gray-700"
          />
        </div>

        {/* Dropdown */}
        <div>
          <label htmlFor="subject" className="block text-gray-700">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="w-full mt-1 p-2 border rounded text-gray-700"
          >
            <option value="General Request">General Request</option>
            <option value="Restaurants">Restaurants</option>
            <option value="Office">Office</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-gray-700">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full mt-1 p-2 border rounded text-gray-700"
            rows="4"
          />
        </div>

        {/* Submit button */}
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
