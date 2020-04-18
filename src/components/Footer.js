/** @jsx jsx */
import { jsx, Container } from "theme-ui"

const Footer = () => (
  <footer sx={{ variant: "footer" }}>
    <Container className="container">
      © {new Date().getFullYear()}, Gatsby WP Themes
    </Container>
  </footer>
)

export default Footer
