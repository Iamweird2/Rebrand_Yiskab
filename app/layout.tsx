import "@/styles/globals.css"
import { RootLayoutProps } from "@/types"
import { GeistSans } from "geist/font/sans"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            GeistSans.variable,
            GeistSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <div className="flex-1">{children}</div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
