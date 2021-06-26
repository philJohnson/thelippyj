import { graphql } from 'gatsby';
export const Seo = graphql`
    fragment Seo on WpPostTypeSEO {
        canonical
            title
            metaDesc
            focuskw
            metaRobotsNoindex
            metaRobotsNofollow
            opengraphAuthor
            opengraphDescription
            opengraphTitle
            opengraphDescription
            opengraphImage {
                altText
                sourceUrl
                srcSet
            }
            opengraphUrl
            opengraphSiteName
            opengraphPublishedTime
            opengraphModifiedTime
            twitterTitle
            twitterDescription
            twitterImage {
                altText
                sourceUrl
                srcSet
            }
            breadcrumbs {
                url
                text
            }
            cornerstone
            schema {
                pageType
                articleType
                raw
            }
    }
`;