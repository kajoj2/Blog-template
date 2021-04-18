import React from "react"
import { graphql } from "gatsby"



export default function BlogPost({ data }) {
    const post = data.mdx
    return (
        <>
            <div>
                <h1>{post.frontmatter.title}</h1>
                <div> {post.frontmatter.previewText}</div>
            </div>
        </>
    )
}
export const query = graphql`
  query($slug: String!) {
      mdx(slug: {eq: $slug}) {
        frontmatter {
          path
          date
          previewText
          title
        }
      }
    }
`