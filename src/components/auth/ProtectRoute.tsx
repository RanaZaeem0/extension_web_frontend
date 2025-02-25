import { Navigate, Outlet } from "react-router-dom";
import LayoutLoader from "../LayoutLoader";

interface ProtectRouteProps {
  children?: React.ReactNode;
  redirect?: string;
  user: any; // Replace `any` with your actual user type
}

const ProtectRoute: React.FC<ProtectRouteProps> = ({ children, redirect = "/login", user }) => {
  // Avoid redirecting too early if user is still loading
  if (user === undefined) {
    return <LayoutLoader />;
  }

  if (!user) {
    return <Navigate to={redirect} replace />;
  }

  return children ? <>{children}</> : <Outlet />;
};
export default ProtectRoute