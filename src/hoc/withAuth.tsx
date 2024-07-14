"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrappedComponent: React.FC) => {
  const AuthenticatedComponent: React.FC = (props) => {
    const router = useRouter();

    useEffect(() => {
      const token = localStorage.getItem("token");
      const tokenExpiredDate = new Date(
        localStorage.getItem("tokenExpiredDate") || ""
      );

      if (!token || !tokenExpiredDate || tokenExpiredDate <= new Date()) {
        router.push("/signin");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
