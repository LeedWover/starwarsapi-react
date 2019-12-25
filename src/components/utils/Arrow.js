import React from "react";

function Arrow({ info }) {
  return !info ? (
    <i className="fas fa-angle-down"></i>
  ) : (
    <i className="fas fa-angle-up"></i>
  );
}

export default Arrow;
