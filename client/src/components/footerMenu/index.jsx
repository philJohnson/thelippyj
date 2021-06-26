/** @jsx jsx */
import { jsx, NavLink, Flex } from "theme-ui";
import { useStaticQuery, graphql, Link as GatsbyLink } from "gatsby"

const Menu = (props) => {
  const { wpMenu } = useStaticQuery(graphql`
    {
        wpMenu(locations: {eq: FOOTER_MENU}) {
        name
        menuItems {
          nodes {
            label
            url
            databaseId
            connectedNode {
              node {
                ... on WpContentNode {
                  uri
                }
              }
            }
          }
        }
      }
    }
  `)

  if (!wpMenu?.menuItems?.nodes || wpMenu.menuItems.nodes === 0) return null

  return (
    <Flex
      className="primary-menu-wrapper"
      aria-label="Horizontal"
      role="navigation"
      as="nav"
      {...props}
    >
        {wpMenu.menuItems.nodes.map((menuItem, i) => {
          const path = menuItem?.connectedNode?.node?.uri ?? menuItem.url

          const itemId = "menu-item-" + menuItem.databaseId

          return (
              <NavLink
                key={itemId}
                to={path}
                activeClassName={"current-menu-item current_page_item"}
                sx={{
                    variant: 'styles.navlink',
                    ml: 3,
                    py: 2,
                  }}
                as={GatsbyLink}
              >
                {menuItem.label}
              </NavLink>
          )
        })}
    </Flex>
  )
}

export default Menu