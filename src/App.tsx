import { lazy, Suspense, useEffect, useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ProtectRoute  from "./components/auth/ProtectRoute";
const Pricing = lazy(() => import("./pages/pricing/Pricing"));
const Login = lazy(() => import("./pages/login/Login"));
const Dashboard = lazy(() => import("./pages/dashborad/Dashborad"));
const Setting = lazy(() => import("./pages/setting/setting"));
const Home = lazy(() => import("./pages/home/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Profile =lazy(()=> import('./pages/profile/Profile'))
import Navbar from "../src/components/navbar/Navbar"
import LayoutLoader from "./components/LayoutLoader"
import "./App.css"
import { useDispatch } from "react-redux";
import axios from "axios";
import { userExited, userNotExited } from "./redux/reducer/authSlice";
import { RootState } from "./redux/store/store";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "./utils/constant/constant";
function App() {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}auth/login/success`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          dispatch(userExited(res.data.data));
        }
      })
      .catch((err) => {
        console.error(err);
        dispatch(userNotExited());
      });
  }, []);
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const toggleTheme = (): void => setDarkMode((prev) => !prev);
  return (
    <BrowserRouter>
    <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/settings" element={<Setting />} />
          </Route>
          <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
            <Route path="/" element={<Home />} />
           <Route path="/pricing" element={<Pricing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;