import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Welcome to All about ChaCha site!</p>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Home Page</title>;
export default IndexPage;
