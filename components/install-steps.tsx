const steps = [
  {
    n: '01',
    title: 'Download the APK',
    desc: 'Tap the download button to grab the latest signed build from the repository release.',
  },
  {
    n: '02',
    title: 'Allow unknown sources',
    desc: 'In Android settings, permit installs from your browser or file manager for this app.',
  },
  {
    n: '03',
    title: 'Open & install',
    desc: 'Open the downloaded file and confirm. Cloudbit installs in seconds.',
  },
  {
    n: '04',
    title: 'Launch Cloudbit',
    desc: 'Sign in, enable biometric lock, and your futuristic cloud is ready.',
  },
]

export function InstallSteps() {
  return (
    <section id="install" className="relative border-y border-border/60 bg-card/30">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-neon">
            // Setup
          </p>
          <h2 className="mt-3 text-balance font-mono text-3xl font-bold tracking-tight sm:text-4xl">
            Up and running in four steps
          </h2>
        </div>

        <ol className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.n}
              className="relative rounded-2xl border border-border bg-background/60 p-6"
            >
              <span className="font-mono text-3xl font-bold text-neon/40">
                {step.n}
              </span>
              <h3 className="mt-3 font-mono text-lg font-semibold">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
