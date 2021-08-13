import React from "react";
const AccountInfo = (props) => {
  return (
    <ul className="account-list">
      <li className="acount-list-item">
        <span className="acount-info-label"> Net Liq Value </span>
        <span className="acount-info-value">0.00</span>
      </li>
      <li className="acount-list-item">
        <span className="acount-info-label"> Account Value </span>
        <span className="acount-info-value">100,000.00</span>
      </li>
      <li className="acount-list-item">
        <span className="acount-info-label"> Buying Power </span>
        <span className="acount-info-value">200,000.00</span>
      </li>
    </ul>
  );
};

export default AccountInfo;
