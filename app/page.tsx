import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function MineScapeLanding() {
  return (
    <div className="min-h-screen bg-[#1a1410]">
      {/* Minecraft-style pixelated header */}
      <header className="border-b-4 border-[#8b4513] bg-[#2d2416]">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-[#00ff00] border-2 border-black shadow-[2px_2px_0_0_rgba(0,0,0,0.8)]">
              <div className="w-full h-full grid grid-cols-2 grid-rows-2">
                <div className="bg-[#22aa22]"></div>
                <div className="bg-[#00ff00]"></div>
                <div className="bg-[#00ff00]"></div>
                <div className="bg-[#22aa22]"></div>
              </div>
            </div>
            <span className="text-2xl font-bold text-[#f5deb3] pixel-text">MineScape</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-[#c9b88a] hover:text-[#f5deb3] transition-colors font-semibold">
              Features
            </Link>
            <Link href="#about" className="text-[#c9b88a] hover:text-[#f5deb3] transition-colors font-semibold">
              About
            </Link>
            <Link href="#community" className="text-[#c9b88a] hover:text-[#f5deb3] transition-colors font-semibold">
              Community
            </Link>
          </nav>
        </div>
      </header>

      <section className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="max-w-6xl mx-auto">
          {/* Hero Image Area - Add your cool image here */}

          {/* Hero Text Content */}
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance text-[#f5deb3] drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)]">
              Sandbox World Building <span className="text-[#00ff00]">decentralized</span>
            </h1>
            <p className="text-lg md:text-sm text-[#c9b88a] mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              Create, own, and monetize in a unique sandbox world-building experience anchored to Filecoin storage
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="gap-2 text-base px-8 bg-[#00aa00] hover:bg-[#00ff00] text-black font-bold border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.8)] transition-all"
              >
                <a href="https://raw.githubusercontent.com/Ancients-Research/MineScape/refs/heads/main/MineScape%20Whitepaper%20Latest.pdf" download="MineScape-Whitepaper.pdf">
                  📥 Download Whitepaper
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="gap-2 text-base px-8 bg-[#5865f2] hover:bg-[#7289da] text-white font-bold border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.8)] transition-all"
              >
                <a href="https://discord.gg/wU4JKPRJ" target="_blank" rel="noopener noreferrer">
                  💬 Join Discord
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid with block-style cards */}
      <section id="features" className="container mx-auto px-4 py-20 border-t-4 border-[#8b4513]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#f5deb3] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
            A New Economic Loop...
          </h2>
          <p className="text-center text-[#c9b88a] mb-12 max-w-2xl mx-auto">
            encapsulated in a sandbox world building experience
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="size-16 bg-[#cd853f] border-4 border-black mx-auto mb-4 shadow-[3px_3px_0_0_rgba(0,0,0,0.8)]">
                <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                  <div className="bg-[#8b4513]"></div>
                  <div className="bg-[#cd853f]"></div>
                  <div className="bg-[#cd853f]"></div>
                  <div className="bg-[#8b4513]"></div>
                  <div className="bg-[#cd853f]"></div>
                  <div className="bg-[#daa520]"></div>
                  <div className="bg-[#daa520]"></div>
                  <div className="bg-[#cd853f]"></div>
                  <div className="bg-[#cd853f]"></div>
                  <div className="bg-[#daa520]"></div>
                  <div className="bg-[#daa520]"></div>
                  <div className="bg-[#cd853f]"></div>
                  <div className="bg-[#8b4513]"></div>
                  <div className="bg-[#cd853f]"></div>
                  <div className="bg-[#cd853f]"></div>
                  <div className="bg-[#8b4513]"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#f5deb3]">Create</h3>
              <p className="text-sm text-[#c9b88a] leading-relaxed">
                Gather resources, trade blocks and items, and use recipes to craft the world you envision
              </p>
            </div>
            <div className="text-center">
              <div className="size-16 bg-[#ff6b6b] border-4 border-black mx-auto mb-4 shadow-[3px_3px_0_0_rgba(0,0,0,0.8)]">
                <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                  <div className="bg-[#c92a2a]"></div>
                  <div className="bg-[#ff6b6b]"></div>
                  <div className="bg-[#ff6b6b]"></div>
                  <div className="bg-[#c92a2a]"></div>
                  <div className="bg-[#ff6b6b]"></div>
                  <div className="bg-[#ff8787]"></div>
                  <div className="bg-[#ff8787]"></div>
                  <div className="bg-[#ff6b6b]"></div>
                  <div className="bg-[#ff6b6b]"></div>
                  <div className="bg-[#ff8787]"></div>
                  <div className="bg-[#ff8787]"></div>
                  <div className="bg-[#ff6b6b]"></div>
                  <div className="bg-[#c92a2a]"></div>
                  <div className="bg-[#ff6b6b]"></div>
                  <div className="bg-[#ff6b6b]"></div>
                  <div className="bg-[#c92a2a]"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#f5deb3]">Own</h3>
              <p className="text-sm text-[#c9b88a] leading-relaxed">
                Own a piece of the sandbox world anchored to Filecoin storage mimicking real world scarcity
              </p>
            </div>
            <div className="text-center">
              <div className="size-16 bg-[#c0c0c0] border-4 border-black mx-auto mb-4 shadow-[3px_3px_0_0_rgba(0,0,0,0.8)]">
                <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                  <div className="bg-[#808080]"></div>
                  <div className="bg-[#c0c0c0]"></div>
                  <div className="bg-[#c0c0c0]"></div>
                  <div className="bg-[#808080]"></div>
                  <div className="bg-[#c0c0c0]"></div>
                  <div className="bg-[#d3d3d3]"></div>
                  <div className="bg-[#d3d3d3]"></div>
                  <div className="bg-[#c0c0c0]"></div>
                  <div className="bg-[#c0c0c0]"></div>
                  <div className="bg-[#d3d3d3]"></div>
                  <div className="bg-[#d3d3d3]"></div>
                  <div className="bg-[#c0c0c0]"></div>
                  <div className="bg-[#808080]"></div>
                  <div className="bg-[#c0c0c0]"></div>
                  <div className="bg-[#c0c0c0]"></div>
                  <div className="bg-[#808080]"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#f5deb3]">Monetize</h3>
              <p className="text-sm text-[#c9b88a] leading-relaxed">
                Node operators, creators, builders could all benefit from the economic opportunities within MineScape
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 border-t-4 border-[#8b4513]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f5deb3] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                About Us
              </h2>
              <p className="text-[#c9b88a] mb-4 leading-relaxed">
                MineScape is a decentralized sandbox experience under development by Ancients Research, a team of
                Web3 veterans who have decades of combined experience in mining, investing and building businesses.
              </p>
            </div>
            <div className="grid">
              <div className="mb-12 relative">
                <div className="aspect-[21/9] w-full bg-gradient-to-br from-[#2d2416] via-[#3d3420] to-[#1a1410] border-4 border-[#8b4513] shadow-[6px_6px_0_0_rgba(139,69,19,0.5)] relative overflow-hidden">
                  {/* Placeholder for user's hero image */}
                  <Image src="/minecraft-blocky-landscape-with-grass-blocks--tree.jpg" alt="MineScape Hero" fill className="object-cover" priority />
                  {/* Overlay gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="community" className="container mx-auto px-4 py-20 border-t-4 border-[#8b4513]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f5deb3] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
            Join the MineScape community
          </h2>
          <p className="text-lg text-[#c9b88a] mb-10 max-w-2xl mx-auto">
            Be part of the movement to redefine virtual worlds. Download our whitepaper to learn more, or join our
            Discord to connect with builders, creators, and miners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="gap-2 text-base px-8 bg-[#00aa00] hover:bg-[#00ff00] text-black font-bold border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.8)] transition-all"
            >
              <a href="https://raw.githubusercontent.com/Ancients-Research/MineScape/refs/heads/main/MineScape%20Whitepaper%20Latest.pdf" download="MineScape-Whitepaper.pdf">
                📥 Download Whitepaper
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="gap-2 text-base px-8 bg-[#5865f2] hover:bg-[#7289da] text-white font-bold border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.8)] transition-all"
            >
              <a href="https://discord.gg/wU4JKPRJ" target="_blank" rel="noopener noreferrer">
                💬 Join Discord
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer with Minecraft theme */}
      <footer className="border-t-4 border-[#8b4513] mt-20 bg-[#2d2416]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-[#00ff00] border-2 border-black">
                <div className="w-full h-full grid grid-cols-2 grid-rows-2">
                  <div className="bg-[#22aa22]"></div>
                  <div className="bg-[#00ff00]"></div>
                  <div className="bg-[#00ff00]"></div>
                  <div className="bg-[#22aa22]"></div>
                </div>
              </div>
              <span className="text-lg font-bold text-[#f5deb3]">MineScape</span>
            </div>
            <div className="flex gap-6 text-sm text-[#c9b88a]">
              <a href="https://minescape.ancientsresearch.xyz/" className="hover:text-[#f5deb3] transition-colors">
                Website
              </a>
              <a href="mailto:cs@guazi.io" className="hover:text-[#f5deb3] transition-colors">
                Contact
              </a>
              <a
                href="https://discord.gg/wU4JKPRJ"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5deb3] transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-[#c9b88a] mt-8">
            © 2025 MineScape. Being Built on FEVM. Powered by decentralization.
          </div>
        </div>
      </footer>
    </div>
  )
}
