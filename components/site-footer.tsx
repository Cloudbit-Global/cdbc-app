import Image from 'next/image'
import { GithubIcon } from '@/components/github-icon'
import { appConfig } from '@/lib/app-config'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2.5">
          <Image
            src="/cloudbit-logo.png"
            alt="Cloudbit logo"
            width={28}
            height={28}
            className="rounded-lg"
          />
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {appConfig.name} · {appConfig.version}
          </span>
        </div>

        <p className="font-mono text-xs text-muted-foreground">
          {'\u00A9'} {new Date().getFullYear()} Cloudbit. Built for the edge.
        </p>

        <a
          href="https://github.com/Cloudbit-Global"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-neon"
        >
          <GithubIcon className="h-4 w-4" />
          Cloudbit-Global
        </a>
      </div>
    </footer>
  )
}
