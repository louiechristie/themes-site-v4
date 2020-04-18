/** @jsx jsx */
import { jsx, Flex, Button } from "theme-ui"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import config from "../../../config"

export const ContentButton = ({ button, ...props }) => {
  const { title, target, url } = button
  const buttonUrl = button && url.replace(config.wordPressUrl, "")
  return (
    <Flex {...props}>
      <Button>
        {target === "_blank" ? (
          <a href={url} target="_blank">
            {title}
          </a>
        ) : url.startsWith("#") ? (
          <AnchorLink href={url} offset={25}>
            {title}
          </AnchorLink>
        ) : (
          <Link to={buttonUrl}>{title}</Link>
        )}
      </Button>
    </Flex>
  )
}

export default ContentButton
