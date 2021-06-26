/** @jsx jsx */
import { jsx } from "theme-ui";
import Layout from "../../layout";
import { graphql } from "gatsby";
import Seo from "gatsby-plugin-wpgraphql-seo";
import PostCard from "../../components/postCard";

const BlogPosts = ({ data }) => {
  const { page, posts } = data;
  const { title, content } = page;
  return (
    <div>
      <Seo post={page} />
      <Layout title={title}>
        <article dangerouslySetInnerHTML={{ __html: content }} />
        <ul
          sx={{
            listStyle: "none",
            m: 0,
            p: 0,
          }}
        >
          {posts &&
            posts.nodes.map((post, i) => {
              return (
                <PostCard
                  key={post.id}
                  sx={{
                    mb: 4,
                  }}
                  as="li"
                  post={post}
                />
              );
            })}
        </ul>
      </Layout>
    </div>
  );
};

export const query = graphql`
  query blogPosts($id: String!) {
    page: wpContentNode(id: { eq: $id }) {
      ... on WpPage {
        ...PageContent
      }
    }
    posts: allWpPost {
      nodes {
        ...PostExcerpt
      }
    }
  }
`;

export default BlogPosts;
