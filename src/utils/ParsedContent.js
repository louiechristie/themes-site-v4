import React from "react"
// import ContentParser from "gatsby-plugin-wordpress-parser"
// import { cf7ParserFunction } from "gatsby-plugin-wpcf7"
import parse from "html-react-parser"

const ParsedContent = ({ content }) => parse(content)

export default ParsedContent
