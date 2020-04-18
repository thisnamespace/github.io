import React from 'react';
import styled from "styled-components";
import { Layout, Typography } from "./styled/";
   
const { ColumnHolder, Column, Section } = Layout;
const { P } = Typography;

const NavButtons = styled.div`
  position: absolute;
  width: 50px;
  height: 100%;
  opacity: 0.25;
  top: 0px;
  display: flex;
  align-items:center;
  justify-content: center;
  &:hover {
    opacity: 1;
  }
  &.left {
    left: 1rem;
  }
  &.right {
    right: 1rem;
  }
`

class Gallery extends React.Component {
  render() {
    return (
      <ColumnHolder>
        <Column size={1}>
          <Section>
            <NavButtons className="left"><span>L</span></NavButtons>
            images
            <NavButtons className="right"><span>R</span></NavButtons>
          </Section>
        </Column>
      </ColumnHolder>
    )
  }
}

export default Gallery;
