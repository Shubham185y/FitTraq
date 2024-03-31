import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import {
  ClerkProvider,
  RedirectToSignIn,
  SignIn,
  SignUp,
  SignedIn,
  SignedOut,
} from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import App from "./App";
import Dashboard from "./FullPages/Dashboard";
import BmiCalculator from "./components/BmiCalculator";

const clerkPubKey =
  "pk_test_YXJ0aXN0aWMtYWRkZXItNTUuY2xlcmsuYWNjb3VudHMuZGV2JA";
=======
import { ClerkProvider, RedirectToSignIn, SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import App from "./App";
import Dashboard from "./FullPages/Dashboard";

const clerkPubKey = "pk_test_YXJ0aXN0aWMtYWRkZXItNTUuY2xlcmsuYWNjb3VudHMuZGV2JA";
>>>>>>> 85b09d2c022e16586396ba4fac8841d3dc390a28

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
<<<<<<< HEAD
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
=======
    <ClerkProvider
      publishableKey={clerkPubKey}
      navigate={(to) => navigate(to)}
    >
>>>>>>> 85b09d2c022e16586396ba4fac8841d3dc390a28
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/sign-in/"
<<<<<<< HEAD
          element={
            <SignIn redirectUrl={"/dashboard"} routing="path" path="/sign-in" />
          }
        />
        <Route
          path="/sign-up/"
          element={
            <SignUp redirectUrl={"/dashboard"} routing="path" path="/sign-up" />
          }
        />
        <Route
        path="/bmi"
        element={<BmiCalculator />}
=======
          element={<SignIn redirectUrl={'/dashboard'} routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/"
          element={<SignUp redirectUrl={'/dashboard'} routing="path" path="/sign-up" />}
>>>>>>> 85b09d2c022e16586396ba4fac8841d3dc390a28
        />
        <Route
          path="/dashboard/"
          element={
            <>
              <SignedIn>
                <Dashboard />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
    </ClerkProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ClerkWithRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
