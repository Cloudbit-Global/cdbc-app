import Image from 'next/image'
import { Download } from 'lucide-react'
import { GithubIcon } from '@/components/github-icon'
import { appConfig } from '@/lib/app-config'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Image
            src="/cloudbit-logo.png"
            alt="Cloudbit logo"
            width={34}
            height={34}
            className="rounded-lg neon-border"
          />
          <span className="font-mono text-sm font-bold uppercase tracking-[0.25em] text-foreground">
            {appConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-neon"
          >
            Features
          </a>
          <a
            href="#install"
            className="text-sm text-muted-foreground transition-colors hover:text-neon"
          >
            Install
          </a>
          <a
            href="#download"
            className="text-sm text-muted-foreground transition-colors hover:text-neon"
          >
            Download
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Cloudbit-Global"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Cloudbit-Global on GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-neon/50 hover:text-neon"
          >
            <GithubIcon className="h-4 w-4" />
          </a>
          <a
            href="#download"
            className="flex h-9 items-center gap-2 rounded-lg bg-neon px-4 text-sm font-semibold text-neon-foreground transition-shadow hover:shadow-[0_0_24px_oklch(0.82_0.16_195_/_0.5)]"
          >
            <Download className="h-4 w-4" />
            Get APK
          </a>
        </div>
      </div>
    </header>
  )
}
