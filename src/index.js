import React from "react";
import { render } from "react-dom";
import { Accordion, AccordionItem } from "carbon-components-react";
import { SvgComponent } from "./svgcomponent";

const App = () => (
  <Accordion>
    <AccordionItem title="Collapsed">{/* <SvgComponent /> */}</AccordionItem>
    <AccordionItem title="Open">
      <SvgComponent />
    </AccordionItem>
  </Accordion>
);

render(<App />, document.getElementById("root"));
