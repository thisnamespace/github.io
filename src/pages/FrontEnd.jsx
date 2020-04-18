import React from "react";
import styled from "styled-components";
import { Layout, Typography } from "./../components/styled/";
   
const { ColumnHolder, Column, Section } = Layout;
const { P } = Typography;

function FrontEnd() {
  return (
    <>
      <ColumnHolder>
        <Column size={1} />
        <Column size={4}>
          <Section minHeight={"105%"}>
            <h2>
              "IT'S STILL MAGIC <br />
              EVEN IF YOU KNOW HOW IT'S DONE"  <br />
              TERRY PRATCHETT
            </h2>
          </Section>
        </Column>
        <Column size={1} />
      </ColumnHolder>
      <ColumnHolder>
        <Column size={2}>
          <Section minHeight={"105%"}>
            <P>
              Static design mock-ups or screenshots may look pretty, but they can’t let you experience the interaction or performance.
              I try to focus my efforts on taking these beautiful stills and turning them working pieces of art; through distinct
              stages of design, prototype, test and review — with final decisions being made at the browser.
            </P>
            <P>
              With web standards ever evolving, I take each new project as an opportunity to refresh my approach and to sharpen my practice. <a href="">My blog</a> updates regularly and I host several projects on <a href="https://github.com/thisnamespace">GitHub</a>.
            </P>
          </Section>
        </Column>
        <Column size={1} />
      </ColumnHolder>
      <ColumnHolder>
        <Column size={1} />
        <Column size={2}>
        </Column>
      </ColumnHolder>
      <ColumnHolder>
        <Column size={1} />
        <Column size={3}>
          <Section>
            <h2>Learn about some of the projects I have worked on</h2>
            <ColumnHolder>
              <Column>
                HTML5
              </Column>
              <Column>
                CSS (Stylus/Sass)
              </Column>
              <Column>
                Javascript
              </Column>
            </ColumnHolder>
            <ColumnHolder>
              <Column>
                React
              </Column>
              <Column>
                Webpack
              </Column>
              <Column>
                Jquery
              </Column>
            </ColumnHolder>
            <ColumnHolder>
              <Column>
                Git/SVN
              </Column>
              <Column>
                Modernizer
              </Column>
              <Column>
              </Column>
            </ColumnHolder>
          </Section>
        </Column>
      </ColumnHolder>
      <ColumnHolder>
        <Column>
          <Section>
            
          </Section>
        </Column>
      </ColumnHolder>
    </>
  );
}

export default FrontEnd;
