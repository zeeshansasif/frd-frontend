import React from "react";
import ServerStatus from "./Component/ServerStatus";
import ProfileMenu from "./Component/ProfileMenu";
import SettingMenu from "./Component/SettingMenu";
import AccountMenu from "./Component/AccountMenu";
import AccountInfo from "./Component/AccountInfo";
import Instrument from "./Component/Instrument";
import Clock from "./Component/Clock";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header">
      <div className="header-col company-logo">
        <img src="./images/logo.png" alt="" />
      </div>
      <div className="header-col app-type">
        <span> Demo </span>
      </div>
      <div className="header-col server-status">
        <ServerStatus />
        <Link className="real-time-link"> Get RealTime Data </Link>
      </div>
      <div className="header-col settings">
        <ProfileMenu />
        <SettingMenu />
      </div>
      <div className="header-col header-account-info">
        <div className="account">
          <span className="label"> Account </span>

          <AccountMenu />
        </div>
        <div className="account-info-view">
          <AccountInfo />
        </div>
      </div>
      <div className="header-col header-instrument">
        <Instrument />
      </div>
      <div className="header-col header-clock">
        <Clock />
      </div>
    </header>
  );
};

export default Header;
