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

const ImageWrapper = styled.div`
  width: 100%;
  height: 40vh;
`
const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`

const BodyWrapper = styled.div`
  max-width: 1080px;
`
const DateWrapper = styled.div`
  grid-area: date;
`
const TitleWrapper = styled.div`
  padding-right: 10px;
  grid-area: title;
`
const TagListWrapper = styled.div`
  display: flex;
  grid-area: tagList;
`
const PreviewTextWrapper = styled.div`
  color: #000;
  grid-area: previewText;
`


export default function BlogPost({data}) {
    const post = data.mdx
    const image = getImage(post.frontmatter.featuredImage)
    return (
        <MainLayout>
            <main>
            <div>
                <ImageWrapper>
                    <GatsbyImage  className="imageStyle" image={image} alt={"test"}/>
                </ImageWrapper>
                <CenterDiv>
                <BodyWrapper>
                    <DateWrapper>
                        <BlogPostDate> {moment(post.frontmatter.date).format("D MMMM YYYY")} </BlogPostDate>
                    </DateWrapper>
                    <TitleWrapper>
                        <BlogPostTitle> {post.frontmatter.title} </BlogPostTitle>
                    </TitleWrapper>
                    <TagListWrapper>
                        {post.frontmatter.tags.map(tag => {
                            return (<>
                                    <BlogPostTag>#{tag} </BlogPostTag>&nbsp;
                                </>
                            )
                        })}
                    </TagListWrapper>
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