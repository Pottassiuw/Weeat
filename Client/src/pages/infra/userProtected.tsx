import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
import { toast } from "react-toastify";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      toast.error("Login Necessário");
      navigate("/users/login", { replace: true });
    }
  }, [isSignedIn, navigate]);

  return isSignedIn ? children : null;
}
