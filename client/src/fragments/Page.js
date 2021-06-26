import { graphql } from 'gatsby';

export const Page = graphql`
    fragment PageContent on WpPage {
        title
        uri
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