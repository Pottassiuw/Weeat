import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
import { toast } from 'react-toastify';

type childrenWithProps = PropsWithChildren;
export default function protectedRoute({ children }: childrenWithProps) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) {
      toast.error("Login Necessário");
      navigate("/users/login", { replace: true });
    }
  }, [user]);

  return children;
}
