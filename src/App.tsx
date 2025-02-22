import { lazy, Suspense } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ProtectRoute } from "./components/auth/ProtectRoute";
const Pricing = lazy(() => import("./pages/pricing/Pricing"));
const Login = lazy(() => import("./pages/login/Login"));
import LayoutLoader from "./components/LayoutLoader";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/dashborad/Dashborad";
function App() {
  const user = [{}];

  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route element={<ProtectRoute user={user} />}>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/profile" element={<Dashboard />} />
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
