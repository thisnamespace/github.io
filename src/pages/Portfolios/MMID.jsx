import React from "react";
import { Layout, Typography } from "./../../components/styled/";
   
const { ColumnHolder, Column, Section } = Layout;
const { P } = Typography;

function MMID() {
  return (
    <>
      <ColumnHolder>
        <Column size={2}>
          <Section minHeight={"105%"}>
            <P>
              We created an app specifically designed for a Windows mobile tablet, which could be side-loaded onto tablets given to Peroni
              sales teams. The app provides access to three precreated slideshows, including promotional videos, which fit with
              the “Servito con stile” re-positioning of the Peroni range as a premium Italian lifestyle brand. In addition, the
              sales person can access any and all of the individual slides/films from the pre-constructed presentations and put
              them together, in any order, into their own personalised presentation. Because pubs and bars can often be dark
              environments, looking at brochures can often be an eye-straining experience. On the tablet app, the glowing screen
              is a vast visual improvement! The app also includes a full brochure showcasing the product range, various bottle
              and keg sizes, branded glasses etc.
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
                C#
              </Column>
              <Column>
                Visual Studio
              </Column>
              <Column>
                CSS
              </Column>
            </ColumnHolder>
            <ColumnHolder>
              <Column>
                Javascript
              </Column>
              <Column>
                html
              </Column>
              <Column>
                .Net
              </Column>
            </ColumnHolder>
            <ColumnHolder>
              <Column>
              </Column>
              <Column>
              </Column>
              <Column>
              </Column>
            </ColumnHolder>
          </Section>
        </Column>
      </ColumnHolder>
    </>
  );
}

export default MMID;
