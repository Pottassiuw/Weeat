import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";

type ProtectedRouteProps = PropsWithChildren;

export default function ProtectedStore({ children }: ProtectedRouteProps) {
  const { isSignedIn } = useAuth();
  const store = localStorage.getItem("store");
  const navigate = useNavigate();

  useEffect(() => {
    if (!store) {
      toast.error("Página reservada para estabelecimentos!");
      navigate("/stores/login", { replace: true });
    }
  }, [isSignedIn, navigate]);

  return isSignedIn ? children : null;
}
