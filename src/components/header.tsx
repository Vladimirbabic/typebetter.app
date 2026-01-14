"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl border border-white/10 bg-[#1a1a1a] p-0.5">
              <img src="/app-icon.png" alt="TypeBetter" className="h-full w-full rounded-lg" />
            </div>
            <span className="text-lg font-bold text-white">TypeBetter</span>
          </a>

          {/* Download Button */}
          <a href="https://github.com/Vladimirbabic/typebettermac/releases/latest/download/TypeBetter.zip">
            <Button className="h-10 rounded-full bg-white px-6 font-semibold text-black hover:bg-gray-200">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
