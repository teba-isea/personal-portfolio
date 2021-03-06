import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import Layout from "../components/layout"
import Hero from "../components/Hero"
import Bio from "../components/bio"
import LatestPosts from "../components/LatestPosts"
import Experience from "../components/Experience"
import Contact from "../components/Contact"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
      <Hero />
      <Bio />
      <LatestPosts />
      <Experience/>
      <Contact/>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
