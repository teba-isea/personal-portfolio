import React from "react"
import { Link, graphql } from "gatsby"
import { Container, Row, Col } from "reactstrap"
import BlogHeader from "gatsby-background-image"

import { BlogPostContainer } from "../styleds/templates/blog-post"
import { ImageText as BlogHeaderContainer } from "../styleds/Hero.js"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogHeader fluid={post.frontmatter.header.childImageSharp.fluid}>
        <BlogHeaderContainer>
          <h1 className="text-center">{post.frontmatter.title}</h1>

          <div className="d-flex justify-content-between">
            <p className="d-block mx-5">{post.frontmatter.date}</p>
            <p className="d-block mx-5">{post.timeToRead}m de lectura</p>
          </div>
        </BlogHeaderContainer>
      </BlogHeader>
      <Container fluid className="p-0 p-md-auto">
        <Row className="justify-content-center p-0 p-md-auto m-0">
          <Col sm="12" md="8" className="p-0 p-md-auto">
            <BlogPostContainer
              className="px-5 pt-5"
              itemScope
              itemType="http://schema.org/Article"
            >
              <section
                dangerouslySetInnerHTML={{ __html: post.html }}
                itemProp="articleBody"
              />
              <hr />
            </BlogPostContainer>
          </Col>
          <Col sm="12">
            <footer>
              <Bio />
            </footer>
          </Col>
        </Row>
      </Container>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
        header {
          childImageSharp {
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
      timeToRead
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
