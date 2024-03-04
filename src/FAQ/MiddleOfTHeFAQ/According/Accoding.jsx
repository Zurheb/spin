import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}
 
export function AccordionCustomIcon() {
  const [open, setOpen] = React.useState(0);
 
  const handleOpen = (value) => setOpen(open === value ? 0 : value);
 
  return (
    <>
       <div className="space-y-4">
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(1)}>
            Do you have a refund policy?
          </AccordionHeader>
          <AccordionBody>
            Yes, we have a 100% money back guarantee. If you are not satisfied
            with Spin, Please create a support ticket and we will get you full
            refund. No question asked.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            What's the standard reply time for support?
          </AccordionHeader>
          <AccordionBody>
            Usually we reply within an hour if it's working hours. If not, it
            may be delayed up to 10 hours maximum.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            Will I get the update in future?
          </AccordionHeader>
          <AccordionBody>
            We provide lifetime update free to our customers. Whenever there is
            an update, you will be notified via email about it. <br />
            <br />
            Spin supports the latest, stable releases of all major browsers and
            platforms. On Windows, it supports Internet Explorer 10-11 /
            Microsoft Edge.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(4)}>
            What time does themewagon start serving?
          </AccordionHeader>
          <AccordionBody>
            Our office starts serving from 5am, but this can vary depending
            upon location. You can find locations and opening and closing
            times for all of our offices in the U.K. using our office locator
            here found in the 'locate' tab at the top of our website.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(5)}>
            Do you offer discounts to your products?
          </AccordionHeader>
          <AccordionBody>
            Yes, we currently offer discounts on our products. Any discounts
            are offered at the product's discretion.
          </AccordionBody>
        </Accordion>
      </div>
    </>
  );
}