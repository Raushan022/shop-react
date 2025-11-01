import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseAppConfig from "../../utils/firebase-config";
import { Navigate, Outlet } from "react-router-dom";

const auth = getAuth(firebaseAppConfig);

const PreGuard = () => {
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSession(user); // User is authenticated
      } else {
        setSession(false); // No user is authenticated
      }
    });

    // Cleanup the listener when the component is unmounted
    return () => unsubscribe();
  }, []);

  if (session === null) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <RotatingLines
          strokeColor="blue"
          strokeWidth="5"
          animationDuration="0.75"
          width="80"
          visible={true}
        />
      </div>
    );
  }

  if (session) {
    return <Navigate to="/" />;
  }

  // If the user is not authenticated, show the signup/login pages
  return <Outlet />;
};

export default PreGuard;
