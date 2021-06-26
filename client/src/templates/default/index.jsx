import React from "react";
import Layout from "../../layout";
import { graphql } from "gatsby";
import Seo from "gatsby-plugin-wpgraphql-seo";

const DefaultPage = ({ data }) => {
  const { page } = data;
  const { title, content } = page;
  return (
    <div>
      <Seo post={page} />
      <Layout title={title}>
        <article dangerouslySetInnerHTML={{ __html: content }} />
      </Layout>
    </div>
  );
};
export const query = graphql`
  query page($id: String!) {
    page: wpContentNode(id: { eq: $id }) {
      nodeType
      ... on WpPage {
        ...PageContent
      }
      ... on WpPost {
        ...PostContent
      }
    }
  }
`;
export default DefaultPage;
