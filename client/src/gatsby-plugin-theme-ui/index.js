
import { funk as base } from "@theme-ui/presets";
import nightOwl from '@theme-ui/prism/presets/night-owl'
import { merge } from 'theme-ui'

const vars = require('sass-extract-loader?{"plugins":["sass-extract-js"]}!../styles/vars.scss');

const styles = merge(base.styles, {
  pre: {
    ...nightOwl,
    p: 3,
  },
  a: {
    ...vars.link,
    '&:hover' : {
      ...vars.linkHover
    }
  },
  footer: {
    bg: "muted",
  }
});

export const theme = merge(base, {
  space: vars.space.split(" ").map((value) => parseInt(value)), //TODO: convert to utility
  fontSizes: vars.fontSizes.split(" ").map((value) => parseInt(value)), //TODO: convert to utility
  colors: {
    ...vars.colors,
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 100,
    bg: "muted",
    p: 3,
    boxShadow: '0 1px 2px 0 rgba(60,64,67,.3),0 2px 6px 2px rgba(60,64,67,.15)'
  },
  layout: {
    maxWidth: vars.widths.content,
    mx: "auto",
    px: 3,
  },
  styles: {
    root: {
      ...styles
    }
  },
});
export default theme;
