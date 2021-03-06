/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

const SiteBranding = ({ title }) => {
  return (
    <h1
      sx={{
        variant: `text.branding`,
        display: "flex",
        justifyContent: "center",
        width: ["100%", "auto"],
      }}
    >
      <Link to="/" rel="home">
        {title}
      </Link>
    </h1>
  )
}

export default SiteBranding
