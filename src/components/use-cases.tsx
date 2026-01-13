"use client";

import { motion } from "framer-motion";
import { PenTool, Briefcase, GraduationCap, Code2, Globe2, User } from "lucide-react";

const useCases = [
  {
    role: "Writers",
    action: "Rephrase sentences, adjust tone, fix grammar",
    icon: PenTool,
  },
  {
    role: "Professionals",
    action: "Make emails more formal, simplify complex text",
    icon: Briefcase,
  },
  {
    role: "Students",
    action: "Improve essays, clarify explanations",
    icon: GraduationCap,
  },
  {
    role: "Developers",
    action: "Rewrite documentation, improve comments",
    icon: Code2,
  },
  {
    role: "Non-native speakers",
    action: "Fix grammar, translate text naturally",
    icon: Globe2,
  },
  {
    role: "Everyone",
    action: "Quick text improvements without switching apps",
    icon: User,
  },
];

export function UseCases() {
  return (
    <section className="bg-muted/30 px-4 py-24 md:px-6">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Who is TypeBetter for?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Perfect for anyone who works with text.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="flex items-start space-x-4 rounded-lg bg-background p-4 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary">
                <useCase.icon className="h-5 w-5 text-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{useCase.role}</h3>
                <p className="text-sm text-muted-foreground">{useCase.action}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
