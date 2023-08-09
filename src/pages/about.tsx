import { Link, PageProps } from "gatsby";
import * as React from "react";
import Seo from "../components/seo";
import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>My cool posts will go in here</p>
    </Layout>
  );
};

export const Head: React.FC = () => <Seo title="about chacha" />;
export default AboutPage;
