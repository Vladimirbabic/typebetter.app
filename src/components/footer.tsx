export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-6">
          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-400">
            <a href="#" className="transition-colors hover:text-white">Download</a>
            <a href="/changelog" className="transition-colors hover:text-white">Changelog</a>
            <a href="/api-key-guide" className="transition-colors hover:text-white">API Key Guide</a>
            <a href="#" className="transition-colors hover:text-white">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} TypeBetter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
