import React from 'react';
import { Layout, Typography, Buttons } from "./../components/styled";
// import ScrollObserver from "@thisnamespace/scrollobserver"

const { Section } = Layout;
const { H1, H2, H3, H4, H5, P } = Typography;
const { Primary, Secondary, Ghost, Raised, Toggle, Birds, Progress } = Buttons;

function Showcase() {
  return (
    <>
      <Section>
        <H1>Typography</H1>
        <hr />
        <H1>Header One</H1>
        <H2>Header Two</H2>
        <H3>Header Three</H3>
        <H4>Header Four</H4>
        <H5>Header Five</H5>
        <P>This is an example of a paragraph.</P>
      </Section>
      <Section>
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
      {/* <ScrollObserver callback={()=>alert('teg')} loadMore={true} /> */}
    </>
  )
}

export default Showcase;


