import { Check, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

function FAQ() {
  return (
    <div className="w-full pt-10 pb-4 lg:pt-16 lg:pb-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex gap-10 flex-col">
            <div className="flex gap-4 flex-col">
              <div className="flex gap-2 flex-col">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-[Inter,sans-serif] font-semibold">
                  Frequently Asked Questions
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  Have questions about our water treatment solutions, delivery, or services? We&apos;ve answered the most common ones below. Can&apos;t find what you&apos;re looking for? Reach out to our team directly.
                </p>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: 'What types of water treatment solutions does Aqua Solutions offer?',
                a: 'We supply a wide range of water treatment products including water purifiers, filtration systems, reverse osmosis units, UV sterilisers, water softeners, and borehole treatment solutions — for both residential and commercial use.'
              },
              {
                q: 'Do you serve clients outside of Kampala?',
                a: 'Yes. While our office is located in Kampala, we serve clients across Uganda and the wider East Africa region. Contact us to discuss delivery and installation options for your location.'
              },
              {
                q: 'Are your products certified and safe to use?',
                a: 'All products we supply meet international quality and safety standards for water treatment. We work with trusted manufacturers and certified suppliers to ensure every product is reliable and effective.'
              },
              {
                q: 'Do you offer professional installation?',
                a: 'Yes. Our trained technicians handle the full installation of water treatment systems, ensuring proper setup, testing, and handover so your system works correctly from day one.'
              },
              {
                q: 'Can I get a customised water treatment solution for my business?',
                a: 'Absolutely. We assess your specific water quality challenges and recommend a tailored solution — whether for a hotel, factory, school, hospital, or any other commercial or industrial facility.'
              },
              {
                q: 'Do you provide after-sales support and maintenance?',
                a: 'Yes. We offer ongoing maintenance contracts and servicing for all systems we install, including filter replacements, system checks, and technical support.'
              },
              {
                q: 'How do I get a quote?',
                a: 'You can request a quote by filling in the contact form on this page, sending us an email at info@aqua-uganda.com, or calling any of our telephone numbers. We aim to respond within one business day.'
              },
              {
                q: 'Do your products come with a warranty?',
                a: 'Yes. Products supplied by Aqua Solutions come with manufacturer warranties. We also provide post-installation support to address any issues that may arise.'
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={"index-" + index}>
                <AccordionTrigger>
                  <span className="text-base md:text-lg font-[Inter,sans-serif] font-semibold text-muted-foreground">{faq.q}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <span className="text-base md:text-base font-[Inter,sans-serif] text-black">{faq.a}</span>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export { FAQ };
export default FAQ;
