// React
import { lazy, Suspense } from "react";
// React router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// components
import Navbar from "./components/Navbar";
// Pages
const Home = lazy(() => import("./pages/home/homePage"));

const NotFound = lazy(() => import("./pages/NotFound"));
const Login = lazy(() => import("./pages/Login"));

function App() {
  return (
    <div className="App">
      <Suspense fallback="Loading...">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
