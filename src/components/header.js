import PropTypes from "prop-types"
import React from "react"
import Image from './image'

const Header = ({ siteTitle }) => (
  <>
  <div style={{
    height: `50px`,
    background: `#f8ceb8`
  }}
  />
  <header
    style={{
      background: `#df7b59`,
       border: `30px solid #f8ceb8`,
      //  borderRadius: `20px`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
          <Image />
    </div>
  </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
