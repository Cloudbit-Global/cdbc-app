import { Zap, ShieldCheck, CloudLightning, RefreshCw, Fingerprint, Gauge } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Instant Sync',
    desc: 'Real-time edge sync keeps every device mirrored in milliseconds.',
  },
  {
    icon: ShieldCheck,
    title: 'End-to-End Encryption',
    desc: 'Zero-knowledge encryption so only you can read your data.',
  },
  {
    icon: CloudLightning,
    title: 'Edge Storage',
    desc: 'Files served from the nearest node for blazing-fast access.',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Lock',
    desc: 'Fingerprint and face unlock guard your vault by default.',
  },
  {
    icon: RefreshCw,
    title: 'OTA Updates',
    desc: 'Seamless over-the-air updates straight from the repository.',
  },
  {
    icon: Gauge,
    title: 'Featherweight',
    desc: 'A tiny footprint that flies even on modest hardware.',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
          // Capabilities
        </p>
        <h2 className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight sm:text-4xl">
          Engineered for the future
        </h2>
        <p className="mt-4 text-pretty text-muted-foreground">
          Every feature is tuned for speed, privacy, and a seamless experience
          across the Cloudbit network.
        </p>
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-neon/40"
          >
            <div
              aria-hidden="true"
              className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-neon/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100"
            />
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-neon/30 bg-neon/10 text-neon">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 font-mono text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
