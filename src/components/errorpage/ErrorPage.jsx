import React from "react";
import "./ErrorPage.css";

function ErrorPage({ message }) {
  return (
    <div className="error-container">
      <h1 className="error-title">Error</h1>
      <div className="error-animation"></div>
      <p className="error-message">{message}</p>
    </div>
  );
}

export default ErrorPage;
