import React, { useEffect } from "react";
import Layout from "../components/layout";
import Profile from "../components/profile";
import RouteBase from "../components/route-base";
import { Router } from "@reach/router";
import RouteSecret from "../components/route-secret";
import RouteLogin from "../components/route-login";
import { navigate } from "gatsby";

const Dashboard = ({ location }) => {
  useEffect(() => {
    if (location.pathname.match(/^\/dashboard\/?$/)) {
      navigate("/dashboard/login", { replace: true });
    }
  }, []);

  return (
    <Layout>
      <Profile />
      <Router>
        <RouteLogin path="/dashboard/login" />
        <RouteBase path="/dashboard/base" />
        <RouteSecret path="/dashboard/secret" />
      </Router>
    </Layout>
  );
};

export default Dashboard;
