import React from "react"
import { Fade } from "react-reveal"
import { Link } from "gatsby"
import Image from "gatsby-background-image"
import { Row, Col } from "reactstrap"
import { PostItemContainer } from "../styleds/PostItem"

const PostItem = ({ post }) => {
  const title = post.frontmatter.title || post.fields.slug
  const previewImage = post.frontmatter.header.childImageSharp.fixed
  return (
    <Col sm="12" md="4">
      <Fade top>
        <PostItemContainer itemScope itemType="http://schema.org/Article">
          <Link to={post.fields.slug} itemProp="url">
            <header className="d-flex justify-content-center align-items-center">
              <h3>{title}</h3>
            </header>
            <Image fixed={previewImage} className="img-fluid w-100" />
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    post.frontmatter.description.slice(0, 157) + "..." ||
                    post.excerpt,
                }}
                itemProp="description"
              />
            </section>
          </Link>
        </PostItemContainer>
      </Fade>
    </Col>
  )
}

export default PostItem
