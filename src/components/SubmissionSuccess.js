import React from 'react';

function SubmissionSuccess({ formData }) {
  return (
    <div className="App-header">
      <h2>Thank you, {formData.name}!</h2>
      <p>Your message has been sent successfully.</p>
      <h3>Submitted Information:</h3>
      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Message:</strong> {formData.message}</p>
    </div>
  );
}

export default SubmissionSuccess;
