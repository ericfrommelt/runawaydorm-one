import React from "react"
import styles from "./index.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = (props) => (
  <Layout>
    <SEO title="Home" />
    <div className={styles.bg}></div>
    <div className={styles.collage}>
      <Img className={styles.imgtwo} fluid={props.data.imageTwo.childImageSharp.fluid} />
      <Img className={styles.imgone} fluid={props.data.imageOne.childImageSharp.fluid} />
      <Img className={styles.imgthree} fluid={props.data.imageThree.childImageSharp.fluid} />
      <div className={styles.blockone}></div>
      <div className={styles.blocktwo}></div>
      <div className={styles.blockthree}></div>
    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "DSCF3682.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageTwo: file(relativePath: { eq: "DSCF3683.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    imageThree: file(relativePath: { eq: "DSCF3687.jpg"}) {
      childImageSharp {
        fluid(maxWidth: 3000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
