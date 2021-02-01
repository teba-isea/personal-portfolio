import React, { Fragment } from "react"
import { Global, css } from "@emotion/react"
import Header from "./Header"
import Footer from "./Footer"
import "../../normalize.css"
const Layout = ({ title, children }) => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --space-cadet: #232840ff;
            --opal: #9ac6c9ff;
            --rose-bonbon: #f348a6ff;
            --cerulean-blue: #3c52d1ff;
            --raisin-black: #181c2dff;
            --radical-red: #f92672;
            --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            --font-family-title: Palatino, "Palatino Linotype",
              "Palatino LT STD", "Book Antiqua", Georgia, serif;
            --font-monospace: "SF Mono", SFMono-Regular, Consolas,
              "Liberation Mono", Menlo, Courier, monospace;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          *,
          *:before,
          *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 1.6rem;
            line-height: 1.5;
            font-family: var(--font-family);
            background-color: var(--space-cadet) !important;
          }

          h1,
          h2 {
            color: var(--radical-red);
            margin: 0 0 2rem 0;
            font-family: var(--font-monospace);
          }

          h3,
          h4,
          h5 {
            margin: 0 0 2rem 0;
            font-family: var(--font-family);
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
            font-family: var(--font-family);
          }
          img {
            max-width: 100%;
          }
          p {
            color: var(--opal);
          }
        `}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
