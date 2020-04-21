import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import { Redirect } from "react-router-dom";

var meta = document.createElement("meta");
meta.httpEquiv = "X-UA-Compatible";
meta.content = "text/html";
meta.charset = "charset=ISO-8859-1";
meta.description = "The Only Documentation You Need To Deploy Jitsi";
document.getElementsByTagName("head")[0].appendChild(meta);

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return <Redirect to="/docs/welcome" />;
}

export default Home;
