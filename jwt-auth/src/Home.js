import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const isLoginTrue = JSON.parse(localStorage.getItem("login"));

  const userNotLogin = () => (
    <>
      <h3>
        <Link to="/login">Login</Link>
      </h3>
      <h3>
        <Link to="/register">Register</Link>
      </h3>
    </>
  );
  return (
    <div style={{ marginTop: "100px" }}>
      {isLoginTrue && isLoginTrue.userLogin ? (
        <h2>Welcome Back User</h2>
      ) : (
        <>{userNotLogin()}</>
      )}
    </div>
  );
};

export default Home;
