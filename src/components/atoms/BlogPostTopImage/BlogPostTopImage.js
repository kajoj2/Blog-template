import React from 'react'
import styled from 'styled-components'

const BlogPostTopImageStyle = styled.div`
  width: 100vw;
 
`
const StyledImage = styled.image

const BlogPostTopImage = (imgUrl) => <BlogPostTopImageStyle>
    <img src={imgUrl.imgUrl} />
</BlogPostTopImageStyle>

export default BlogPostTopImage