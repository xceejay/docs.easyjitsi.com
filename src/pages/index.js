import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Redirect } from "react-router-dom";

<meta
  name="google-site-verification"
  content="8jJyJRNrGWnaAJIj3QADhjGestgjM4SzDSvdovQ986U"
/>;

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return <Redirect to="/docs/welcome" />;
}

export default Home;
