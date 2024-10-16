import React, { useState } from 'react';
import SubmissionSuccess from './SubmissionSuccess';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return <SubmissionSuccess formData={formData} />;
  }

  return (
    <div className="App-header">
      <h2 className="text-light">Contact Me</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <label className="text-light">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="text-light">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </label>
        <label className="text-light">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </label>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default Contact;
