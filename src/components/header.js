import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <>
  <div style={{
    height: `50px`,
    // background: `#f8ceb8`
  }}
  />
  <header
    style={{
      // backgroundImage: `url(Social_ComingSoonBackground-01.png)`
      //  border: `30px solid #f8ceb8`,
      //  borderRadius: `20px`
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
          {/* <Image /> */}
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
