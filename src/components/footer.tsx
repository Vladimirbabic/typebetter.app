import { Github, Twitter, Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-background pt-24 pb-12">
      {/* Bottom CTA */}
      <div className="container mx-auto px-4 mb-24 text-center">
         <div className="flex justify-center gap-4 mb-8">
             <div className="h-12 w-10 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                <span className="text-xs font-bold text-orange-400">High</span>
             </div>
             <div className="h-12 w-10 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                <span className="text-xs font-bold text-purple-400">Top</span>
             </div>
             <div className="h-12 w-10 bg-white/5 rounded border border-white/10 flex items-center justify-center">
                <span className="text-xs font-bold text-blue-400">Best</span>
             </div>
         </div>
         <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Bring the magic of AI to your Mac.
         </h2>
         <div className="flex flex-col items-center gap-4">
             {/* Logo */}
             <div className="h-16 w-16 rounded-2xl bg-[#1a1a1a] border border-white/10 shadow-xl mb-2 p-0.5">
                 <img src="/app-icon.png" alt="TypeBetter Logo" className="h-full w-full object-cover rounded-[14px]" />
             </div>
             <div className="text-xl font-bold text-white">TypeBetter</div>
             <p className="text-gray-500 max-w-sm">Use AI in any app on macOS. Save hours on written communication at work.</p>
             
             <Button className="mt-6 rounded-full bg-white text-black hover:bg-gray-200 px-8 h-12">
                <Download className="mr-2 h-4 w-4" /> Download macOS App
             </Button>
             <p className="text-xs text-gray-600">Apple Silicon & Intel · macOS 12+</p>
         </div>
      </div>

      <div className="container mx-auto px-4 border-t border-white/10 pt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="mb-6 font-bold text-white">App</h4>
            <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Grammarly alternative</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Prompt library</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Download</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Releases</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">EULA</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-white">Guides</h4>
            <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Summarize YouTube videos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Interface overview</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Running actions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Attachments</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Dictation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Presets</a></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-white">Integrations</h4>
             <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-white transition-colors">Perplexity</a></li>
                <li><a href="#" className="hover:text-white transition-colors">OpenRouter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Anthropic</a></li>
                <li><a href="#" className="hover:text-white transition-colors">OpenAI</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Google</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ollama</a></li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
             <div className="flex gap-4">
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="h-5 w-5" /></a>
             </div>
             <p className="text-xs text-gray-600 mt-8 md:mt-0">&copy; {new Date().getFullYear()} TypeBetter.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
