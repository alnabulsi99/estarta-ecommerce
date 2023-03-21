// Styles
import styles from "./styles.module.css";
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
import { RiShoppingCartLine } from "react-icons/ri";

export default function Navbar() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { isAuth, user } = useSelector((state) => state.authReducer);
  const { items } = useSelector((state) => state.cartReducer);

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
      <div className={styles.btns}>
        <Link to="/">
          <button className={styles.homeBtn}>Home</button>
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
          <div className={styles.btns}>
            <Link to="/products">
              <button className={styles.proBtn}>Products</button>
            </Link>
            <div className={styles.logoutIcon}>
              <Link to={"/cart"} className={styles.cartIcon}>
                <RiShoppingCartLine size={30} color="blue" />
                <div className={styles.ItemsCount}>{items?.length}</div>
              </Link>

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
      </div>
    </nav>
  );
}
