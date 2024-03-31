import React from "react";
import ReactDOM from "react-dom/client";
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

const ClerkWithRoutes = () => {
  const navigate = useNavigate();

  return (
    <ClerkProvider publishableKey={clerkPubKey} navigate={(to) => navigate(to)}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/sign-in/"
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
