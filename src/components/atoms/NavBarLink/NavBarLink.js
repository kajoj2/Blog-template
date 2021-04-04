import styled from "styled-components";

const NavBarLink = styled.a`
    font-size: 1em;
  color: ${props => props.active ? "#218380": "black"};
  font-weight: bold;
  padding: 0 10px;
  text-decoration: none;
  :hover{
    text-decoration: underline;
  }
`

export default NavBarLink