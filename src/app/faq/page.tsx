import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full text-gray-600 ">
      <AccordionItem value="item-1">
        <AccordionTrigger>What is Bourbon Finder about?</AccordionTrigger>
        <AccordionContent>
          Bourbon Finder is a platform designed to help users discover and explore a curated selection of fine whiskeys and bourbons from around the world. Our goal is to provide a comprehensive and user-friendly experience for connoisseurs and enthusiasts.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How can I use Bourbon Finder to discover new whiskeys?</AccordionTrigger>
        <AccordionContent>
          Users can use Bourbon Finder to browse through a curated collection of exceptional whiskeys. The platform offers search and filtering options, allowing users to discover new whiskeys based on their preferences, including country of origin, type, and more.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is there a specific criteria for the curated selection of whiskeys?</AccordionTrigger>
        <AccordionContent>
          The curated selection in Bourbon Finder is based on a set of criteria that includes the quality, uniqueness, and reputation of the whiskeys. Our team of experts considers factors such as flavor profile, distillery history, and critical acclaim when curating the collection.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How does the filtering system work in Bourbon Finder?</AccordionTrigger>
        <AccordionContent>
          Bourbon Finder's filtering system enables users to refine their search based on various criteria, including country, type, and other attributes. By selecting specific filters, users can tailor their whiskey exploration to match their preferences.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can I search for a specific whiskey or bourbon?</AccordionTrigger>
        <AccordionContent>
          Yes, Bourbon Finder provides a search functionality that allows users to look for a specific whiskey or bourbon. Users can enter the name of the whiskey they are searching for, and the platform will provide relevant results.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>How can I get in touch with the creators or provide feedback?</AccordionTrigger>
        <AccordionContent>
          Users can get in touch with the Bourbon Finder team by visiting the contact page on the platform. Additionally, we appreciate user feedback and encourage individuals to share their thoughts and suggestions through our provided communication channels.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}