import React from 'react';

function SubmissionSuccess({ formData }) {
  return (
    <div className="App-header">
      <h2 className="text-light">Thank you, {formData.name}!</h2>
      <p className="text-light">Your message has been sent successfully.</p>
      <h3 className="text-light">Submitted Information:</h3>
      <p className="text-light"><strong>Name:</strong> {formData.name}</p>
      <p className="text-light"><strong>Email:</strong> {formData.email}</p>
      <p className="text-light"><strong>Message:</strong> {formData.message}</p>
    </div>
  );
}

export default SubmissionSuccess;
