import React from "react"
import { Link, graphql } from "gatsby"
import { Row } from "reactstrap"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostItem from "../components/PostItem"
import { Zoom } from "react-reveal"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <BlogIndexCover>
        <SEO title="Guides,Tutorials & Tech Notices" />
        <h1>All my Posts</h1>
        <Row className="justify-content-around ">
          {posts.map(post => (
            <PostItem md="4" post={post} key={post.fields.slug} />
          ))}
        </Row>
      </BlogIndexCover>
    </Layout>
  )
}

const BlogIndexCover = styled.div`
  margin: 0rem 10rem;
  h1 {
    margin: 6rem 0rem 3rem 0rem;
    text-align: center;
    font-weight: bold;
    font-size: 3rem;
  }
`

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
          header {
            childImageSharp {
              fixed(width: 280, height: 200) {
                ...GatsbyImageSharpFixed_withWebp
              }
            }
          }
          description
        }
      }
    }
  }
`
