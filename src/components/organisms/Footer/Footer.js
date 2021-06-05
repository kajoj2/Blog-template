import React from "react";
import styled from "styled-components";
import {StaticImage} from "gatsby-plugin-image"

const FooterWrapper = styled.div`
  height: 50px;
  width: 100%;
  background: #218380;
  display: flex;
  padding: 0 2%;
  align-items: center;
  justify-content: center;

`

const Text = styled.p`
  text-align: center;
  color: #fff;
`

const ImageLink = styled.a`
    padding: 10px;

`

const FooterBar = () => (
    <FooterWrapper>
        <ImageLink href={"https://www.instagram.com/kajoj2/"}>
            <StaticImage width={32} height={32} src="../../../../data/images/footer/instagram.png" alt={"instagram"}/>
        </ImageLink>
        <Text>Make with ❤ by @kajoj </Text>
        <ImageLink href={"https://github.com/kajoj2"}>
            <StaticImage width={32} height={32} src="../../../../data/images/footer/github.png" alt={"github"}/>
        </ImageLink>
    </FooterWrapper>
)

export default FooterBar