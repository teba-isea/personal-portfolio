import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PostItem from "./PostItem"
import { Container, Row, Col } from "reactstrap"

const LatestPosts = () => {
  const pageQuery = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(
        limit: 3
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
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
  `)

  const posts = pageQuery.allMarkdownRemark.nodes
  return (
    <Container>
      <Row className="justify-content-center mb-3">
        {posts.map(post => (
          <PostItem post={post} key={post.fields.slug} />
        ))}
      </Row>
    </Container>
  )
}
export default LatestPosts
