import styled from "@emotion/styled"

export const PostItemContainer = styled.article`
  max-height: 460px;
  background-color: var(--raisin-black);
  border-radius: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0px 0px 15px #171717;

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 20px #171717;
    a {
      text-decoration: none !important;
    }
  }

  h3 {
    color: var(--radical-red);
    text-shadow: var(--rose-bonbon) 0px 0px 2px;
    font-weight: 700;
    margin: 2rem 0rem;
    text-align: center;
    text-decoration: none;
  }

  p {
    padding: 2rem 2rem;
  }
`
