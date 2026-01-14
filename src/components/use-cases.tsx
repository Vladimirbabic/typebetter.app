"use client";

import { motion } from "framer-motion";
import { Mail, MessageCircle, FileText, Twitter, Heart, Headphones, Briefcase, BookOpen } from "lucide-react";

const useCases = [
  {
    icon: Mail,
    context: "Email",
    description: "Professional emails in seconds, not minutes",
    example: "Turn quick thoughts into polished responses",
    color: "from-blue-500/20 to-blue-600/20",
    iconColor: "text-blue-400",
  },
  {
    icon: Twitter,
    context: "Twitter/X",
    description: "Threads and posts that get engagement",
    example: "Go viral without the cringe",
    color: "from-sky-500/20 to-sky-600/20",
    iconColor: "text-sky-400",
  },
  {
    icon: MessageCircle,
    context: "Slack",
    description: "Quick, clear team communication",
    example: "Sound professional in every channel",
    color: "from-purple-500/20 to-purple-600/20",
    iconColor: "text-purple-400",
  },
  {
    icon: FileText,
    context: "Docs & Notion",
    description: "Documentation that people actually read",
    example: "Write specs and PRDs faster",
    color: "from-orange-500/20 to-orange-600/20",
    iconColor: "text-orange-400",
  },
  {
    icon: Heart,
    context: "Dating apps",
    description: "Messages that get responses",
    example: "Be witty without trying too hard",
    color: "from-pink-500/20 to-pink-600/20",
    iconColor: "text-pink-400",
  },
  {
    icon: Headphones,
    context: "Support replies",
    description: "Helpful, empathetic customer responses",
    example: "Resolve tickets 2x faster",
    color: "from-green-500/20 to-green-600/20",
    iconColor: "text-green-400",
  },
  {
    icon: Briefcase,
    context: "Job applications",
    description: "Cover letters that stand out",
    example: "Land more interviews",
    color: "from-indigo-500/20 to-indigo-600/20",
    iconColor: "text-indigo-400",
  },
  {
    icon: BookOpen,
    context: "Content writing",
    description: "Blog posts, articles, newsletters",
    example: "Publish more, edit less",
    color: "from-amber-500/20 to-amber-600/20",
    iconColor: "text-amber-400",
  },
];

export function UseCases() {
  return (
    <section className="bg-[#0a0a0a] px-4 py-24 md:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            Write like a pro in any app
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            TypeBetter improves your writing wherever you need it
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#111111] p-6 transition-all hover:border-white/10 hover:bg-[#151515]"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 transition-opacity group-hover:opacity-100`} />

              {/* Content */}
              <div className="relative">
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ${useCase.iconColor}`}>
                  <useCase.icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-white">
                  {useCase.context}
                </h3>

                <p className="mb-3 text-sm text-gray-400">
                  {useCase.description}
                </p>

                <p className="text-xs text-gray-500 italic">
                  &quot;{useCase.example}&quot;
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500">
            And{" "}
            <span className="text-white">every other text field</span>{" "}
            on your Mac
          </p>
        </motion.div>
      </div>
    </section>
  );
}
