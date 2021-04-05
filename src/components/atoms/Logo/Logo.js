import React from 'react'
import styled from 'styled-components'

const LogoStyle = styled.a`
  background: transparent;
  font-weight: 900;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;
`

const Logo = () => <LogoStyle href={"/"}  >FURWERS</LogoStyle>

export default Logo