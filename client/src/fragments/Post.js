import { graphql } from 'gatsby';

export const Post = graphql`
    fragment PostContent on WpPost {
        title
        uri
        date(formatString: "LL")
        categories {
          nodes {
            name
          }
        }
        featuredImage {
            node {
              mediaDetails {
                height
                width
              }
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    width: 3840
                    placeholder: DOMINANT_COLOR
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        content
        seo {
          ...Seo
        }
    }
`;