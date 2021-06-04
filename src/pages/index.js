import * as React from "react"
import MainLayout from "../Layout/main"
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image"



const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  font-weight: normal;
`

const BoldTitle = styled(Title)`
  font-weight: bold;
`
const Text = styled.p`

  font-size: 1.25rem;
  text-align: center;
`

const PurpleText = styled.span`
  display: inline;
  color: #7261A3;
`

const GreenText = styled.span`
  display: inline;
  color: #218380;
`

const RedText = styled.span`
  display: inline;
  color: #D72638;
`

const HeadLineWrapper = styled.div`
  padding: 25px;
  justify-content: center;
`

const FreeSpace = styled.div`
  height: 200px;
`

const CenterWrapper = styled.div`
  padding: 25px;
  justify-content: center;
`

const DoubleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`

const ImgWrapper = styled.div`
max-width: 90vw;
`

const IndexPage = () => {
    return (

        <MainLayout>
            <Wrapper>
                <HeadLineWrapper>
                    <BoldTitle> Electronic, IoT, Cloud </BoldTitle>
                    <Text> Make <PurpleText>things </PurpleText> that sends data to the <GreenText>Cloud </GreenText> and view this data everywhere.</Text>
                </HeadLineWrapper>
                <FreeSpace/>
                <CenterWrapper>
                    <Title> Now it’s only blog </Title>
                    <Text> We have big plans but to realize it we must create many things.  </Text>
                    <Text>We want to start with the most important thing, build  <RedText>community</RedText>.  </Text>
                    <Text>Home Page is the most important page of the website bla bla bla maybe it is but for now, it looks like this why?</Text>
                    <Text>An answer is pretty simple: We (Now it’s only me) want to focus on create content to make useful content for you.</Text>
                </CenterWrapper>
                <FreeSpace/>
                <DoubleWrapper>
                    <ImgWrapper>
                    <StaticImage src="../../data/images/main_page_sensor.png"    alt="A dinosaur"
                           placeholder="blurred"
                           layout="constrained"
                           />
                    </ImgWrapper>
                    <CenterWrapper>
                        <Title> Make Smart Things</Title>
                        <Text> We are in the XXI century on a level where every device can be connected to the internet. </Text>
                        <Text> But these things are hard to use, not easy to configure and data from them are useless.</Text>
                        <Text> So we will try to change this by making smart things.</Text>
                    </CenterWrapper>
                </DoubleWrapper>

            </Wrapper>

        </MainLayout>

    )
}

export default IndexPage
