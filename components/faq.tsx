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
                  This is the start of something new
                </h4>
                <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                  Managing a small business today is already tough. Avoid further
                  complications by ditching outdated, tedious trade methods. Our
                  goal is to streamline SMB trade, making it easier and faster
                  than ever.
                </p>
              </div>
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: 'How soon can I get water delivered?',
                a: 'We offer same-day delivery for urgent orders placed before 2 PM. Regular deliveries are scheduled within 24-48 hours.'
              },
              {
                q: 'What areas do you serve?',
                a: 'We primarily serve Kampala and surrounding districts. Contact us to check if your location is within our service area.'
              },
              {
                q: 'Are your water treatment products safe?',
                a: 'Yes! All our products are certified and meet international safety standards for water treatment.'
              },
              {
                q: 'Do you offer installation services?',
                a: 'Absolutely. Our expert technicians provide professional installation for all water treatment systems.'
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept cash, mobile money, and bank transfers for your convenience.'
              },
              {
                q: 'How do I request a quote?',
                a: 'You can request a quote through our website contact form or by calling our customer support team.'
              },
              {
                q: 'Do you provide maintenance services?',
                a: 'Yes, we offer regular maintenance and servicing for all products we install.'
              },
              {
                q: 'Is there a warranty on your products?',
                a: 'All our products come with a 2-year warranty covering manufacturing defects and free repairs.'
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
