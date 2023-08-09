import { Link, PageProps } from "gatsby";
import * as React from "react";

const AboutPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>About ChaCha</h1>
      <Link to="/">Back to Home</Link>
      <p>Hi there! Here is for all about ChaCha.</p>
    </main>
  );
};

export const Head: React.FC = () => <title>About Me</title>;
export default AboutPage;
