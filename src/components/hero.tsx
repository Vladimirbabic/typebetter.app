"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Apple, Download, Play, Check } from "lucide-react";
import { useState, useEffect } from "react";

const typingDemo = {
  original: "hey can u send me the report asap? its urgent and i need it like now pls",
  improved: "Hi! Could you please send me the report at your earliest convenience? It's time-sensitive. Thank you!"
};

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [showImproved, setShowImproved] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const runAnimation = () => {
      setDisplayText("");
      setShowImproved(false);
      setIsTyping(true);

      // Type original text
      let i = 0;
      const typeOriginal = () => {
        if (i < typingDemo.original.length) {
          setDisplayText(typingDemo.original.slice(0, i + 1));
          i++;
          timeout = setTimeout(typeOriginal, 30);
        } else {
          // Pause then show improved
          timeout = setTimeout(() => {
            setIsTyping(false);
            setShowImproved(true);
            // Reset after showing improved
            timeout = setTimeout(runAnimation, 4000);
          }, 1500);
        }
      };

      timeout = setTimeout(typeOriginal, 1000);
    };

    runAnimation();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative overflow-hidden bg-background px-4 pt-24 pb-16 md:px-6 lg:pt-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(79,70,229,0.15)_0%,_rgba(0,0,0,0)_50%)]" />

      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
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
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="h-14 rounded-full bg-white px-8 text-lg font-semibold text-black hover:bg-gray-200">
                <Download className="mr-2 h-5 w-5" /> Download for Mac
              </Button>
              <Button size="lg" variant="outline" className="h-14 rounded-full border-white/20 px-8 text-lg font-medium text-white hover:bg-white/10">
                <Play className="mr-2 h-5 w-5" /> Watch 30s demo
              </Button>
            </div>

            {/* System Requirements */}
            <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
              <Apple className="h-4 w-4" />
              <span>macOS 12+ · Apple Silicon & Intel · Free to start</span>
            </div>
          </motion.div>

          {/* Right Side - Animated Demo */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-[#0a0a0a] p-1 shadow-2xl">
              {/* Browser Chrome */}
              <div className="rounded-xl border border-white/5 bg-[#141414] overflow-hidden">
                {/* Window Header */}
                <div className="flex items-center gap-3 border-b border-white/5 bg-[#1a1a1a] px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                    <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                    <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-flex items-center gap-2 rounded-md bg-[#252525] px-3 py-1 text-xs text-gray-400">
                      <span>slack.com</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 min-h-[320px]">
                  {/* App Header */}
                  <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
                    <div className="h-6 w-6 rounded bg-[#4A154B] flex items-center justify-center text-white text-xs font-bold">S</div>
                    <span>#general</span>
                  </div>

                  {/* Message Input */}
                  <div className="rounded-lg border border-white/10 bg-[#1a1a1a] p-4">
                    <div className="text-sm text-gray-300 min-h-[60px]">
                      {!showImproved ? (
                        <>
                          {displayText}
                          {isTyping && <span className="inline-block w-0.5 h-4 bg-white animate-pulse ml-0.5" />}
                        </>
                      ) : (
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="text-white"
                        >
                          {typingDemo.improved}
                        </motion.span>
                      )}
                    </div>
                  </div>

                  {/* TypeBetter Indicator */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: showImproved ? 1 : 0, y: showImproved ? 0 : 10 }}
                    className="mt-4 flex items-center gap-2"
                  >
                    <div className="flex items-center gap-2 rounded-full bg-blue-500/20 px-3 py-1.5 text-xs">
                      <div className="h-2 w-2 rounded-full bg-blue-500" />
                      <span className="text-blue-400 font-medium">Improved by TypeBetter</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className="absolute -bottom-4 -left-4 rounded-xl border border-white/10 bg-[#1a1a1a] p-3 shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-purple-500">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">30 min saved</div>
                  <div className="text-xs text-gray-500">today</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-20 rounded-2xl border border-white/5 bg-white/[0.02] p-6"
        >
          <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-br from-gray-600 to-gray-700" />
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-white">5,000+</span>
                <span className="text-gray-500"> Mac users</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
              <span className="text-sm font-medium">Loved by teams at</span>
              <span className="font-semibold text-gray-400">Linear</span>
              <span className="font-semibold text-gray-400">Notion</span>
              <span className="font-semibold text-gray-400">Vercel</span>
              <span className="font-semibold text-gray-400">Raycast</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <span className="font-bold text-white">4.9</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-4 w-4 fill-yellow-500" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">rating</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
