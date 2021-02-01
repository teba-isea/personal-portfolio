import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Fade } from "react-reveal"

import Social from "./Social"
import { BioContainer } from "../styleds/Bio"
import { Container, Row, Col } from "reactstrap"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 130, height: 130, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <Fade right>
            <BioContainer>
              <Row className="justify-content-center">
                <Col
                  sm="12"
                  md="3"
                  className="d-flex justify-content-center align-items-center pl-md-5 mr-md-n5"
                >
                  <Image
                    fixed={avatar}
                    alt={author?.name || ``}
                    className="bio-avatar"
                  />
                </Col>
                <Col sm="12" md="9" className="text-center text-md-left">
                  <p>
                    Written by <strong>{author.name}</strong> {author?.summary}
                    {` `}
                    <a href={`https://twitter.com/${social?.twitter}`}>
                      You should follow them on Twitter
                    </a>
                    <hr />
                    <Social />
                  </p>
                </Col>
              </Row>
            </BioContainer>
          </Fade>
        </Col>
      </Row>
    </Container>
  )
}

export default Bio
