import React from "react";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "50px", height: "50px", color: "#003F62" }}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
