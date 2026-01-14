import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl border border-white/10 bg-[#1a1a1a] p-0.5">
                <img src="/app-icon.png" alt="TypeBetter" className="h-full w-full rounded-lg" />
              </div>
              <span className="text-lg font-bold text-white">TypeBetter</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              AI-powered writing improvement for Mac. Type better, faster, everywhere.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-gray-400 transition-colors hover:bg-white/10 hover:text-white">
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Product</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="transition-colors hover:text-white">Download</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Pricing</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Features</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Changelog</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="transition-colors hover:text-white">Documentation</a></li>
              <li><a href="#" className="transition-colors hover:text-white">API Keys Guide</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Support</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="transition-colors hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="transition-colors hover:text-white">Terms of Service</a></li>
              <li><a href="#" className="transition-colors hover:text-white">EULA</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/5 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} TypeBetter. All rights reserved.
            </p>
            <p className="text-sm text-gray-600">
              Made with care for writers everywhere.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
