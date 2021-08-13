import React from "react";
import Header from "../component/Header";
const MainLayout = (props) => {
  return (
    <div className="wrapper">
      <Header />
      {props.children}
    </div>
  );
};
export default MainLayout;
