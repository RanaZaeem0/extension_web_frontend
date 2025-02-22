import { lazy, Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ProtectRoute } from "./components/auth/ProtectRoute";
const Pricing = lazy(() => import("./pages/pricing/Pricing"));
const Login = lazy(() => import("./pages/login/Login"));
import LayoutLoader from "./components/LayoutLoader"
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashborad/Dashborad";
import Setting from "./pages/setting/setting";
import Home from "./pages/home/Home";
import "./App.css"
function App() {


  const user =[{}]


  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route
            element={
            
                <ProtectRoute user={user} />
              
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/profile" element={<Dashboard />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;