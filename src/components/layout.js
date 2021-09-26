import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">
        <StaticImage
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/colens-logo.svg"
          alt="CoLens Logo"
          width={200}
        />
        </Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © Copyright {new Date().getFullYear()}, All rights reserved 
        {` `}
        <a href="https://www.colens.space">CoLens</a>
      </footer>
    </div>
  )
}

export default Layout
