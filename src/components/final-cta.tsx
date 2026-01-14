"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Download, Apple, ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="bg-background px-4 py-24 md:px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 p-12 text-center md:p-16"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(79,70,229,0.15)_0%,_rgba(0,0,0,0)_70%)]" />

          {/* Content */}
          <div className="relative">
            {/* App Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#1a1a1a] shadow-2xl"
            >
              <img
                src="/app-icon.png"
                alt="TypeBetter"
                className="h-16 w-16 rounded-xl"
              />
            </motion.div>

            {/* Headline */}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Start typing better in 30 seconds
            </h2>

            {/* Subheadline */}
            <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
              Download TypeBetter for free. No account required. Just install, hit your keyboard shortcut, and watch your writing transform.
            </p>

            {/* CTA Button */}
            <div className="mt-10 flex flex-col items-center gap-4">
              <a href="https://github.com/Vladimirbabic/typebettermac/releases/latest/download/TypeBetter.zip">
                <Button size="lg" className="h-16 rounded-full bg-white px-10 text-xl font-semibold text-black hover:bg-gray-200">
                  <Download className="mr-3 h-6 w-6" /> Download for Mac
                </Button>
              </a>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Apple className="h-4 w-4" />
                <span>macOS 12+ · Apple Silicon & Intel · Free to start</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>50 free rewrites/day</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
