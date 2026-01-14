"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "Is my data private? Does TypeBetter see what I type?",
    answer:
      "Privacy is our top priority. TypeBetter only processes the text you explicitly choose to improve. We don't log, store, or train on your data. If you use local models (Ollama, LM Studio), your text never leaves your machine. With cloud models, data is sent directly to the AI provider (OpenAI, Anthropic) under their privacy policies—we're just the messenger.",
  },
  {
    question: "Does it see my passwords or sensitive information?",
    answer:
      "No. TypeBetter only activates when you explicitly trigger it with a keyboard shortcut. It doesn't run in the background monitoring your keystrokes. Password fields are automatically excluded. You're always in control of what gets processed.",
  },
  {
    question: "How is this different from ChatGPT or Grammarly?",
    answer:
      "ChatGPT requires you to stop what you're doing, copy text, switch apps, write a prompt, wait, then paste back. That's 8 steps and 45+ seconds per edit. Grammarly only fixes grammar—it doesn't rewrite for tone, clarity, or length. TypeBetter improves your writing in real-time, in any app, with one keystroke. It's 10x faster than ChatGPT and 10x more powerful than Grammarly.",
  },
  {
    question: "Is TypeBetter faster than using ChatGPT directly?",
    answer:
      "Dramatically faster. There's no context switching, no copy-paste, no prompt writing. You stay in your app, hit a shortcut, and your text is improved in under 2 seconds. Most users report saving 30+ minutes per day compared to their previous AI workflow.",
  },
  {
    question: "Does it work in every app on Mac?",
    answer:
      "Yes. TypeBetter works in any text field on macOS—Slack, Gmail, Notion, Google Docs, Twitter, Linear, VS Code, Figma, your browser, email clients, even dating apps. If you can type there, TypeBetter can improve it.",
  },
  {
    question: "What AI models are supported?",
    answer:
      "We support all major models including GPT-4o, GPT-4, Claude 3.5 Sonnet, Claude 3 Opus, Gemini Pro, and local models via Ollama and LM Studio. Pro users get priority access to the fastest, most capable models.",
  },
  {
    question: "Can I use my own API keys?",
    answer:
      "Yes! TypeBetter supports BYOK (Bring Your Own Key). Connect your OpenAI, Anthropic, or other API keys directly. You pay the provider at their rates with no markup from us. This is great for power users who want maximum control and cost efficiency.",
  },
  {
    question: "What if I don't like the improvement?",
    answer:
      "Just hit Cmd+Z to undo. TypeBetter integrates with your system's native undo, so you can always revert instantly. You can also choose from multiple improvement suggestions before applying one.",
  },
];

export function FAQ() {
  return (
    <section className="bg-[#0a0a0a] py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl mb-4">
            Frequently asked questions
          </h2>
          <p className="text-gray-400">
            Everything you need to know about TypeBetter
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                value={`item-${index}`}
                className="border border-white/10 bg-[#111111] rounded-xl px-6 data-[state=open]:bg-[#151515] transition-colors"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-white hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5 text-sm leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            Still have questions?{" "}
            <a href="mailto:support@typebetter.app" className="text-blue-400 hover:underline">
              Contact us
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
