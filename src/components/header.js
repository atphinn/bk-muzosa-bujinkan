import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `black`,
      marginBottom: `1.45`,
      padding: `20px 15px`,
      font: `Arial`,
      fontSize:`15px`
    }}
  >
    <div
      style={{
      //  margin: `0 auto`,

      }}
    >
      <h1 style={{ margin: 0, }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            padding: `0 30px 0 15px`,
          }}
        >
          {siteTitle}
        </Link>

        <Link
            to="/#about"
          style={{

          color: `white`,
          textDecoration: `none`,
          padding: `0 30px 0 0`,
          }}
        >
        About
        </Link>

        <Link
        to="/#map"
          style={{
          color: `white`,
          textDecoration: `none`,
          padding: `0 30px 0 0`,
          }}
        >
        Contact
        </Link>

      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
