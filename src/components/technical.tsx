"use client";

import { CheckCircle2 } from "lucide-react";

export function Technical() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-2xl font-bold">System Requirements</h2>
        <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>macOS 13.0 (Ventura) or later</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Apple Silicon or Intel Mac</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-primary" />
            <span>Lightweight & Fast</span>
          </div>
        </div>
      </div>
    </section>
  );
}
