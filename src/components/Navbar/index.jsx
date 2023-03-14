// React
import { useEffect, useState } from "react";
// React Router Dom
import { Link, useNavigate } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../../redux/auth/actions";
// Icons
import { BsArrowRightShort } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { TbShoppingCart } from "react-icons/tb";

// Styles
import styles from "./styles.module.css";

export default function Navbar() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { isAuth, user } = useSelector((state) => state.authReducer);
  const [isLogoutBoxOpened, setIsLogoutBoxOpened] = useState(false);
  function handleLogout() {
    dispatch(Logout()).then((res) => {
      if (res) {
        nav("/");
      }
    });
  }


  return (
    <nav>
      <Link to="/" className={styles.logo}>
        Estarta E-commerce
      </Link>
      {!isAuth && (
        <div>
          <Link to="/login">
            <button className={styles.loginBtn}>
              Login <BsArrowRightShort size={20} />
            </button>
          </Link>
        </div>
      )}

      {isAuth && (
        <div>
          <div className={styles.logoutIcon}>
            <BiUserCircle 
            color="blue"
              onClick={() => setIsLogoutBoxOpened(!isLogoutBoxOpened)}
              size={30}
            />
            {isLogoutBoxOpened && (
              <div className={styles.logoutBox}>
                {user?.email}
                <a onClick={handleLogout} className={styles.logoutText}>
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      )}
      <TbShoppingCart/>
    </nav>
  );
}

// clear the local storage
// \

// test@test.com ==> magic.login ==> true ( 1- localStorage 2- change Reducer 3- go to '/')
// magic.logout ==> Reset Reducer ==> localStorage.clear() ==> redirect
