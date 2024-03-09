import Image from "next/image"
import Hero from "@public/ss.webp"

export const HeroPage = () => {
  return (
    <Image
      src={Hero}
      alt="Yiskab-hero"
      width={100}
      height={100}
      className="w-screen"
    />
  )
}
