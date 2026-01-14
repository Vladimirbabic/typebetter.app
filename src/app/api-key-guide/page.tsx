import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Shield, ExternalLink, Key } from "lucide-react";

const providers = [
  {
    name: "OpenAI",
    logo: "OpenAI",
    color: "from-green-500 to-emerald-600",
    steps: [
      "Go to platform.openai.com and sign in or create an account",
      "Click on your profile icon in the top right corner",
      "Select 'API keys' from the dropdown menu",
      "Click 'Create new secret key'",
      "Give your key a name (e.g., 'TypeBetter')",
      "Copy the key immediately - you won't be able to see it again!",
      "Paste the key into TypeBetter settings",
    ],
    link: "https://platform.openai.com/api-keys",
    note: "OpenAI offers GPT-4o, GPT-4, and GPT-3.5 models. New accounts get free credits to start.",
  },
  {
    name: "Google AI Studio",
    logo: "Google",
    color: "from-blue-500 to-blue-600",
    steps: [
      "Go to aistudio.google.com and sign in with your Google account",
      "Click 'Get API key' in the left sidebar",
      "Click 'Create API key'",
      "Select a Google Cloud project or create a new one",
      "Copy your new API key",
      "Paste the key into TypeBetter settings",
    ],
    link: "https://aistudio.google.com/apikey",
    note: "Google AI Studio provides access to Gemini models. Free tier available with generous limits.",
  },
  {
    name: "Anthropic (Claude)",
    logo: "Claude",
    color: "from-orange-500 to-amber-600",
    steps: [
      "Go to console.anthropic.com and sign in or create an account",
      "Navigate to 'API Keys' in the left sidebar",
      "Click 'Create Key'",
      "Give your key a descriptive name (e.g., 'TypeBetter')",
      "Copy the key immediately - it's only shown once!",
      "Paste the key into TypeBetter settings",
    ],
    link: "https://console.anthropic.com/settings/keys",
    note: "Anthropic offers Claude 3.5 Sonnet, Claude 3 Opus, and other models. New accounts receive free credits.",
  },
];

export default function ApiKeyGuide() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />

      <section className="flex-1 px-4 pt-32 pb-24 md:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              API Key Setup Guide
            </h1>
            <p className="mt-4 text-xl text-gray-400">
              Get your API key from any supported provider and start using TypeBetter.
            </p>
          </div>

          {/* Security Callout */}
          <div className="mb-16 rounded-2xl border border-green-500/30 bg-green-500/10 p-6 md:p-8">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-500/20">
                <Shield className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white md:text-2xl">
                  Your API Key is Stored Securely
                </h2>
                <p className="mt-2 text-green-200/80">
                  TypeBetter stores your API key in the <strong>macOS Keychain</strong> — the same secure vault that stores your passwords, certificates, and other sensitive data. Your key never leaves your device and is protected by Apple's hardware-level encryption.
                </p>
              </div>
            </div>
          </div>

          {/* Provider Guides */}
          <div className="space-y-8">
            {providers.map((provider, index) => (
              <article
                key={index}
                className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8"
              >
                {/* Provider Header */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${provider.color}`}
                    >
                      <Key className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {provider.name}
                    </h2>
                  </div>
                  <a
                    href={provider.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
                  >
                    Open Console
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                {/* Steps */}
                <ol className="mb-6 space-y-3">
                  {provider.steps.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-semibold text-white">
                        {i + 1}
                      </span>
                      <span className="pt-0.5 text-gray-300">{step}</span>
                    </li>
                  ))}
                </ol>

                {/* Note */}
                <div className="rounded-xl bg-white/5 p-4">
                  <p className="text-sm text-gray-400">
                    <span className="font-medium text-gray-300">Note:</span>{" "}
                    {provider.note}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-12 text-center">
            <p className="text-gray-500">
              Need help? Contact us at{" "}
              <a
                href="mailto:support@typebetter.app"
                className="text-blue-400 hover:underline"
              >
                support@typebetter.app
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
