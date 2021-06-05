import React from "react"
import {graphql} from "gatsby"
import styled from "styled-components";
import MainLayout from "../Layout/main";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import "./imageStyle.css"
import BlogPostDate from "../components/atoms/BlogPostDate/BlogPostDate";
import moment from "moment";
import BlogPostTitle from "../components/atoms/BlogPostTitle/BlogPostTitle";
import BlogPostTag from "../components/atoms/BlogPostTag/BlogPostTag";
import {MDXRenderer} from "gatsby-plugin-mdx"


const ImageWrapper = styled.div`
  width: 100%;
  height: 40vh;
`
const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`

const BodyWrapper = styled.div`
  padding-top: 20px;
  max-width: 1080px;
`
const DateWrapper = styled.div`
  grid-area: date;
`
const TitleWrapper = styled.div`
  padding: 5px 0px 5px 5px;
  grid-area: title;
`
const TagListWrapper = styled.div`
  display: flex;
  grid-area: tagList;
`

const BlogHeaderWrapper = styled.div`
  padding: 0px;
  width: 100vw;
`

const TextWrapper = styled.div`
  padding: 0px;
`

export default function BlogPost({data}) {
    const post = data.mdx
    const image = getImage(post.frontmatter.featuredImage)
    return (
        <MainLayout>
            <main>
                <div>
                    <ImageWrapper>
                        <GatsbyImage className="imageStyle" image={image} alt={"test"}/>
                    </ImageWrapper>
                    <CenterDiv>
                        <BodyWrapper>
                            <BlogHeaderWrapper>
                                <DateWrapper>
                                    <BlogPostDate> {moment(post.frontmatter.date).format("D MMMM YYYY")} </BlogPostDate>
                                </DateWrapper>
                                <TitleWrapper>
                                    <BlogPostTitle> {post.frontmatter.title} </BlogPostTitle>
                                </TitleWrapper>
                                <TagListWrapper>
                                    {post.frontmatter.tags.map(tag => {
                                        return (<div key={tag}>
                                            <span>
                                                <BlogPostTag>#{tag} </BlogPostTag>&nbsp;
                                            </span>
                                            </div>
                                        )
                                    })}
                                </TagListWrapper>
                            </BlogHeaderWrapper>
                            <TextWrapper>
                                <MDXRenderer>{post.body}</MDXRenderer>
                            </TextWrapper>
                        </BodyWrapper>
                    </CenterDiv>
                </div>
            </main>
        </MainLayout>
    )
}
export const query = graphql`
  query($slug: String!) {
      mdx(slug: {eq: $slug}) {
        body
        frontmatter {
          path
          date
          previewText
          title
          tags
          
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 3000, placeholder: BLURRED,sizes: "100% , 400hv", formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
`