import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { InstallSteps } from '@/components/install-steps'
import { DownloadSection } from '@/components/download-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <InstallSteps />
        <DownloadSection />
      </main>
      <SiteFooter />
    </div>
  )
}
