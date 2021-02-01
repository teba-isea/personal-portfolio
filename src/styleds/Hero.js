import styled from "@emotion/styled"
import BackgroundImage from "gatsby-background-image"

export const HeroContainer = styled(BackgroundImage)`
  height: 100vh;
`

export const ImageText = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 53, 0.75),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  h1 span,
  h1 {
    font-family: monospace;
    font-size: 4rem;
    font-weight: 700;
    text-shadow: var(--rose-bonbon) 0px 0px 1.2px;
  }
  p {
    text-shadow: var(--opal) 0px 0px 3px;
    font-size: 1.8rem;
    text-align: center;
  }
`
