import styled from "@emotion/styled"

export const HeaderContainer = styled.header`
  .nav {
    background-image: linear-gradient(
      to bottom,
      rgba(34, 49, 53, 0.7),
      rgba(34, 49, 63, 0.02)
    );

    position: fixed;
    top: 0px;
    left: 0px;
    margin-bottom: 2rem;
    width: 100%;
    height: 5.5rem;
    line-height: 65px;
    text-align: center;
    z-index: 1000;
  }

  .nav div.logo {
    float: left;
    width: auto;
    height: auto;
    padding-left: 3rem;
  }

  .nav div.logo a {
    cursor: pointer;
    text-decoration: none;
    color: var(--opal);
    text-shadow: var(--opal) 0px 0px 3px;
    font-size: 2.5rem;
    transition: all 0.4s ease;
  }

  .nav div.logo a span {
    color: var(--radical-red);
  }

  .nav div.main_list {
    height: 65px;
    float: right;
  }

  .nav div.main_list ul {
    width: 100%;
    height: 65px;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav div.main_list ul li {
    width: auto;
    height: 65px;
    padding: 0;
    padding-right: 3rem;
    transition: all 0.3s ease;
  }

  .nav div.main_list ul li a {
    text-decoration: none;
    color: var(--opal);
    line-height: 65px;
    font-size: 2.4rem;
    text-shadow: var(--opal) 0px 0px 1px;
    transition: all 0.4s ease;
  }

  .nav div.main_list ul li a:hover {
    color: var(--radical-red);
    text-shadow: var(--rose-bonbon) 0px 1px 3px;
  }
`
export const HeaderModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: var(--space-cadet);
  transition: all 1s ease;
  margin-right:5rem;

  .header-modal-title{
    text-shadow:0px 0px 1.5px var(--rose-bonbon);
    font-size:3rem;
  }
  .exit-icon{
    color:var(--opal);
    font-size:4rem;
  }
  a{
    color:var(--opal);
    text-shadow:0px 0px 2px var(--rose-bonbon);
    font-size:3rem;
  }
`

export const FooterContainer = styled.footer`
  background-color: var(--raisin-black);

  h2 {
    text-shadow: var(--rose-bonbon) 0px 0px 1px;
  }
  span {
    color: var(--opal);
  }
`
