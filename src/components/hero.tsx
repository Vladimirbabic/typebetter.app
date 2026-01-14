"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Apple, Download, Check } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background px-4 pt-24 pb-16 md:px-6 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(79,70,229,0.15)_0%,_rgba(0,0,0,0)_50%)]" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24 items-center">
          {/* Left Side - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-300">Works in every Mac app</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.1]">
              Type 3x faster with AI that rewrites{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                in real time
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-xl text-gray-400 leading-relaxed max-w-xl">
              TypeBetter sits between your keyboard and every app, improving what you write before it hits the screen.
            </p>

            {/* Bullets */}
            <ul className="mt-8 space-y-4">
              {[
                "Works in every app (Notion, Slack, Gmail, Docs, X, etc)",
                "Fixes tone, grammar, clarity, and length as you type",
                "Create custom prompt buttons mapped to 1-5 keys for instant rewrites",
                "No copy-paste. No prompts. Just type."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/20">
                    <Check className="h-3 w-3 text-blue-400" />
                  </div>
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-10">
              <Button size="lg" className="h-14 rounded-full bg-white px-8 text-lg font-semibold text-black hover:bg-gray-200">
                <Download className="mr-2 h-5 w-5" /> Download for Mac
              </Button>
            </div>

            {/* System Requirements */}
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <Apple className="h-4 w-4" />
              <span>macOS 12+ · Apple Silicon & Intel · Free to start</span>
            </div>
          </motion.div>

          {/* Right Side - Video Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-xl border border-white/10 bg-[#0a0a0a] p-1 shadow-2xl" style={{ transform: 'scale(1.20)', transformOrigin: 'top center' }}>
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full rounded-[12px]"
              >
                <source src="/video/screencharm-1768386799845.mp4" type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
