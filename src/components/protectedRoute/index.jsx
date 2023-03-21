import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



export default function ProtectedRoute({ element }) {
    const { isAuth } = useSelector((state) => state.authReducer);  
    if (isAuth) {
      return element
    } else {
      return  <Navigate to="/"/>;
    }
  }
