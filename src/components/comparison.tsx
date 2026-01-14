"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowRight, MessageSquare, Zap } from "lucide-react";

const chatGPTSteps = [
  { text: "Stop writing", icon: "pause" },
  { text: "Select text", icon: "select" },
  { text: "Copy to clipboard", icon: "copy" },
  { text: "Switch to ChatGPT", icon: "switch" },
  { text: "Write a prompt", icon: "prompt" },
  { text: "Wait for response", icon: "wait" },
  { text: "Copy result", icon: "copy" },
  { text: "Paste back", icon: "paste" },
];

const typeBetterSteps = [
  { text: "Just type", icon: "type" },
  { text: "AI improves instantly", icon: "magic" },
];

export function Comparison() {
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
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            TypeBetter is not another chat box.
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            It&apos;s a{" "}
            <span className="text-white font-semibold">real-time writing engine</span>.
          </p>
        </motion.div>

        {/* Comparison Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* ChatGPT Way */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-white/10 bg-[#0f0f0f] p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#74AA9C]/20">
                <MessageSquare className="h-5 w-5 text-[#74AA9C]" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">The old way</h3>
                <p className="text-sm text-gray-500">ChatGPT, Claude, etc.</p>
              </div>
            </div>

            <div className="space-y-3">
              {chatGPTSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 rounded-lg bg-white/5 px-4 py-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-500/20 text-xs font-bold text-red-400">
                    {i + 1}
                  </div>
                  <span className="text-sm text-gray-400">{step.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-red-400">
              <X className="h-4 w-4" />
              <span>8 steps, ~45 seconds per rewrite</span>
            </div>
          </motion.div>

          {/* TypeBetter Way */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8"
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/20">
                <Zap className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">The TypeBetter way</h3>
                <p className="text-sm text-gray-500">Real-time improvement</p>
              </div>
            </div>

            <div className="space-y-3">
              {typeBetterSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-xs font-bold text-blue-400">
                    {i + 1}
                  </div>
                  <span className="text-sm text-white font-medium">{step.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Visual spacer to show simplicity */}
            <div className="mt-4 flex flex-col items-center justify-center py-8">
              <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
              <p className="text-center text-sm text-gray-500">That&apos;s it. No context switching.</p>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-green-400">
              <Check className="h-4 w-4" />
              <span>2 steps, happens as you type</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-gray-400">
            Stop breaking your flow.{" "}
            <span className="text-white font-semibold">Write and improve simultaneously.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
