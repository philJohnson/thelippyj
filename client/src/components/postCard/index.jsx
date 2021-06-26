/** @jsx jsx */
import { Themed, jsx, Link, Box, Flex, Button, Text } from "theme-ui";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link as GatsbyLink } from "gatsby";
import CategoryTags from "../categoryTags";

const PostCard = ({ post, ...props }) => {
  const image = post.featuredImage
    ? getImage(post.featuredImage.node.localFile)
    : null;
  return (
    <Box bg="muted" p="4" {...props}>
      <Flex
        sx={{
          alignItems: "center",
          flexDirection: ["column", "row"],
        }}
      >
        {image && (
          <div
            sx={{
              mr: [0, 3],
              mb: [3, 0],
            }}
          >
            <GatsbyLink to={post.uri}><GatsbyImage image={image} alt={post.featuredImage.node.altText} /></GatsbyLink>
          </div>
        )}
        <div>
          <Themed.h3
            sx={{
              m: 0,
            }}
          >
            <Link
              to={post.uri}
              sx={{
                color: "inherit",
                textDecoration: "none",
                ":hover,:focus": {
                  color: "primary",
                  textDecoration: "underline",
                },
              }}
              as={GatsbyLink}
            >
              {post.title}
            </Link>
          </Themed.h3>
          <Text sx={{
            fontSize: 1,
          }}>{post.date}</Text>
          <CategoryTags categories={post.categories} />
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
          <Button to={post.uri} as={GatsbyLink}>Read More</Button>
        </div>
      </Flex>
    </Box>
  );
};

export default PostCard;
