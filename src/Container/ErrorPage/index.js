import React from "react";
import "./style.css";

export const ErrorPage = () => {
  const error = {
    message: "404",
    name: "Not Found",
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <span className="seperator sf-mono">{error.message}</span>
      <span className="sf-display-medium">{error.name}</span>
    </div>
  );
};

export default ErrorPage;
