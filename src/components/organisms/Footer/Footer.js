import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 70px;
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

const FooterBar = () => (
    <FooterWrapper>
        <Text>Make with ♡ by @kajoj </Text>
    </FooterWrapper>
)

export default FooterBar