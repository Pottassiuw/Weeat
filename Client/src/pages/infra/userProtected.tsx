import { PropsWithChildren, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authProvider";
<<<<<<< HEAD
=======
import { toast } from 'react-toastify';
>>>>>>> master

type childrenWithProps = PropsWithChildren;
export default function protectedRoute({ children }: childrenWithProps) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === undefined) {
<<<<<<< HEAD
      navigate("/users/register", { replace: true });
    }
  }, [user, navigate]);
=======
      toast.error("Login Necessário");
      navigate("/users/login", { replace: true });
    }
  }, [user]);
>>>>>>> master

  return children;
}
