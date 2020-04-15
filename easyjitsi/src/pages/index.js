import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Redirect } from "react-router-dom";


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return <Redirect to="/docs/welcome" />;
}

export default Home;
