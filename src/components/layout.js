import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={
          {
            // margin: `0 auto`,
            // maxWidth: 960,
            // padding: `0 1.0875rem 1.45rem`,
          }
        }
      >
        <main>{children}</main>
        <div className="footer">
          <footer
            style={{
              height: `80px`,
              marginTop: `2rem`,
              textAlign: `center`,
              background: `f09c82`,
              fontFamily: `Verdana, Geneva, Tahoma, sans-serif`,
            }}
          >
            © 2020 Pink Salt Creatives
          </footer>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
