/** @jsx jsx */
import { jsx, Flex, Button } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import config from "../../../config"

export const ContentButton = ({ button, ...props }) => {
  const { title, target, url, buy } = button
  const buttonUrl = button && url.replace(config.wordPressUrl, "")
  return (
    <Flex {...props}>
      {buy ? (
        <AnchorLink href={url} offset={25}>
          <Button>{title}</Button>
        </AnchorLink>
      ) : (
        <>
          {target === "_blank" ? (
            <a href={url} target="_blank">
              <Button>{title}</Button>
            </a>
          ) : url.startsWith("#") ? (
            <AnchorLink href={url} offset={25}>
              <Button>{title}</Button>
            </AnchorLink>
          ) : (
            <Button>
              <Link to={buttonUrl}>{title}</Link>
            </Button>
          )}
        </>
      )}
    </Flex>
  )
}

export default ContentButton
