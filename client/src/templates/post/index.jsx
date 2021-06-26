/** @jsx jsx */
import { jsx, Text, Grid, Divider } from "theme-ui";
import Layout from "../../layout";
import { graphql, Link } from "gatsby";
import Seo from "gatsby-plugin-wpgraphql-seo";
import CategoryTags from "../../components/categoryTags";

const PostPage = ({ data }) => {
  const { page, postsPage, nextPage, previousPage } = data;
  const { title, content, date, categories } = page;
  return (
    <div>
      <Seo post={page} />
      <Layout title={title}>
        <div>
          <Text
            sx={{
              fontSize: 1,
            }}
          >
            {date}
          </Text>
          <CategoryTags categories={categories} />
        </div>
        <article dangerouslySetInnerHTML={{ __html: content }} />
        <Divider my={4} />
        <Grid width={[128, null, 192]} my={4}>
          <div>
            {previousPage && (
              <Link to={previousPage.uri}>
                <span aria-hidden="true">
                  ←
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{ __html: previousPage.title }}
                  />
                </span>
              </Link>
            )}
          </div>
          <div
            sx={{
              textAlign: "center",
            }}
          >
            {postsPage && (
              <Link to={postsPage.uri}>Back to {postsPage.title}</Link>
            )}
          </div>
          <div
            sx={{
              textAlign: "right",
            }}
          >
            {nextPage && (
              <Link to={nextPage.uri}>
                <span aria-hidden="true">
                  →
                </span>
                <span >
                  <span
                    dangerouslySetInnerHTML={{ __html: nextPage.title }}
                  />
                </span>
              </Link>
            )}
          </div>
        </Grid>
      </Layout>
    </div>
  );
};
export const query = graphql`
  query post($id: String!, $nextPage: String, $previousPage: String) {
    page: wpPost(id: { eq: $id }) {
      nodeType
      ...PostContent
    }
    postsPage: wpPage(isPostsPage: { eq: true }) {
      title
      uri
    }
    nextPage: wpPost(id: { eq: $nextPage }) {
      title
      uri
    }
    previousPage: wpPost(id: { eq: $previousPage }) {
      title
      uri
    }
  }
`;
export default PostPage;
