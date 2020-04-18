/** @jsx jsx */
import { jsx, Box, Flex, Button } from "theme-ui"
import GatsbyImage from "../images/Image"
import ParsedContent from "../../utils/ParsedContent"

const ProjectItem = ({ project }) => {
  const {
    title,
    projectFields: { projectUrl, description },
    featuredImage,
    termNames,
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
          <Flex className="tags">
            {termNames &&
              termNames.length > 0 &&
              termNames.map((term, i) => (
                <Box key={i} className="badge">
                  {term}
                </Box>
              ))}
          </Flex>
          {description && (
            <Flex className="description">
              <ParsedContent content={description} />
            </Flex>
          )}
          <Flex className="button">
            <Button variant="primary">
              <a href={projectUrl} target="_blank" rel="noopener noreferrer">
                Visit Live Demo
              </a>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  )
}

export default ProjectItem
