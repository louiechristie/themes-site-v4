/** @jsx jsx */
import { jsx, Flex, Button } from "theme-ui"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import config from "../../../config"

export const ContentButton = ({ button, buy, ...props }) => {
  const { title, target, url } = button
  const buttonUrl = button && url.replace(config.wordPressUrl, "")
  return (
    <Flex {...props}>
      {buy ? (
        <Button
          class="snipcart-add-item"
          data-item-name="Themes Bundle"
          data-item-id="bundle"
          data-item-url="https://new-theme-snipcart.netlify.com"
          data-item-price="199"
          data-item-payment-interval="Year"
          data-item-payment-interval-count="1"
          sx={{ variant: "buttons.primary", fontWeight: 600 }}
        >
          Buy the themes bundle!
        </Button>
      ) : (
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
      )}
    </Flex>
  )
}

export default ContentButton
