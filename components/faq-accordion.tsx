"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How does OptimoCV improve my resume?</AccordionTrigger>
        <AccordionContent>
          OptimoCV uses advanced AI to analyze your resume against job descriptions and industry standards. It
          identifies missing keywords, suggests improvements to your content, optimizes formatting for ATS systems, and
          provides a detailed score analysis to help you understand how well your resume matches specific job
          requirements.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>What file formats do you support?</AccordionTrigger>
        <AccordionContent>
          We support PDF, DOCX, and TXT file formats for resume uploads. After optimization, you can download your
          enhanced resume in PDF or DOCX format.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How long does the optimization process take?</AccordionTrigger>
        <AccordionContent>
          The AI analysis and optimization process typically takes 2-3 minutes. You'll receive your enhanced resume
          along with detailed feedback and suggestions immediately after processing.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Is my data secure?</AccordionTrigger>
        <AccordionContent>
          Yes, we take data security seriously. Your resume data is encrypted both in transit and at rest. We do not
          share your personal information with third parties, and you can request deletion of your data at any time.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can I optimize my resume for specific job postings?</AccordionTrigger>
        <AccordionContent>
          Our Pro and Premium plans allow you to upload specific job descriptions, and our AI will tailor your resume
          optimization to match the requirements of that particular role, significantly increasing your chances of
          getting an interview.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
        <AccordionContent>
          Yes, we offer a 7-day money-back guarantee if you're not satisfied with our service. Simply contact our
          support team, and we'll process your refund.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

