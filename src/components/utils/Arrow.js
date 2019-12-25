import React from "react";

function Arrow({ info }) {
  return !info ? (
    <i className="fas fa-angle-down" style={{ color: "#E6AB03" }}></i>
  ) : (
    <i className="fas fa-angle-up" style={{ color: "#AE7A0C" }}></i>
  );
}

export default Arrow;
