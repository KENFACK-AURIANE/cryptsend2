import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebaseConfiguration";

export function useBlockBackNavigation() {
  const navigate = useNavigate();

  useEffect(() => {
    const handlePopState = () => {
      if (!auth.currentUser) {
        navigate("/", { replace: true });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);
}
