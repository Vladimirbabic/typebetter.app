"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Apple, Star, Download } from "lucide-react";
import { useState } from "react";
import Antigravity from "@/components/ui/Antigravity";

export function Hero() {
  const [activeTab, setActiveTab] = useState("proofread");

  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden bg-background px-4 pt-32 pb-16 text-center md:px-6">
      <Antigravity count={150} magnetRadius={15} ringRadius={15} color="#4F46E5" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.05)_0%,_rgba(0,0,0,0)_50%)]" />
      
      {/* Top Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl"
      >
        <div className="mb-8 flex justify-center">
            <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] shadow-2xl p-0.5 border border-white/10">
                 <img src="/app-icon.png" alt="TypeBetter Logo" className="h-full w-full object-cover rounded-[14px]" />
            </div>
        </div>
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Save hours on written communication at work
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground sm:text-2xl leading-relaxed">
          Write emails, Slack replies, Jira tickets, proofread, chat with documents...
        </p>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 flex flex-col items-center gap-4"
      >
        <Button size="lg" className="h-14 rounded-full bg-white px-8 text-lg font-semibold text-black hover:bg-gray-200">
          <Download className="mr-2 h-5 w-5" /> Download macOS App
        </Button>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Apple className="h-4 w-4" />
          <span>Apple Silicon & Intel · macOS 12+</span>
        </div>
      </motion.div>

      {/* Social Proof */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-12 flex flex-col items-center space-y-4"
      >
        <p className="text-sm font-semibold text-foreground">
          Trusted by 5000+ employees and teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground opacity-60">
            {/* Logos Placeholders */}
            <span className="text-lg font-bold">UNUM</span>
            <span className="text-lg font-bold">Podcastle</span>
            <span className="text-lg font-bold">Linear</span>
            <span className="text-lg font-bold">Raycast</span>
            <span className="text-lg font-bold">Notion</span>
        </div>
        <div className="flex items-center gap-6 text-xs text-muted-foreground mt-2">
            <div className="flex items-center gap-1">
                <span className="font-bold text-foreground">4.9</span>
                <div className="flex -space-x-0.5">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-white text-white" />
                    ))}
                </div>
            </div>
             <div className="flex items-center gap-1">
                <span className="font-bold text-foreground">5.0</span>
                <div className="flex -space-x-0.5">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-white text-white" />
                    ))}
                </div>
            </div>
             <div className="flex items-center gap-1">
                <span className="font-bold text-foreground">5.0</span>
                <div className="flex -space-x-0.5">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-white text-white" />
                    ))}
                </div>
            </div>
        </div>
      </motion.div>

      {/* Hero Tabs & Image Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="mt-20 w-full max-w-6xl"
      >
        <div className="rounded-3xl border border-white/10 bg-[#0f0f0f] p-4 shadow-2xl">
            {/* Tabs Header */}
            <div className="mb-6 flex flex-wrap gap-8 border-b border-white/5 pb-4 px-4 text-sm font-medium">
                <button 
                    onClick={() => setActiveTab("proofread")}
                    className={`transition-colors hover:text-white ${activeTab === 'proofread' ? 'text-white' : 'text-gray-500'}`}
                >
                    <span className="block text-lg">Proofread</span>
                    <span className="text-xs font-normal opacity-60">Before you click "Send"</span>
                </button>
                <button 
                    onClick={() => setActiveTab("slack")}
                    className={`transition-colors hover:text-white ${activeTab === 'slack' ? 'text-white' : 'text-gray-500'}`}
                >
                    <span className="block text-lg">Write Slack replies</span>
                    <span className="text-xs font-normal opacity-60">That sound like you</span>
                </button>
                <button 
                    onClick={() => setActiveTab("chat")}
                    className={`transition-colors hover:text-white ${activeTab === 'chat' ? 'text-white' : 'text-gray-500'}`}
                >
                    <span className="block text-lg">Chat with documents</span>
                    <span className="text-xs font-normal opacity-60">Webpages, ebooks and images</span>
                </button>
            </div>

            {/* Content Area */}
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/5">
                {/* Simulated UI Window */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                     <div className="w-full max-w-3xl rounded-xl border border-white/10 bg-[#1e1e1e] shadow-2xl overflow-hidden">
                        {/* Window Header */}
                        <div className="flex items-center gap-4 border-b border-white/5 bg-[#252525] px-4 py-3">
                            <div className="flex space-x-2">
                                <div className="h-3 w-3 rounded-full bg-[#FF5F56]" />
                                <div className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
                                <div className="h-3 w-3 rounded-full bg-[#27C93F]" />
                            </div>
                            <div className="flex-1 text-center text-xs font-medium text-gray-500">Gmail - Compose</div>
                        </div>
                        {/* Window Content */}
                        <div className="p-8 bg-[#1e1e1e] text-left">
                            <div className="space-y-4">
                                <div className="text-sm text-gray-400 border-b border-white/5 pb-2">To: <span className="text-white">Client</span></div>
                                <div className="text-sm text-gray-400 border-b border-white/5 pb-2">Subject: <span className="text-white">Project Update</span></div>
                                <div className="pt-4 text-gray-300 leading-relaxed relative">
                                    <p>Hi Team,</p>
                                    <p className="mt-2">Just wanted to give you a quick update on the project. We are making good progress and should be done by Friday.</p>
                                    <p className="mt-2 bg-blue-500/20 text-blue-200 inline-block px-1 rounded">Let me know if you have any questions.</p>
                                    
                                    {/* TypeBetter Popup Simulation */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 rounded-lg border border-white/10 bg-[#2a2a2a] p-3 shadow-xl backdrop-blur-md">
                                        <div className="flex items-center gap-2 mb-2 text-xs text-gray-400">
                                            <div className="h-4 w-4 rounded bg-blue-500" />
                                            <span>TypeBetter</span>
                                        </div>
                                        <div className="text-sm text-white font-medium">Make it more professional</div>
                                        <div className="mt-2 h-1 w-full rounded-full bg-white/10">
                                            <div className="h-1 w-2/3 rounded-full bg-blue-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
