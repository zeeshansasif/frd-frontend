import React from "react";
const ServerStatus = (props) => {
  return (
    <ul className="server-status-list">
      <li className="server-status-list-item">
        <span className="status-label"> Server: </span>
        <span className="status-value highlighted-text"> connected </span>
      </li>
      <li className="server-status-list-item">
        <span className="status-label"> Quotes: </span>
        <span className="status-value"> delayed </span>
      </li>
      <li className="server-status-list-item">
        <span className="status-label"> Market: </span>
        <span className="status-value highlighted-text"> open </span>
      </li>
    </ul>
  );
};

export default ServerStatus;
