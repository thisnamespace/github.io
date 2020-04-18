import React from 'react';
import styled from "styled-components";
import "../css/font-awesome.min.css";

import bottom_image from "./../assets/bottom-1600.svg";

const FooterHolder = styled.footer`
  background-color: rgb(21, 50, 58);
`;

const Icons = styled.ul`
  list-style: none;
  display: flex;
  li {
    display: inline-block;
    font-size: 1.25em;
    line-height: 1em;
    padding-right: 0.5em;
    a, span {
      transition: background-color 0.2s ease-in-out;
      border-radius: 100%;
      border: solid 1px rgba(224, 224, 224, 0.75);
      display: inline-block;
      height: 2em;
      line-height: 2em;
      text-align: center;
      width: 2em;
      &:hover {
        background: rgba(224, 224, 224, 0.15);
      }
    }
  }
`;


function Footer() {
  return (
    <FooterHolder>
        <Icons>
          <li>
            <a href="http://twitter.com/thisnamespace" target="_blank" rel="noopener noreferrer" className="icon fa-twitter">
            </a>
          </li>
          <li>
            <a href="https://github.com/thisnamespace" target="_blank" rel="noopener noreferrer" className="icon fa-codepen">
            </a>
          </li>
          <li>
            <a href="https://github.com/thisnamespace" target="_blank" rel="noopener noreferrer" className="icon fa-github">
            </a>
          </li>
        </Icons>
        <Icons>
          <li>&copy; Untitled. All rights reserved.</li>
        </Icons>
    </FooterHolder>
  )
}

export default Footer;
