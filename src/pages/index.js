import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Redirect } from "react-router-dom";

<meta property="og:description" content="The Only Documentation You Need To Deploy Jitsi" />
<meta name="description" content="The Only Documentation You Need To Deploy Jitsi" />



function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return <Redirect to="/docs/welcome" />;
}

export default Home;
