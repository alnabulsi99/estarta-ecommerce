import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Estarta e-commerce store!</h1>
      <p>Login To See Products </p>
      <Link to="/login">
        <button className={styles.loginbtn}>Login </button>
      </Link>
    </div>
  );
};

export default HomePage;
