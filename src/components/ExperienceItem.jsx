import React from "react"
import styled from "@emotion/styled"

const ExperienceItem = ({skillName, colors}) => {
  return (
    <SkillContainer>
      <SkillBar skillName={skillName} colors={colors} >
        <h1>{skillName}</h1>
      </SkillBar>
    </SkillContainer>
  )
}
const SkillContainer = styled.div`
    width: 100%; /* Full width */
    margin:1rem 0rem;
  `
const SkillBar = styled.div`
  border-radius:0.5rem;
  padding:0.5rem 0rem;
  text-align: center; /* Right-align text */
  width: 100%;
  background:${(props)=> "linear-gradient(90deg, " + props.colors + ")"};
  background-size: 400% 400%;
  -webkit-animation: Gradient 10s ease infinite;
  -moz-animation: Gradient 10s ease infinite;
  animation: Gradient 10s ease infinite;
  @keyframes Gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  h1{
  color: white !important; /* White text color */
    margin:0.8rem 0rem;
    font-size:2.4rem !important;
    font-weight:bold;
  }
`

export default ExperienceItem
