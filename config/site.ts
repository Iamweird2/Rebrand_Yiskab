import { Metadata } from "next"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Yis-kab",
  description: "Yis-kab DIstinctive Tech. Co. Nig. Ltd.",
  mainNav: [
    {
      title: "home",
      href: "/",
    },
    {
      title: "services",
      href: "/",
    },
    {
      title: "gallery",
      href: "/",
    },
    {
      title: "about",
      href: "/",
    },
    {
      title: "contact",
      href: "/",
    },
  ],
  links: {
    twitter: "#",
    github: "#",
  },
}

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}
