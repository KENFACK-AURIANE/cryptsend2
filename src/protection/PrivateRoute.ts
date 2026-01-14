import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfiguration";

interface PrivateRouteProps {
  children: ReactElement;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const navigate = useNavigate();
  const user = auth.currentUser;

  if (!user) {
    navigate("/", { replace: true });
  }

  return children;
}
