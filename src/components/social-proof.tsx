"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Manager at Linear",
    content: "TypeBetter cut my email time in half. I used to spend 20 minutes crafting the perfect message. Now I just type and it's done.",
    avatar: "SC",
  },
  {
    name: "Marcus Johnson",
    role: "Founder, SaaS Startup",
    content: "As a non-native English speaker, this is a game changer. My investor updates and customer emails finally sound professional.",
    avatar: "MJ",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Customer Success",
    content: "My team resolves 40% more tickets now. TypeBetter helps us write empathetic, clear responses without the mental overhead.",
    avatar: "ER",
  },
  {
    name: "David Kim",
    role: "Senior Developer",
    content: "I was skeptical—another AI tool? But this one actually works. My Slack messages are clearer and my PRs get approved faster.",
    avatar: "DK",
  },
  {
    name: "Anna Thompson",
    role: "Content Strategist",
    content: "Writer's block is basically gone. I just dump my thoughts and TypeBetter shapes them into something publishable.",
    avatar: "AT",
  },
  {
    name: "James Wilson",
    role: "Sales Director",
    content: "Cold emails that actually get replies. My response rate went from 3% to 12%. The ROI on this app is insane.",
    avatar: "JW",
  },
];

const metrics = [
  { value: "10K+", label: "Messages improved daily" },
  { value: "30 min", label: "Saved per user per day" },
  { value: "4.9/5", label: "Average rating" },
  { value: "95%", label: "Would recommend" },
];

export function SocialProof() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-24 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Loved by people who type all day
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Founders, writers, PMs, developers, and anyone who values their time
          </p>
        </motion.div>

        {/* Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-[#111111] p-6 text-center"
            >
              <div className="text-3xl font-bold text-white md:text-4xl">
                {metric.value}
              </div>
              <div className="mt-2 text-sm text-gray-500">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col rounded-2xl border border-white/5 bg-[#111111] p-6"
            >
              <Quote className="mb-4 h-8 w-8 text-blue-500/50" />

              <p className="mb-6 flex-1 text-gray-300 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-3 border-t border-white/5 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-sm font-bold text-white">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-sm text-gray-500">Used by teams at</p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-600">
            <span className="text-xl font-bold">Linear</span>
            <span className="text-xl font-bold">Notion</span>
            <span className="text-xl font-bold">Vercel</span>
            <span className="text-xl font-bold">Raycast</span>
            <span className="text-xl font-bold">Supabase</span>
            <span className="text-xl font-bold">Resend</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
