import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

// const darkBlue = `#007acc`
// const lightBlue = `#66E0FF`
// const blueGray = `#282c35`

const darkGrey = `#1E1E1E`; 
const flatRed = `#B12028`;
const red = `#EF1A25`;

export default merge(defaultThemeColors, {
  text: darkGrey,
  primary: flatRed,
  heading: flatRed,
  modes: {
    dark: {
      background: darkGrey,
      primary: red,
      highlight: red,
    },
  },
})
