import Image from 'next/image'
import { Download, ShieldCheck } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { appConfig } from '@/lib/app-config'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-neon/20 blur-[120px]"
        style={{ animation: 'cb-pulse-glow 6s ease-in-out infinite' }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-6%] top-[30%] h-[320px] w-[320px] rounded-full bg-accent/25 blur-[130px]"
      />
      <div aria-hidden="true" className="grid-bg absolute inset-0 opacity-60" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-neon/5 px-3 py-1 font-mono text-xs uppercase tracking-widest text-neon">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-neon" />
            </span>
            {appConfig.version} · Live
          </div>

          <h1 className="mt-6 text-balance font-mono text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Cloudbit for{' '}
            <span className="text-neon text-glow">Android</span>
          </h1>

          <p className="mt-5 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground">
            {appConfig.tagline} Download the APK directly from the repository —
            no store, no waiting. Fast, secure, and built for the future.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#download"
              className="group flex items-center justify-center gap-2 rounded-xl bg-neon px-6 py-3.5 font-semibold text-neon-foreground transition-all hover:shadow-[0_0_32px_oklch(0.82_0.16_195_/_0.55)]"
            >
              <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
              Download APK
            </a>
            <a
              href={appConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card/40 px-6 py-3.5 font-semibold text-foreground transition-colors hover:border-neon/50 hover:text-neon"
            >
              <GithubIcon className="h-5 w-5" />
              View Repository
            </a>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-neon" />
            Verified build · {appConfig.fileSize} · {appConfig.minAndroid}
          </div>
        </div>

        {/* Phone mockup */}
        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 m-auto h-72 w-72 rounded-full bg-neon/15 blur-[90px]"
          />
          <div style={{ animation: 'cb-float 6s ease-in-out infinite' }}>
            <Image
              src="/cloudbit-app-mockup.png"
              alt="Cloudbit Android app running on a smartphone"
              width={520}
              height={520}
              priority
              className="relative w-[280px] drop-shadow-[0_20px_60px_oklch(0.6_0.24_300_/_0.35)] sm:w-[360px]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
