import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedUser({ children }: ProtectedRouteProps) {
  const { isSignedIn } = useAuth();
  const user = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      toast.error("Página reservada para usuários");
      navigate("/users/login", { replace: true });
    }
  }, [isSignedIn, navigate]);

  return isSignedIn ? children : null;
}
