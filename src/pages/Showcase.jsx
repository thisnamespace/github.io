import React from 'react';
import styled from 'styled-components';
import ScrollObserver from "@thisnamespace/scrollobserver"
import { Layout, Typography, Buttons, } from "./../components/styled";

const Wrap = styled.div`
  height: 300px;
  margin-top:50px;
  position:relative;
  perspective: 800;
  perspective-origin: 50% 100px;
`
const Cube = styled.div`
  position: relative;
  margin: 0 auto;
  width: 200px;
  transform-style: preserve-3d;
  animation: spin 4s infinite linear;
  transition: all 1s linear;
  > div {
    position:absolute;
    width:200px;
    height:200px;
    display:block;
    background:rgba(255,255,255,0.1);
    box-shadow:inset 0 0 20px rgba(0,0,0,0.2);
    font-size:20px;
    text-align:center;
    line-height:200px;
    color:rgba(0,0,0,0.5);
    font-family:sans-serif;
    text-transform:uppercase;
    transition: all 1s linear;
    border-radius: 5px;
  }
  > span {
    position:absolute;
    top:50px;
    left:50px;
    width:100px;
    height:100px;
    display:block;
    background: blue;
    border-radius: 5px;
  }
  @keyframes spin {
    from { transform: rotateY(0); }
    to { transform: rotateY(360deg); }
  }
  @keyframes reversespin {
    from { transform: rotateY(360deg); }
    to { transform: rotateY(0deg); }
  }
`
const Front = styled.div`
  transform: translateZ(100px);
`
const Back = styled.div`
  transform: translateZ(-100px) rotateY(180deg);
`
const Top = styled.div`
  transform: rotateX(-90deg) translateY(-100px);
  transform-origin: top center;
`
const Bottom = styled.div`
  transform: rotateX(90deg) translateY(100px);
  transform-origin: bottom center;
`
const Left = styled.div`
  transform: rotateY(270deg) translateX(-100px);
  transform-origin: center left;
`
const Right = styled.div`
  transform: rotateY(-270deg) translateX(100px);
  transform-origin: top right;
`

const SmallFront = styled.span`
transform: translateZ(50px);
`
const SmallBack = styled.span`
transform: translateZ(-50px) rotateY(180deg);
`
const SmallTop = styled.span`
transform: rotateX(-90deg) translateY(-50px);
transform-origin: top center;
`
const SmallBottom = styled.span`
transform: rotateX(90deg) translateY(50px);
transform-origin: bottom center;
`
const SmallLeft = styled.span`
transform: rotateY(270deg) translateX(-50px);
transform-origin: center left;
`
const SmallRight = styled.span`
transform: rotateY(-270deg) translateX(50px);
transform-origin: top right;
`

const { Section, ColumnHolder, Column } = Layout;
const { H1, H2, H3, H4, H5, P } = Typography;
const { Primary, Secondary, Ghost, Raised, Toggle, Birds, Progress } = Buttons;

function Showcase() {
  return (
    <>
      <ColumnHolder>
        <Column size={2}>
          <Section minHeight={"105%"}>
            <H1>Typography</H1>
            <hr />
            <H1>Header One</H1>
            <H2>Header Two</H2>
            <H3>Header Three</H3>
            <H4>Header Four</H4>
            <H5>Header Five</H5>
            <P>This is an example of a paragraph.</P>
          </Section>
        </Column>
        <Column size={1} />
      </ColumnHolder>
      <ColumnHolder>
        <Column size={1} />
        <Column size={2}>
          <Section minHeight={"105%"}>
            <H1>Buttons</H1>
            <hr />
            <Primary>Primary Btn</Primary>
            <Secondary>Secondary Btn</Secondary>
            <Ghost>Ghost Btn</Ghost>
            <Raised>Raised Btn</Raised>
            <Toggle>Toggle Btn</Toggle>
            <Birds />
            <Progress />
          </Section>
        </Column>
      </ColumnHolder>
      <ColumnHolder>
        <Column size={2}>
          <Section>
            <Wrap>
              <Cube>
                <Front></Front>
                <Back></Back>
                <Top></Top>
                <Bottom></Bottom>
                <Left></Left>
                <Right></Right>
                <SmallFront></SmallFront>
                <SmallBack></SmallBack>
                <SmallTop></SmallTop>
                <SmallBottom></SmallBottom>
                <SmallLeft></SmallLeft>
                <SmallRight></SmallRight>
              </Cube>
            </Wrap>
          </Section>
        </Column>
        <Column size={1} />
      </ColumnHolder>
    </>
  )
}

export default Showcase;


