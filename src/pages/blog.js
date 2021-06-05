import * as React from "react"
import MainLayout from "../Layout/main";
import {graphql, Link} from "gatsby"
import styled from "styled-components";
import BlogPostTitle from "../components/atoms/BlogPostTitle/BlogPostTitle";
import BlogPostDate from "../components/atoms/BlogPostDate/BlogPostDate";
import BlogPostTag from "../components/atoms/BlogPostTag/BlogPostTag";
import moment from "moment";
import {GatsbyImage, getImage} from "gatsby-plugin-image"


// styles
const pageStyles = {
    fontFamily: "Roboto,-apple-system, sans-serif, serif",
}
const BlogBackground = styled.div`
  background-color: #F6F6F6;
`

const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
`

const BlogPreviewListWrapper = styled.div`

  background-color: white;
  margin: 0 9.6vw;
  padding: 2vw;
  max-width: 1440px;

  @media (max-width: 768px) {
    margin: 1vw;
  }
`
const BlogPreviewWrapper = styled.div`
  display: grid;
  padding: 30px 0;
  grid-template-columns: 1.6fr 1fr;
  grid-template-areas:
  "date image"
  "title image"
  "tagList image"
  "previewText image";
  column-gap: 10px;
  row-gap: 5px;
  @media (max-width: 768px) {

    grid-template-columns: 1fr;
    grid-template-areas:
  "date"
  "title"
  "image"
  "tagList"
  "previewText";
  }
  border-bottom-style: solid;
  border-bottom-color: #F3F3F3;
  border-bottom-width: 2px;

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
const ImageWrapper = styled.div`
  align-self: center;
  grid-area: image;
`
const ReadBlogPostWrapper = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  justify-self: center;

`
const ReadMoreButton = styled(Link)`
  color: black;
  font-size: 1.3em;
`


const BlogPage = ({data}) => {


    return (
        <MainLayout>
            <main style={pageStyles}>
                <BlogBackground>
                    <CenterDiv>
                        <BlogPreviewListWrapper>
                            {data.allMdx.edges.map(element => {
                                const image = getImage(element.node.frontmatter.featuredImage)
                                return (

                                    <BlogPreviewWrapper key={element.node.id}>
                                        <DateWrapper>
                                            <BlogPostDate> {moment(element.node.frontmatter.date).format("D MMMM YYYY")} </BlogPostDate>
                                        </DateWrapper>
                                        <TitleWrapper>
                                            <BlogPostTitle> {element.node.frontmatter.title} </BlogPostTitle>
                                        </TitleWrapper>
                                        <TagListWrapper>
                                            {element.node.frontmatter.tags.map(tag => {
                                                return (<div key={tag}>
                                                        <BlogPostTag>#{tag} </BlogPostTag>&nbsp;
                                                    </div>
                                                )
                                            })}
                                        </TagListWrapper>
                                        <PreviewTextWrapper>

                                            {element.node.frontmatter.previewText}

                                        </PreviewTextWrapper>
                                        <ImageWrapper>
                                            <GatsbyImage image={image} alt={"test"}/>
                                        </ImageWrapper>
                                        <ReadBlogPostWrapper>
                                            <ReadMoreButton to={`/blog${element.node.frontmatter.path}`}>Read More
                                                -></ReadMoreButton>!
                                        </ReadBlogPostWrapper>
                                    </BlogPreviewWrapper>


                                )


                            })}
                        </BlogPreviewListWrapper>
                    </CenterDiv>
                </BlogBackground>
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
        slug
        frontmatter {
          path
          title
          tags
          previewText
          date
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 3000, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
            }
          }
        }
      }
    }
  }
}
`

export default BlogPage
