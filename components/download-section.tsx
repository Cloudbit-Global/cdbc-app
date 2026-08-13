import Image from 'next/image'
import { Download, HardDrive, Smartphone, Tag, Calendar } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { appConfig } from '@/lib/app-config'

const meta = [
  { icon: Tag, label: 'Version', value: appConfig.version },
  { icon: HardDrive, label: 'Size', value: appConfig.fileSize },
  { icon: Smartphone, label: 'Requires', value: appConfig.minAndroid },
  { icon: Calendar, label: 'Updated', value: appConfig.updatedOn },
]

export function DownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden py-20 sm:px-6 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-3xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-neon/25 bg-card/70 p-8 text-center backdrop-blur-xl neon-border sm:p-12">
          {/* scan line */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-neon/10 to-transparent"
            style={{ animation: 'cb-scan 5s linear infinite' }}
          />

          <Image
            src="/cloudbit-logo.png"
            alt="Cloudbit logo"
            width={72}
            height={72}
            className="mx-auto rounded-2xl neon-border"
          />

          <h2 className="mt-6 text-balance font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            Download <span className="text-neon text-glow">Cloudbit</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-pretty text-muted-foreground">
            Get the latest signed APK directly from our GitHub Releases. Free,
            open, and always up to date.
          </p>

          <a
            href={appConfig.downloadUrl}
            className="group mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-neon px-8 py-4 text-lg font-semibold text-neon-foreground transition-all hover:shadow-[0_0_40px_oklch(0.82_0.16_195_/_0.6)]"
          >
            <Download className="h-5 w-5 transition-transform group-hover:translate-y-0.5" />
            Download {appConfig.version} APK
          </a>

          <div className="mt-4">
            <a
              href={appConfig.releasesUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-neon"
            >
              <GithubIcon className="h-4 w-4" />
              Browse all releases
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {meta.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-background/50 p-4"
              >
                <Icon className="mx-auto h-4 w-4 text-neon" />
                <dt className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
