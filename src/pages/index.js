import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import HomeHero from "../components/homepage/hero";
import FeatureSection from "../components/homepage/featureSection";
import HomeLinkSection from "../components/homepage/homeLinksSection";

const IndexPage = () => (
  <Layout>
    <SEO
      keywords={[`speech`, `therapy`, `resources`, `Jeanette`, `Alexander`]}
      title="Home"
    />

    <HomeHero />
    <HomeLinkSection />

    <FeatureSection />
  </Layout>
);

export default IndexPage;
