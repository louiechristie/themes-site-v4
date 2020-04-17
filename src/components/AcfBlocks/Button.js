/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui'
import { Link } from 'gatsby'
import config from '../../../config'

export const ContentButton = ({ button, ...props }) => {
  const { title, target, url } = button
  const buttonUrl = button && url.replace(config.wordPressUrl, '')
  return (
    <Flex {...props}>
      <Button>
        {target === '_blank' ? (
          <a href={url} target="_blank">
            {title}
          </a>
        ) : (
          <Link to={buttonUrl}>{title}</Link>
        )}
      </Button>
    </Flex>
  )
}

export default ContentButton
