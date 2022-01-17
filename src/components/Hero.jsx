import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Typed from "react-typed"
import { Zoom } from "react-reveal"
import { HeroContainer, ImageText } from "../styleds/Hero"

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "hero" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const imgFluid = data.file.childImageSharp.fluid
  const [phrases, setPhrases] = useState([
    "Hola Mundo!",
    "Soy Esteban Isea",
    "Un Ciudadano de Internet",
    "Blogs, Guias y Tutoriales",
    "#2022!!!",
    "Les deseo un año sin Issues",
    "NUNCA Pares de aprender!",
    "#BlackLivesMatter",
    "I &#10084; Lo-Fi Music",
    "Sonrie!!!",
    "Espero este Año si compile",
    "Gracias por visitarme!",
    "No dudes en contactarme",
    "Clean Code, Nunca lo olvides",
    "Tabs > Spaces y .",
  ])
  return (
    <HeroContainer fluid={imgFluid} fadeIn="soft">
      <ImageText>
        <Zoom clear>
          <div>
            <h1 className="text-center text-md-left text-break">
              <Typed strings={phrases} loop backSpeed={40} typeSpeed={70} />
            </h1>
          </div>{" "}
        </Zoom>
        <p className="font-weight-bold">Un Desarrollador En 2022</p>
      </ImageText>
    </HeroContainer>
  )
}

export default Hero
