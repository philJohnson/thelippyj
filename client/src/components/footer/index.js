/** @jsx jsx */
import { jsx } from "theme-ui";
import { graphql, useStaticQuery } from "gatsby";
import Menu from "../footerMenu";

const Footer = ({ pageContext, toggleBackdrop, ...props }) => {
  const { wp } = useStaticQuery(graphql`
    {
      wp {
        generalSettings {
          title
          description
        }
      }
    }
  `);
  return (
    <footer
      role="banner"
      {...props}
      sx={{
        variant: "styles.footer",
      }}
    >
      <div
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            mx: 'auto',
            px: 2,
            py: 2,
          }}
      >
        
        <Menu />
        <div sx={{ mx: 'auto' }} />
        <div sx={{ p: 2 }}>© {new Date().getFullYear()} {wp.generalSettings.title}</div>
      </div>
    </footer>
  );
};

export default Footer;
