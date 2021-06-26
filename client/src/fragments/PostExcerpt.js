import { graphql } from "gatsby";

export const PostExcerpt = graphql`
  fragment PostExcerpt on WpPost {
    id
    title
    uri
    excerpt
    date(formatString: "LL")
    categories {
          nodes {
            name
          }
        }
    featuredImage {
      node {
        altText
        mediaDetails {
          height
          width
        }
        localFile {
          childImageSharp {
            gatsbyImageData(
              placeholder: BLURRED
              transformOptions: { cropFocus: CENTER }
              layout: FIXED
              width: 200
              height: 200
              quality: 90
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
  }
`;
