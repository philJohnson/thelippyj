/** @jsx jsx */
import { jsx, Themed } from "theme-ui";
import { useStaticQuery, graphql } from "gatsby";
import { SEOContext } from "gatsby-plugin-wpgraphql-seo";
import Header from "../components/header";
import Footer from "../components/footer";

export const Layout = ({ children, title }) => {
  const {
    wp: { seo },
  } = useStaticQuery(graphql`
    query SiteInfoQuery {
      wp {
        seo {
          contentTypes {
            post {
              title
              schemaType
              metaRobotsNoindex
              metaDesc
            }
            page {
              metaDesc
              metaRobotsNoindex
              schemaType
              title
            }
          }
          webmaster {
            googleVerify
            yandexVerify
            msVerify
            baiduVerify
          }
          schema {
            companyName
            personName
            companyOrPerson
            wordpressSiteName
            siteUrl
            siteName
            inLanguage
            logo {
              sourceUrl
              mediaItemUrl
              altText
            }
          }
          social {
            facebook {
              url
              defaultImage {
                sourceUrl
                mediaItemUrl
              }
            }
            instagram {
              url
            }
            linkedIn {
              url
            }
            mySpace {
              url
            }
            pinterest {
              url
              metaTag
            }
            twitter {
              username
            }
            wikipedia {
              url
            }
            youTube {
              url
            }
          }
        }
      }
    }
  `);

  return (
    <SEOContext.Provider value={{ global: seo }}>
      <div
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Header  />
        <main
          sx={{
            width: "100%",
            flex: "1 1 auto",
          }}
        >
          <div sx={{
            variant: 'layout'
          }}
          >
            {title &&
            <header sx={{
              my: 4
            }}>
              <Themed.h1>{title}</Themed.h1>
            </header>}
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </SEOContext.Provider>
  );
};
export default Layout;
