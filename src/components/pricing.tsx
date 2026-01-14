"use client";

import { Check, Key, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Pricing() {
  return (
    <section className="bg-background px-4 py-24 md:px-6">
      <div className="container mx-auto max-w-3xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            100% Free. Forever.
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Bring your own API key and use TypeBetter without limits.
          </p>
        </motion.div>

        {/* Single Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl border border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 md:p-12"
        >
          {/* Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2">
            <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-sm font-medium text-white">
              <Key className="h-4 w-4" />
              Bring Your Own API Key
            </div>
          </div>

          {/* Plan Header */}
          <div className="mb-8 text-center">
            {/* App Icon */}
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl">
              <img
                src="/app-icon.png"
                alt="TypeBetter"
                className="h-16 w-16 rounded-xl"
              />
            </div>
            <div>
              <span className="text-6xl font-bold text-white">$0</span>
              <span className="ml-2 text-xl text-gray-400">/forever</span>
            </div>
            <p className="mt-4 text-gray-400">
              Use your own OpenAI, Anthropic, or other API key. You only pay for what you use directly to the provider.
            </p>
          </div>

          {/* CTA Button */}
          <a href="https://github.com/Vladimirbabic/typebettermac/releases/latest/download/TypeBetter.zip">
            <Button
              className="mb-8 w-full h-14 rounded-xl font-semibold text-lg bg-white text-black hover:bg-gray-200"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Free
            </Button>
          </a>

          {/* Features */}
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 text-center">
              Everything included:
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                "Unlimited rewrites",
                "Works in all apps",
                "All tone options",
                "Grammar & spelling fixes",
                "Custom tone profiles",
                "Choose your AI model",
                "Learn from your style",
                "Advanced formatting",
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                    <Check className="h-3 w-3 text-blue-400" />
                  </div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            No subscriptions. No hidden fees. Just bring your API key and start typing better.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
