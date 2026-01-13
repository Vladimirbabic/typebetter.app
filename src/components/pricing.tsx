"use client";

import { Check, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function Pricing() {
  return (
    <section className="container mx-auto px-4 py-32 md:px-6">
      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          Pricing
        </h2>
        <p className="text-lg text-muted-foreground">
          No subscription. Pay once (or $0 for Free), then only for tokens you use.
        </p>
      </div>

      <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex w-full max-w-md flex-col rounded-3xl border border-white/10 bg-[#0f0f0f] p-1 overflow-hidden"
          >
             {/* Header Gradient */}
             <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />
            
            <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-bold text-white">BYOK License</h3>
                        <p className="text-xs text-orange-400 font-medium mt-1">Lifetime Updates</p>
                    </div>
                    <div className="text-right">
                        <span className="text-4xl font-bold text-white">$0</span>
                        <span className="block text-xs text-gray-500">/ forever</span>
                    </div>
                </div>

                <Button className="w-full bg-white text-black hover:bg-gray-200 font-semibold h-12 rounded-xl mb-8">
                    Download TypeBetter
                </Button>

                <div className="space-y-4">
                     <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Includes:</p>
                     <ul className="space-y-3">
                      {[
                        "1 Mac (1 seat)",
                        "Vision, Attachments, Presets",
                        "Use your tone of voice",
                        "350+ models: OpenAI, Anthropic, Google...",
                        "Apple Foundation Models, Ollama, LM Studio",
                        "Community Support"
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <Check className="h-4 w-4 shrink-0 text-green-500" />
                          <span className="text-sm text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                </div>
            </div>
            
            <div className="bg-[#151515] p-4 text-center text-xs text-gray-500 border-t border-white/5">
                Use your own API keys. No markup on tokens.
            </div>
          </motion.div>
      </div>
      
      <div className="mt-12 text-center text-sm text-gray-500">
        <p>14-day money back guarantee (even though it's free). Prices in USD.</p>
      </div>
    </section>
  );
}
