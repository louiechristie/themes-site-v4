/** @jsx jsx */
import { jsx, Box, Flex, Button } from 'theme-ui'
import GatsbyImage from '../images/Image'
import ParsedContent from '../../utils/ParsedContent'

const ProjectItem = ({ project }) => {
  const {
    title,
    projectFields: { projectUrl, description },
    featuredImage,
    id,
  } = project

  return (
    <Box className="project" key={id}>
      <Flex className="projectWrap">
        <Flex className="image">
          <GatsbyImage img={featuredImage} />
        </Flex>
        <Box>
          <h4 className="projectTitle">{title}</h4>
          {description && (
            <Flex className="description">
              <ParsedContent content={description} />
            </Flex>
          )}
          <Flex className="button">
            <Button variant="secondary.gradient">
              <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default ProjectItem
