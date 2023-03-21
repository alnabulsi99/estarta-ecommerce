import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
import { Login } from "../../redux/auth/actions";
import { useDispatch, useSelector } from "react-redux";

export default function LoginPage() {
  const { isAuth, loading } = useSelector((state) => state.authReducer);
  console.log(isAuth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");

  function handleLogin() {
    dispatch(Login(email)).then(res=>{ 
      if(res){
        navigate("/products");
      }
    })
  }

  useEffect(() => {
    if (isAuth) navigate("/");
  }, [isAuth]);

  return (
    <div className={styles.loginContainer}>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Enter your email"
      />

      <button
        disabled={loading}
        onClick={handleLogin}
        className={styles.loginBtn}
      >
        {loading ? "Loading..." : "login"}
      </button>
    </div>
  );
}
