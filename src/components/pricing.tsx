"use client";

import { Check, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Perfect for trying TypeBetter",
    features: [
      "50 rewrites per day",
      "Works in all apps",
      "Basic tone options",
      "Grammar & spelling fixes",
      "Community support",
    ],
    cta: "Download Free",
    popular: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For power users who type all day",
    features: [
      "Unlimited rewrites",
      "Custom tone profiles",
      "Priority AI models (GPT-4, Claude)",
      "Faster processing",
      "Learn from your writing style",
      "Advanced formatting options",
      "Priority support",
      "Early access to new features",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
];

export function Pricing() {
  return (
    <section className="bg-background px-4 py-24 md:px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Start free. Upgrade when you&apos;re ready.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-3xl border p-8 ${
                plan.popular
                  ? "border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-purple-500/10"
                  : "border-white/10 bg-[#0f0f0f]"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 text-sm font-medium text-white">
                    <Zap className="h-4 w-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
                <div className="mt-4">
                  <span className="text-5xl font-bold text-white">{plan.price}</span>
                  <span className="ml-2 text-gray-500">/{plan.period}</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                className={`mb-8 w-full h-12 rounded-xl font-semibold ${
                  plan.popular
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <Download className="mr-2 h-4 w-4" />
                {plan.cta}
              </Button>

              {/* Features */}
              <div className="space-y-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                  What&apos;s included:
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                        plan.popular ? "bg-blue-500/20" : "bg-white/10"
                      }`}>
                        <Check className={`h-3 w-3 ${plan.popular ? "text-blue-400" : "text-gray-400"}`} />
                      </div>
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            7-day free trial on Pro. Cancel anytime. No credit card required to start.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
