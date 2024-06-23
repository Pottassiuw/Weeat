import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedToken({ children }: ProtectedRouteProps) {
  const { isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      toast.error("Login necessário para acessar essa página");
      navigate("/users/login", { replace: true });
    }
  }, [isSignedIn, navigate]);

  return isSignedIn ? children : null;
}
