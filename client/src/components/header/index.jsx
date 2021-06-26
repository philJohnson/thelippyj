/** @jsx jsx */
import { Heading, jsx, MenuButton } from "theme-ui";
import { graphql, Link, useStaticQuery } from "gatsby";
import Menu from "../menu";

const Header = ({ pageContext, toggleBackdrop, ...props }) => {
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
    <header
      role="banner"
      {...props}
      sx={{
        variant: "header",
      }}
    >
      <div
        sx={{
          mx: "auto",
          px: 3,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Heading as="h1">
          <Link
            to="/"
            dangerouslySetInnerHTML={{ __html: wp.generalSettings.title }}
          />
        </Heading>
        <div sx={{ mx: 'auto' }} />
        <Menu sx={{
            display: ['none', 'none', 'block'],
        }} />
        <MenuButton
          aria-label="Toggle Menu"
          sx={{
            display: ['block', 'block','none'],
            justifySelf: "flex-end",
            height: 'auto',
            width: 'auto',
          }}
        />
      </div>
    </header>
  );
};

export default Header;
