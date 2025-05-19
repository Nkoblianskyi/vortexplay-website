"use client"

import Link from "next/link"
import Image from "next/image"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerChildren } from "@/components/animations/stagger-children"
import { StaggerItem } from "@/components/animations/stagger-item"

export function Footer() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    })
  }
  return (
    <footer id="contact" className="w-full border-t border-zinc-800 bg-zinc-950 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <StaggerChildren className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4" delay={0.2} staggerDelay={0.1}>
          <StaggerItem>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">VortexPlay Studio</h3>
              <p className="text-zinc-400">Tworzymy gry z pasją i zaangażowaniem, łącząc nostalgię z innowacją.</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Kontakt</h3>
              <p className="text-zinc-400">ul. Marszałkowska 87</p>
              <p className="text-zinc-400">00-683 Warszawa, Poland</p>
              <p className="text-zinc-400">+48 503 428 192</p>
              <p className="text-zinc-400">info@vortexplaystudio.com</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Linki</h3>
              <ul className="space-y-2 text-zinc-400">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors duration-300" onClick={handleClick}>
                    Strona główna
                  </Link>
                </li>
                <li>
                  <Link
                    href="/o-nas"
                    className="hover:text-primary transition-colors duration-300"
                    onClick={handleClick}
                  >
                    O nas
                  </Link>
                </li>
                <li>
                  <Link
                    href="/nasze-uslugi"
                    className="hover:text-primary transition-colors duration-300"
                    onClick={handleClick}
                  >
                    Nasze usługi
                  </Link>
                </li>
                <li>
                  <Link
                    href="/knightblade"
                    className="hover:text-primary transition-colors duration-300"
                    onClick={handleClick}
                  >
                    Darkrise
                  </Link>
                </li>
                <li>
                  <Link
                    href="/kontakt"
                    className="hover:text-primary transition-colors duration-300"
                    onClick={handleClick}
                  >
                    Kontakt
                  </Link>
                </li>
              </ul>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Pobierz grę</h3>
              <p className="text-zinc-400">
                Darkrise jest dostępna na urządzeniach z systemem Android. Pobierz już teraz i rozpocznij swoją
                przygodę!
              </p>
              <Link
                href="https://play.google.com/store/apps/details?id=com.Roika.Darkrise"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform duration-300"
              >
                <Image
                  src="/google-play-badge-new.png"
                  alt="Pobierz z Google Play"
                  width={160}
                  height={47}
                  className="hover:opacity-90 transition-opacity"
                />
              </Link>
            </div>
          </StaggerItem>
        </StaggerChildren>
        <FadeIn delay={0.6} className="mt-10 border-t border-zinc-800 pt-6 text-center text-zinc-400">
          <div className="flex justify-center space-x-4 mb-4">
            <Link
              href="/polityka-cookies"
              className="hover:text-primary transition-colors duration-300"
              onClick={handleClick}
            >
              Polityka Cookies
            </Link>
            <Link
              href="/polityka-prywatnosci"
              className="hover:text-primary transition-colors duration-300"
              onClick={handleClick}
            >
              Polityka Prywatności
            </Link>
            <Link href="/regulamin" className="hover:text-primary transition-colors duration-300" onClick={handleClick}>
              Regulamin
            </Link>
            <Link
              href="/warunki-korzystania"
              className="hover:text-primary transition-colors duration-300"
              onClick={handleClick}
            >
              Warunki korzystania z usługi
            </Link>
          </div>
          <p>© 2024 VortexPlay Studio. Wszelkie prawa zastrzeżone.</p>
        </FadeIn>
      </div>
    </footer>
  )
}
