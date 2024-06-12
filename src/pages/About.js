import React from "react";
import { Link } from "react-router-dom";
import HomeTop from "./HomeTop";

const About = () => {
  return (
    <div>
    <HomeTop/>
      <h1>학과소개</h1>
      <p>교수진 소개</p>
      <ul>
        <li>
          <Link to="/about">학과소개</Link>
        </li>
        <li>
          <Link to="/profiles/n1">성낙운 교수님</Link>
        </li>
        <li>
          <Link to="/profiles/n2">양태천 교수님</Link>
        </li>
        <li>
          <Link to="/profiles/n3">홍석희 교수님</Link>
        </li>
        <li>
          <Link to="/profiles/n4">지상문 교수님</Link>
        </li>
        <li>
          <Link to="/profiles/n5">강인수 교수님</Link>
        </li>
        <li>
          <Link to="/profiles/n6">김주현 교수님</Link>
        </li>
        <li>
          <Link to="/profiles/void">존재하지 않는 프로필</Link>
        </li>
      </ul>
    </div>
  );
};
export default About;
