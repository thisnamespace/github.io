import React from "react";
import styled from "styled-components";
import { Layout, Typography } from "./../components/styled/";
import logos from "./../utils/logos.js";
   
const { ColumnHolder, Column, Section } = Layout;
const { P } = Typography;

const Logo = styled.a`
  text-decoration: none;
  border: none;
  img {
    filter: grayscale(100%);
    border: solid 1px rgba(224, 224, 224, 0.75);
    border-radius: 20px;
    &:hover {
      filter: grayscale(0%);
    }
  }
`

function Home() {
  return (
    <>
      <ColumnHolder>
        <Column size={2}>
          <Section minHeight={"105%"}>
            <P>
              I'll often work with in-house teams on agile projects, I prefer to
              be ingrained with the team and working in the same room as them. I
              find daily standups beneficial on time sensitive projects as they
              allow for rapid feed back on the previous days work, and questions
              to be answered to make sure the project is on track.
            </P>
            <P>
              I work closely with both designers and back-end developers(having
              once been one) to ensure the project's vision is maintained
              throughout the development life cycle. As I prefer to work
              directly with the designer, it tends to often lessen the need for
              complicated photoshop mock-ups and UX guides. A brief and some
              low-fidelity wireframes can quickly be turned into functioning
              prototypes and then iterated on with the designer.
            </P>
            <P>
              Even though I am happy to help pitch in with some of the design/UX
              work alongside a designer, I am not a designer and I won't be
              comfortable working on aspects such as mockups or iconography.
            </P>
          </Section>
        </Column>
        <Column size={1} />
      </ColumnHolder>
      <ColumnHolder>
        <Column size={1} />
        <Column size={3}>
          <Section>
            <h2>Learn about some of the projects I have worked on</h2>
            <ColumnHolder>
              <Column>
                <Logo href="portfolio/gatwick">
                  <img src={logos.lgw} />
                </Logo>
              </Column>
              <Column>
                <Logo href="portfolio/mitsubishi">
                  <img src={logos.mits} />
                </Logo>
              </Column>
              <Column>
                <Logo href="portfolio/virgin_holidays">
                  <img src={logos.vhol} />
                </Logo>
              </Column>
            </ColumnHolder>
            <ColumnHolder>
              <Column>
                <Logo href="portfolio/nhs">
                  <img src={logos.nhs} />
                </Logo>
              </Column>
              <Column>
                <Logo href="portfolio/tescos">
                  <img src={logos.tesco} />
                </Logo>
              </Column>
              <Column>
                <Logo href="portfolio/waitrose">
                  <img src={logos.waitrose} />
                </Logo>
              </Column>
            </ColumnHolder>
            <ColumnHolder>
              <Column>
                <Logo href="portfolio/byf">
                  <img src={logos.byf} />
                </Logo>
              </Column>
              <Column>
                <Logo href="portfolio/peroni">
                  <img src={logos.peroni} />
                </Logo>
              </Column>
              <Column>
                <Logo href="portfolio/mmid">
                  <img src={logos.mmid} />
                </Logo>
              </Column>
            </ColumnHolder>
          </Section>
        </Column>
      </ColumnHolder>
    </>
  );
}

export default Home;
