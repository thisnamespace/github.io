import React from 'react';
import styled from "styled-components";

import bottom_image from "./../assets/bottom-1600.svg";

const Foot = styled.footer`
  position: relative;
  background-attachment: scroll;
  background-color: #4eb980;
  background-image: url(${bottom_image});
  background-position: top center;
  background-repeat: repeat-x;
  background-size: 1600px 230px, auto;
  padding: calc(230px + 4em) 0 6em 0;
  margin-top: -100px;
  :before {  
    background: rgba(224,224,224,0.75);
    content: '';
    height: 300px;
    left: 50%;
    position: absolute;
    top: 0;
    width: 1px;
  }
`;

const Icons = styled.ul`
  list-style: none;
`;


function Footer() {
  return (
    <Foot>
        <Icons>
          <li>
            <a href="http://twitter.com/thisnamespace" target="_blank" rel="noopener noreferrer" className="icon fa-twitter">
              <span>Twitter</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/thisnamespace" target="_blank" rel="noopener noreferrer" className="icon fa-codepen">
              <span>Codepen io</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/thisnamespace" target="_blank" rel="noopener noreferrer" className="icon fa-github">
              <span>Github</span>
            </a>
          </li>
        </Icons>

        <ul>
          <li>&copy; Untitled. All rights reserved.</li>
        </ul>
    </Foot>
  )
}

export default Footer;
