import React from "react";
import { useDispatch } from "react-redux";
import { isAuthenTicate } from "../store/action/userAction";
import "./Home.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(isAuthenTicate());
    localStorage.setItem("token", JSON.stringify("true"));
    navigate("/users");
  };
  return (
    <div className="home_page">
      Welcome, Please login
      <button onClick={handleClick}>Login</button>
    </div>
  );
};

export default Home;
