import React from "react";
import { Layout, Typography } from "./../../components/styled/";
import Gallery from "./../../components/Gallery.jsx"
import { getImages } from './../../utils/images'
   
const { ColumnHolder, Column, Section } = Layout;
const { P } = Typography;

const images = getImages('portfolio/byf')

function BYF() {
  return (
    <>
      <ColumnHolder>
        <Column size={2}>
          <Section minHeight={"105%"}>
            <P>
              Bet Your Friends is mobile site that lets you bet against your friends on anything and everything. From football and Xfactor
              to the size of Bruce Forsyth’s paycheque. It is made easy to sign up and invite your friends to the bet your friends
              utilising the Facebook Graph API. It also allows you to create your own events in order to settle other arguments
              in the pub in real time.
            </P>
          </Section>
        </Column>
        <Column size={1} />
      </ColumnHolder>
      <ColumnHolder>
        <Column size={1} />
        <Column size={3}>
          <Section>
            <h2>Tools and technologies:</h2>
            <ColumnHolder>
              <Column>
                html5
              </Column>
              <Column>
                css3
              </Column>
              <Column>
                javascript
              </Column>
            </ColumnHolder>
            <ColumnHolder>
              <Column>
                jquery (templates)
              </Column>
              <Column>
                ajax
              </Column>
              <Column>
                lawnchair
              </Column>
            </ColumnHolder>
            <ColumnHolder>
              <Column>
                Social Media API's
              </Column>
              <Column>
                Maintaining Sessions
              </Column>
              <Column>
              </Column>
            </ColumnHolder>
          </Section>
        </Column>
      </ColumnHolder>
      <Gallery items={images}/>
    </>
  );
}

export default BYF;
