import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import React from 'react'; // Import React
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import App from './App'; // Import your main App component

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
);
