import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Typography, Headers } from "./styled";

//Assets
import top_image from "./../assets/top-1600.svg";
import overlay_image from "./../assets/overlay.png";
import header_image from "./../assets/header.jpg";

const { H1 } = Typography;
const { PageTitle, PageSubTitle } = Headers;

const Head = styled.header`
  background-attachment: scroll, scroll, fixed;
  background-image: url(${top_image}), url(${header_image}), url(${overlay_image});
  background-repeat: no-repeat, repeat-x, no-repeat;
  background-size: 1600px 230px, 100%, cover;
  background-position: bottom center;
  padding: 3em 0 10em 0;
  &.portfolio {
    padding: 3em 0 10em 0;
  }
`;

function Header() {
  return (
    <Head>
      <PageTitle>thisnamespace</PageTitle>
      <PageSubTitle>Front-end Developer</PageSubTitle>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/Showcase">Showcase</Link>
      </nav>
    </Head>
  );
}

export default Header;
