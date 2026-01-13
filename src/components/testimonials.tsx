"use client";

import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Angelika",
    role: "Product Designer @ UNUM",
    content: "It's a beautifully designed time saver!",
    image: "https://i.pravatar.cc/150?u=angelika"
  },
  {
    name: "Noah",
    role: "Podcaster",
    content: "I love this app. It allows me to run prompts against various models, and it just works really well. It might be my favorite AI app on my Mac.",
    image: "https://i.pravatar.cc/150?u=noah"
  },
  {
    name: "Adam",
    role: "Director of Product Design",
    content: "Since using TypeBetter, switching between my operating system and browser has become much more efficient",
    image: "https://i.pravatar.cc/150?u=adam"
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            What are users saying about TypeBetter?
          </h2>
          <div className="flex gap-2">
            <button className="h-8 w-8 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-white/10">
                <ChevronLeft className="h-4 w-4" />
            </button>
            <button className="h-8 w-8 rounded-full border border-white/10 bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-white/10">
                <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0f0f0f] p-8 shadow-sm min-h-[250px]"
            >
              <div>
                  <p className="mb-6 text-lg font-medium leading-relaxed text-gray-200">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center gap-3 mt-auto border-t border-white/5 pt-4">
                <div className="h-8 w-8 rounded-full bg-gray-700 overflow-hidden">
                    <img src={testimonial.image} alt={testimonial.name} className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
