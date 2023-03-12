import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to Estarta e-commerce store!</h1>
      <p>
       Click The login button to redirect to the login page!
      </p>
      <Link to="/login">
        <button className={styles.loginbtn}>Login </button>
      </Link>
    </div>
  );
};

export default HomePage;
