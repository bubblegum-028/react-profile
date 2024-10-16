import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    setResponseMessage('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="App-header">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </label>
        <label>
          Message:
          <textarea name="message" value={formData.message} onChange={handleInputChange} required />
        </label>
        <button type="submit">Send</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}

export default Contact;
