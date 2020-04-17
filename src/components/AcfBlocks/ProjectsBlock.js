/** @jsx jsx */
import { jsx, Box, Flex, Container, Button, Close } from "theme-ui"
import { useState } from "react"
import Project from "./ProjectItem"
import { useStaticQuery, graphql } from "gatsby"
import { Layer } from "grommet"
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
  const [show, setShow] = useState()
  const data = useStaticQuery(PROJECTS_QUERY)
  const allProjects = data.allWpProject.nodes

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
        <Flex sx={{ justifyContent: "center" }}>
          <Button variant="primary.gradient" onClick={() => setShow(true)}>
            View all projects
          </Button>
          {show && (
            <Layer
              onEsc={() => setShow(false)}
              onClickOutside={() => setShow(false)}
              position="left"
              full={true}
              modal
              responsive={false}
              sx={{ ...projectsModalStyles }}
            >
              <Box
                sx={{ ...margins, ...sectionsStyles, ...projectsBlockStyles }}
                className={`${cssclass || ""} projectsBlock`}
                {...props}
              >
                <Container className="container">
                  <Close className="close" onClick={() => setShow(false)} />

                  <Box sx={{ textAlign: `center` }}>
                    {title && <h2 className="title">Projects</h2>}

                    {content && (
                      <Box className="intro">
                        <p>
                          Morbi leo risus, porta ac consectetur ac, vestibulum
                          at eros. Donec ullamcorper nulla non metus auctor
                          fringilla. Praesent commodo cursus magna, vel
                          scelerisque nisl consectetur et.
                        </p>
                      </Box>
                    )}
                  </Box>

                  <Flex sx={{ flexWrap: `wrap`, justifyContent: `center` }}>
                    {allProjects &&
                      allProjects.map(project => <Project project={project} />)}
                  </Flex>
                </Container>
              </Box>
            </Layer>
          )}
        </Flex>
      </Container>
    </Box>
  )
}
