import Link from "next/link"
import { MainNavProps } from "@/types"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="flex flex-1 gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="size-5" />
        <span className="inline-block text-lg font-bold uppercase">
          {siteConfig.name}
        </span>
      </Link>
      {items?.length ? (
        <nav className="ml-auto hidden gap-10 px-10 sm:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-bold uppercase text-muted",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
