// React
import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateToken } from "./redux/auth/actions";
// React router Dom
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
import ProtecedRoute from "./components/protectedRoute";
// Pages
const Home = lazy(() => import("./pages/home/homePage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));
const Products = lazy(() => import("./pages/products"));

function App() {
  const nav = useNavigate()
  const { loading,isAuth } = useSelector((state) => state.authReducer);
  //  if(loading){
  //   return <Spinner />
  //  }
const dispatch=useDispatch()
useEffect(() => {
  dispatch(validateToken()).then((res)=>{
    if (!res) nav("/");  })
}, [isAuth])


  return (
    <div className="App">
      <Suspense fallback="Loading...">
       
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/Products"
              element={<ProtecedRoute element={<Products />} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </Suspense>
    </div>
  );
}

export default App;
