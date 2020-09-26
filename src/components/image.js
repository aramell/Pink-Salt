import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = ({ imageName }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: { eq: "PSCreatives_Logo_FullColor.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      avacado: file(relativePath: { eq: "avacados.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      skeletons: file(relativePath: { eq: "Social_Halloween3.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      market: file(relativePath: { eq: "MarketForMakers2.png" }) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  // if (!data?.placeholderImage?.childImageSharp?.fluid) {
  //   return <div>Picture not found</div>
  // }
  const options = {
    avacados: data.avacado.childImageSharp.fluid,
    logoColor: data.placeholderImage.childImageSharp.fluid,
    skeletons: data.skeletons.childImageSharp.fluid,
    market: data.market.childImageSharp.fluid,
  }

  return <Img fluid={options[imageName]} />
}

export default Image
