import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useRouter } from "next/router";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!auth?.loading && !auth?.user) {
      router.push("/login");
    }
  }, [auth?.loading, auth?.user, router]);

  if (auth?.loading) {
    return <div>Loading...</div>;
  }

  return auth?.user ? <>{children}</> : null;
};

export default ProtectedRoute;
