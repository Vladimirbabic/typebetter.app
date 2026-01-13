"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does it work?",
    answer:
      "TypeBetter sits in your menu bar. You can select text in any application and trigger TypeBetter with a shortcut. It reads the text, sends it to the AI model of your choice (Cloud or Local), and replaces the selected text with the result.",
  },
  {
    question: "What about the cost of tokens?",
    answer:
      "TypeBetter is a BYOK (Bring Your Own Key) app. You pay OpenAI, Anthropic, or other providers directly for your usage. For personal use, this often amounts to less than $1/month. Or use Ollama for free.",
  },
  {
    question: "What models are supported?",
    answer:
      "We support all major models including GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro, Llama 3 (via Ollama or Groq), and many others through OpenRouter.",
  },
  {
    question: "What is the context window limit?",
    answer:
      "TypeBetter supports the full context window of the model you select. For example, up to 128k tokens with GPT-4o.",
  },
  {
    question: "How does license work?",
    answer:
      "The app is free to download and use forever. There are no license keys required.",
  },
];

export function FAQ() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white mb-2">
            FAQ
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-white/10 bg-[#0f0f0f] rounded-xl px-6 data-[state=open]:bg-[#151515] transition-colors">
              <AccordionTrigger className="text-left text-lg font-bold text-white hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-6 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
