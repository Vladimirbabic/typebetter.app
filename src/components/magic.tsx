"use client";

import { motion } from "framer-motion";
import { Cpu, Palette, Brain, Globe } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Runs locally on your Mac",
    description: "No cloud dependency. Your text never leaves your machine unless you choose a cloud AI model. Lightning fast, works offline.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Uses your preferred tone",
    description: "Configure your writing style once. TypeBetter remembers whether you prefer formal, casual, witty, or professional. Every improvement sounds like you.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "Learns from your writing",
    description: "The more you use it, the better it gets. TypeBetter adapts to your vocabulary, idioms, and communication patterns over time.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Works in any text field",
    description: "Email, Slack, Twitter, Notion, Google Docs, Linear, Figma, your browser—if you can type there, TypeBetter can improve it.",
    color: "from-orange-500 to-amber-500",
  },
];

export function Magic() {
  return (
    <section className="bg-background px-4 py-24 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1.5 text-sm text-gray-400">
            <span className="text-lg">✨</span>
            <span>Why it feels like magic</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            AI that gets out of your way
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-400">
            No prompts. No popups. No context switching. Just better writing, instantly.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-white/5 bg-[#0f0f0f] p-8 transition-all hover:border-white/10"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color}`}>
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center text-gray-600 text-sm font-bold">
                  {index + 1}
                </div>
              </div>

              <h3 className="mb-3 text-xl font-bold text-white">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-white/5 bg-gradient-to-br from-blue-500/5 to-purple-500/5 p-8 text-center"
        >
          <div className="mx-auto max-w-2xl">
            <p className="text-lg text-gray-300">
              &quot;It&apos;s like having a world-class editor sitting next to you, but one who works at the speed of thought.&quot;
            </p>
            <p className="mt-4 text-sm text-gray-500">
              — Every TypeBetter user, probably
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
