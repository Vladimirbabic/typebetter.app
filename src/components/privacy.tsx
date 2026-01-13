"use client";

import { ShieldCheck, Lock, HardDrive } from "lucide-react";

export function Privacy() {
  return (
    <section className="container mx-auto px-4 py-24 md:px-6">
      <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 p-8 text-white shadow-2xl md:p-12">
        <div className="flex flex-col items-center text-center md:items-start md:text-left lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Privacy First. Always.
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              We believe your text data belongs to you. That's why TypeBetter is built with privacy at its core.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="flex items-start space-x-3">
                <Lock className="h-6 w-6 text-green-400 shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Secure Storage</h3>
                  <p className="text-sm text-gray-400">API keys are stored in macOS Keychain, not plain text.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <HardDrive className="h-6 w-6 text-blue-400 shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">Local AI Support</h3>
                  <p className="text-sm text-gray-400">Use Ollama to run models locally. Zero data leaves your Mac.</p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative shield or lock graphic */}
          <div className="mt-10 flex h-48 w-48 items-center justify-center rounded-full bg-white/5 lg:mt-0">
             <ShieldCheck className="h-24 w-24 text-white/80" />
          </div>
        </div>
      </div>
    </section>
  );
}
