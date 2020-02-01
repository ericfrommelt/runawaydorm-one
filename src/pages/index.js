import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div>
      <Img fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img fluid={props.data.imageOne.childImageSharp.fluid} />
      <Img fluid={props.data.imageThree.childImageSharp.fluid} />
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "DSCF3682.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "DSCF3683.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "DSCF3687.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
