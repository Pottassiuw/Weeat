import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider";

type childrenWithProps = PropsWithChildren;
export default function protectedRoute({ children }: childrenWithProps) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) {
      navigate("/users/register", { replace: true });
    }
  }, [user, navigate]);

  return children;
}
