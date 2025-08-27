import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";

export interface AccordionType {
  value: string;
  trigger: string;
  content: string;
}

interface Props {
  accordionList: AccordionType[];
}

const CustomAccordion = ({ accordionList }: Props) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue={accordionList[0].value}
    >
      {accordionList.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger className="text-primary text-lg md:text-xl font-medium">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-sm md:text-lg font-light text-balance">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
