import { HeroPage } from "@/components/hero"
import { SiteHeader } from "@/components/site-header"

export default function IndexPage() {
  return (
    <>
      <HeroPage />
      <SiteHeader className="absolute border-none bg-neutral-800/70 text-white" />
      <section className="containergrid items-center gap-6 pb-8 pt-6 md:py-10"></section>
    </>
  )
}
