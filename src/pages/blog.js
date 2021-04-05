import * as React from "react"
import MainLayout from "../Layout/main";
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import BlogPostTitle from "../components/atoms/BlogPostTitle/BlogPostTitle";
import BlogPostDate from "../components/atoms/BlogPostDate/BlogPostDate";
import BlogPostTag from "../components/atoms/BlogPostTag/BlogPostTag";
import BlogPostTopImage from "../components/atoms/BlogPostTopImage/BlogPostTopImage";
import moment from "moment";


// styles
const pageStyles = {
    color: "#232129",
    padding: "96px",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


const BlogPage = ({data}) => {
    return (
        <MainLayout>
            <main style={pageStyles}>
                <title>Work in progress</title>
                {data.allMdx.edges.map( element =>
                    {
                        console.log(element)
                        return(
                        <>
                        <BlogPostDate> {moment(element.node.frontmatter.date).format("D MMMM YYYY")} </BlogPostDate>
                        <BlogPostTitle> {element.node.frontmatter.title} </BlogPostTitle>
                            <p>
                            {element.node.frontmatter.promo_text}
                            </p>
                            
                        </>
                        )


                    })}
{/*
                <title>Work in progress</title>
                <h1 style={headingStyles}>Work in progress</h1>
                <p style={paragraphStyles}>
                    <MDXRenderer>{data.allMdx.edges[1].node.body}</MDXRenderer>
                    <br/>

                </p>
                */}
            </main>
        </MainLayout>
    )
}


export const query = graphql`
  {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            path
            title
            tags
            promo_text
            date
            main_image
          }
          body
        }
      }
    }
  }
`

export default BlogPage
