import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const changelog = [
  {
    version: "1.0.0",
    date: "January 14, 2025",
    title: "Initial Release",
    changes: [
      { type: "new", text: "Launch TypeBetter for Mac" },
      { type: "new", text: "Bring your own API key support (OpenAI, Anthropic, and more)" },
      { type: "new", text: "Custom prompt buttons mapped to 1-5 keys" },
      { type: "new", text: "Works in all Mac apps" },
      { type: "new", text: "Tone, grammar, and clarity improvements" },
    ],
  },
];

const typeStyles = {
  new: "bg-green-500/20 text-green-400",
  improved: "bg-blue-500/20 text-blue-400",
  fixed: "bg-yellow-500/20 text-yellow-400",
};

const typeLabels = {
  new: "New",
  improved: "Improved",
  fixed: "Fixed",
};

export default function Changelog() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />

      <section className="flex-1 px-4 pt-32 pb-24 md:px-6">
        <div className="container mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Changelog
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              New updates and improvements to TypeBetter.
            </p>
          </div>

          {/* Changelog entries */}
          <div className="space-y-12">
            {changelog.map((entry, index) => (
              <article
                key={index}
                className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-8"
              >
                {/* Version badge */}
                <div className="mb-4 flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                    v{entry.version}
                  </span>
                  <span className="text-sm text-gray-500">{entry.date}</span>
                </div>

                {/* Title */}
                <h2 className="mb-6 text-2xl font-bold text-white">
                  {entry.title}
                </h2>

                {/* Changes list */}
                <ul className="space-y-3">
                  {entry.changes.map((change, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 shrink-0 rounded px-2 py-0.5 text-xs font-medium ${
                          typeStyles[change.type as keyof typeof typeStyles]
                        }`}
                      >
                        {typeLabels[change.type as keyof typeof typeLabels]}
                      </span>
                      <span className="text-gray-300">{change.text}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
