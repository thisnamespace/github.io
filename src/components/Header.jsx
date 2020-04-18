import React from "react";
import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { Typography, Headers } from "./styled";
import { maxmedia, minmedia } from './styled/MediaQueries';

const { PageTitle, PageSubTitle } = Headers;

const Head = styled.header`
  background: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px rgba(224, 224, 224, 0.95);
  border-radius: 5px;
  padding: 1em 2em;
  margin: 2em
  ${maxmedia.tablet`
    margin: 1rem;
    flex-direction: column;
    padding: 0.5em 1em;
    padding-bottom: 2rem;
  `}
  ${maxmedia.phone`
    min-width: 320px;
    margin: 0.5rem;
    padding: 0em 0.5em;
    padding-bottom: 1rem;
  `}
`;

const Titles = styled.div`
`;

const Nav = styled.nav`
  ${maxmedia.tablet`
    display:flex;
    justify-content: space-between;
    width: 50%;
  `}
  ${maxmedia.phone`
    width: 100%;
  `}
  a {
    color: #000;
    text-decoration: none;
    margin-left: 2em;
    font-weight: bold;
    text-transform: uppercase;
    position: relative;
    ${maxmedia.tablet`
      margin-left: 0;
      font-size: 0.875rem
    `}
    &:hover {
      &:after {
        border-bottom: 0.125em solid red;
        content: "";
        left: 0;
        margin-top: calc(0.125em / 2 * -1);
        position: absolute;
        right: 0;
        top: 50%;
      }
    }
    &:active, 
    &.active {
      &:after {
        border-bottom: 0.125em solid red;
        content: "";
        left: 0;
        margin-top: calc(0.125em / 2 * -1);
        position: absolute;
        right: 0;
        top: 50%;
    }
`;

function Header() {
  return (
    <Head>
      <Titles>
        <PageTitle>thisnamespace</PageTitle>
        <PageSubTitle>Front-end Developer</PageSubTitle>
      </Titles>
      <Nav>
        <NavLink to="/" activeClassName={"active"} exact={true}>Home</NavLink>
        <NavLink to="/FrontEnd" activeClassName={"active"} exact={true}>Development</NavLink>
        <NavLink to="/Portfolio" activeClassName={"active"}>Portfolio</NavLink>
        <NavLink to="/Showcase" activeClassName={"active"}>Showcase</NavLink>
      </Nav>
    </Head>
  );
}

export default Header;
