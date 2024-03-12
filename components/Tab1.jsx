import React from "react";
// import {
//   Accordion,
//   AccordionHeader,
//   AccordionBody,
// } from "@material-tailwind/react";

import {Accordion, AccordionItem} from "@nextui-org/react";

export default function Tab1() {
  const [open, setOpen] = React.useState(1);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
  return (
   
    <Accordion>
    <AccordionItem key="1" aria-label="Accordion 1" title="Accordion 1">
  q
    </AccordionItem>
    <AccordionItem key="2" aria-label="Accordion 2" title="Accordion 2">
    w
    </AccordionItem>
    <AccordionItem key="3" aria-label="Accordion 3" title="Accordion 3">
 e
    </AccordionItem>
  </Accordion>
  );
}
