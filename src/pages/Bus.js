import React from "react";
import Clock from "./Clock";
import { Link } from "react-router-dom";
import HomeTop from "./HomeTop";

const Bus = () => {
  return (
    <>
    <HomeTop/>
      <Clock />
      <div>
        <img className="bus" src="img/1.jpg" />
        <img className="bus" src="img/2.jpg" />
      </div>
    </>
  );
};
export default Bus;
