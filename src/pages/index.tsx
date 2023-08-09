import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="chacha, Korean and Thai couple, Korean and Akha couple, Thai and Korean couple, Akha and Korean couple"
        src="../images/chacha-family.png"
      />
    </Layout>
  );
};

export const Head: HeadFC = () => <Seo title="home page" />;
export default IndexPage;
