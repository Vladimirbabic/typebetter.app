"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  FileText, 
  Shield, 
  Search, 
  Keyboard, 
  Zap,
  Globe,
  Code2,
  Mail,
  Youtube
} from "lucide-react";

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Transition Text */}
        <div className="mb-32 text-center">
            <h2 className="text-2xl font-medium text-muted-foreground">
                Start your Wednesday by drafting a <span className="inline-flex items-center justify-center rounded bg-blue-500/20 px-2 py-0.5 text-blue-400"><Mail className="mr-1 h-4 w-4" /> reply</span> to that urgent <br className="hidden md:block"/> client request, then...
            </h2>
        </div>

        {/* Second Feature Highlight - Tailor your writing */}
        <div className="mb-32 w-full max-w-6xl mx-auto rounded-3xl border border-white/10 bg-[#0f0f0f] p-4 shadow-2xl">
            <div className="mb-6 flex flex-wrap gap-8 border-b border-white/5 pb-4 px-4 text-sm font-medium">
                <div className="text-white">
                    <span className="block text-lg">Tailor your writing</span>
                    <span className="text-xs font-normal opacity-60">For every situation</span>
                </div>
                <div className="text-gray-500">
                    <span className="block text-lg">Customize actions</span>
                    <span className="text-xs font-normal opacity-60">To fit the way you work</span>
                </div>
            </div>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl bg-[#151515] border border-white/5">
                 <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for feature UI */}
                    <div className="text-center">
                        <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-600 mb-4 shadow-lg shadow-purple-500/20">
                            <Zap className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-xl font-medium text-white">Powerful Custom Actions</h3>
                        <p className="text-gray-500 mt-2">Create your own prompts and assign hotkeys</p>
                    </div>
                 </div>
            </div>
        </div>

        {/* Bento Grid Header */}
        <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white mb-4">
                Integrate AI into your <br /> macOS workflow, instantly.
            </h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 max-w-6xl mx-auto">
            
            {/* Card 1: Ask ... */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="col-span-1 md:col-span-3 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 flex flex-col justify-between min-h-[240px]"
            >
                <div className="space-y-2">
                    {["Fix spelling and grammar", "Improve writing", "Summarize", "Make shorter", "YouTube Script Creator"].map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-400 border-b border-white/5 pb-2 last:border-0">
                            <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
                            {item}
                        </div>
                    ))}
                </div>
                <div className="mt-6 flex items-center gap-3 rounded-xl bg-[#1a1a1a] p-3 border border-white/5 text-gray-500">
                    <span className="text-xs uppercase font-bold tracking-wider">Ask</span>
                    <span className="text-white">""</span>
                </div>
            </motion.div>

            {/* Card 2: Built-in Actions */}
            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.1 }}
                className="col-span-1 md:col-span-3 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8"
            >
                <div className="flex justify-between items-start mb-6">
                    <h3 className="text-lg font-bold text-white">Built-in & <br /> custom actions</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {[1,2,3,4,5,6].map((_,i) => (
                            <div key={i} className={`h-8 w-8 rounded-lg ${i % 2 === 0 ? 'bg-orange-500/20 text-orange-400' : 'bg-green-500/20 text-green-400'} flex items-center justify-center`}>
                                <Zap className="h-4 w-4" />
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-sm text-gray-500">Use built-in actions and create your own to supercharge your daily workflows.</p>
                
                <div className="mt-6 flex flex-wrap gap-2">
                     {["OpenAI", "Anthropic", "Google", "Groq", "Ollama"].map((tag, i) => (
                        <span key={i} className="px-2 py-1 rounded-md bg-[#1a1a1a] border border-white/5 text-xs text-gray-400">
                            {tag}
                        </span>
                     ))}
                </div>
            </motion.div>

            {/* Card 3: AI Models */}
            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.2 }}
                className="col-span-1 md:col-span-2 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8"
            >
                <h3 className="text-3xl font-bold text-white mb-2">350+</h3>
                <p className="text-sm text-gray-500 mb-6">AI models supported</p>
                <div className="flex -space-x-3">
                    {[1,2,3,4].map((_,i) => (
                        <div key={i} className="h-10 w-10 rounded-full border-2 border-[#0f0f0f] bg-gradient-to-br from-gray-700 to-gray-800" />
                    ))}
                </div>
            </motion.div>

            {/* Card 4: Attachments */}
            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.3 }}
                className="col-span-1 md:col-span-2 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 flex flex-col items-center justify-center text-center"
            >
                <div className="flex gap-2 mb-4">
                    <div className="h-10 w-8 bg-blue-500/20 rounded border border-blue-500/30"></div>
                    <div className="h-10 w-8 bg-red-500/20 rounded border border-red-500/30"></div>
                    <div className="h-10 w-8 bg-green-500/20 rounded border border-green-500/30"></div>
                </div>
                <h3 className="font-bold text-white">Attachments</h3>
                <p className="text-xs text-gray-500 mt-1">Analyze, summarize, and chat</p>
            </motion.div>

            {/* Card 5: Privacy */}
            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.4 }}
                className="col-span-1 md:col-span-2 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 flex flex-col items-center justify-center text-center"
            >
                <div className="h-12 w-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="font-bold text-white">Privacy</h3>
                <p className="text-xs text-gray-500 mt-1">Your data stays local or private</p>
            </motion.div>

             {/* Card 6: Deep Research */}
             <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.5 }}
                className="col-span-1 md:col-span-2 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8"
            >
                <div className="h-10 w-10 rounded-lg bg-teal-500/10 flex items-center justify-center mb-4 text-teal-500">
                    <Search className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-white">Deep Research</h3>
                <p className="text-xs text-gray-500 mt-1">Multi-step reasoning</p>
            </motion.div>

             {/* Card 7: Shortcuts */}
             <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: 0.6 }}
                className="col-span-1 md:col-span-4 rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 flex items-center justify-between"
            >
                <div>
                     <h3 className="font-bold text-white">Shortcuts</h3>
                     <p className="text-xs text-gray-500 mt-1">Run actions faster</p>
                </div>
                <div className="flex gap-2">
                    <div className="h-10 px-3 rounded bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-sm font-mono text-gray-400">
                        ⌥ Option
                    </div>
                    <div className="h-10 px-3 rounded bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-sm font-mono text-gray-400">
                        Space
                    </div>
                </div>
            </motion.div>

        </div>

        {/* Feature List Bottom */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto text-sm">
             {[
                { icon: Code2, title: "Team deployment", desc: "Remote team deployment via CLI" },
                { icon: Bot, title: "Chat interface", desc: "Chat like you would in ChatGPT" },
                { icon: FileText, title: "Edit messages", desc: "Edit your prompt to improve response" },
                { icon: Zap, title: "Headless mode", desc: "Run actions in the background" },
                { icon: Globe, title: "Local models", desc: "Apple Foundation, Ollama, LM Studio" },
                { icon: Youtube, title: "Regenerate", desc: "See how different models respond" },
             ].map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400">
                        <item.icon className="h-4 w-4" />
                    </div>
                    <div>
                        <div className="font-bold text-white">{item.title}</div>
                        <div className="text-gray-500 text-xs">{item.desc}</div>
                    </div>
                </div>
             ))}
        </div>

      </div>
    </section>
  );
}
