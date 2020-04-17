/** @jsx jsx */
import { jsx, Box, Flex, Container, Button, Close } from "theme-ui"
import { useState } from "react"
import Project from "./ProjectItem"
import { useStaticQuery, graphql } from "gatsby"
import ParsedContent from "../../utils/ParsedContent"
import projectsBlockStyles from "../../styles/acfBlocksStyles/projectsBlockStyles"
import sectionsStyles from "../../styles/acfBlocksStyles/sectionsStyles"
import projectsModalStyles from "../../styles/projectsModalStyles"

export const projectFragment = graphql`
  fragment projectFragment on WpProject {
    id
    featuredImage {
      ...MediumImage
    }
    slug
    title
    uri
    termNames
    projectFields {
      projectUrl
      description
    }
  }
`

const PROJECTS_QUERY = graphql`
  query getProjects {
    allWpProject(limit: 100) {
      nodes {
        ...projectFragment
      }
    }
  }
`

export const fragment = graphql`
  fragment projectsBlockFragment on WpPage_Flexlayouts_FlexibleLayouts_ProjectsBlock {
    content
    title
    marginTop
    marginBottom
    cssclass
    anchor
    projects {
      ... on WpProject {
        ...projectFragment
      }
    }
  }
`

export const ProjectsBlock = ({
  title,
  content,
  projects,
  marginTop,
  marginBottom,
  cssclass,
  anchor,
  ...props
}) => {
  const margins = {
    mt: marginTop,
    mb: marginBottom,
  }

  const data = useStaticQuery(PROJECTS_QUERY)

  return (
    <Box
      as="section"
      sx={{ ...margins, ...sectionsStyles, ...projectsBlockStyles }}
      id={anchor}
      className={`${cssclass || ""} projectsBlock`}
      {...props}
    >
      <Container className="container">
        <Box sx={{ textAlign: `center` }}>
          {title && (
            <h2 dangerouslySetInnerHTML={{ __html: title }} className="title" />
          )}

          {content && (
            <Box className="intro">
              <ParsedContent content={content} />
            </Box>
          )}
        </Box>

        <Flex sx={{ flexWrap: `wrap`, justifyContent: `center` }}>
          {projects && projects.map(project => <Project project={project} />)}
        </Flex>
      </Container>
    </Box>
  )
}
