/** @jsx jsx */
import { jsx, Box, Container } from "theme-ui"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {
  ButtonBlock,
  ContentBlock,
  HeadingBlock,
  ImageBlock,
  ProjectsBlock,
  CoverBlock,
  ColumnsBlock,
  TestimonialsBlock,
  SubscribeBlock,
} from "../components/AcfBlocks"

const Page = ({ data }) => {
  const {
    title,
    content,
    flexLayouts: { flexibleLayouts },
  } = data.wpPage
  return (
    <Layout>
      <Container>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
        {flexibleLayouts.length > 0 &&
          flexibleLayouts.map(block => {
            switch (block.__typename) {
              case "WpPage_Flexlayouts_FlexibleLayouts_ContentBlock":
                return <ContentBlock {...block} />
              case "WpPage_Flexlayouts_FlexibleLayouts_HeadingBlock":
                return <HeadingBlock {...block} />
              case "WpPage_Flexlayouts_FlexibleLayouts_ImageBlock":
                return <ImageBlock {...block} />
              case "WpPage_Flexlayouts_FlexibleLayouts_ButtonBlock":
                return <ButtonBlock {...block} />
              case "WpPage_Flexlayouts_FlexibleLayouts_ProjectsBlock":
                return <ProjectsBlock {...block} />
              case "WpPage_Flexlayouts_FlexibleLayouts_CoverBlock":
                return <CoverBlock {...block} />
              case "WpPage_Flexlayouts_FlexibleLayouts_ColumnsBlock":
                return <ColumnsBlock {...block} />
              case "WpPage_Flexlayouts_FlexibleLayouts_TestimonialsBlock":
                return <TestimonialsBlock {...block} />
              case "WpPage_Flexlayouts_FlexibleLayouts_SubscribeBlock":
                return <SubscribeBlock {...block} />

              default:
                return ""
            }
          })}
      </Container>
    </Layout>
  )
}

export default Page

export const pageQuery = graphql`
  query GET_PAGE($uri: String!) {
    wpPage(uri: { eq: $uri }) {
      content
      title
      flexLayouts {
        flexibleLayouts {
          __typename
          ...contentBlockFragment
          ...projectsBlockFragment
          ...imageBlockFragment
          ...headingBlockFragment
          ...buttonBlockFragment
          ...coverBlockFragment
          ...columnsBlockFragment
          ...testimonialsBlockFragment
          ...subscribeBlockFragment
        }
      }
    }
  }
`
