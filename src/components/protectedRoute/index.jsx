import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";



export default function ProtecedRoute({ props }) {
    const { isAuth } = useSelector((state) => state.authReducer);  
    if (isAuth) {
      return props
    } else {
      return  <Navigate to="/"/>;
    }
  }
