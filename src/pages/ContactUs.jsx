import React, { useState } from 'react';
import Headers from '../components/Headers';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic here to handle the form submission
    console.log(formData);
    // You can send the form data to a server or perform other actions
  };

  return (

    <>
     <Headers />

     <div className="min-h-screen flex items-center justify-center bg-gray-100">
       
      <div className="max-w-2xl p-8 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <div className="mb-4">
          <p>Address: Your Company Address</p>
          <p>Email: your.email@example.com</p>
          <p>Phone: +1 123-456-7890</p>
        </div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mb-4 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mb-4 p-2 border border-gray-300 rounded-md"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="mb-4 p-2 border border-gray-300 rounded-md"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="mb-4 p-2 border border-gray-300 rounded-md"
          ></textarea>
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white border-none cursor-pointer hover:bg-blue-700 rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
    
  );
};

export default ContactUs;
