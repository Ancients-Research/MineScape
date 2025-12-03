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
          <div className="mb-12 relative">
            <div className="aspect-[21/9] w-full bg-gradient-to-br from-[#2d2416] via-[#3d3420] to-[#1a1410] border-4 border-[#8b4513] shadow-[6px_6px_0_0_rgba(139,69,19,0.5)] relative overflow-hidden">
              {/* Placeholder for user's hero image */}
              <Image src="/minecraft-blocky-landscape-with-grass-blocks--tree.jpg" alt="MineScape Hero" fill className="object-cover" priority />
              {/* Overlay gradient for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410] via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Hero Text Content */}
          <div className="text-center relative z-10">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance text-[#f5deb3] drop-shadow-[3px_3px_0_rgba(0,0,0,0.8)]">
              The future of sandbox world-building is <span className="text-[#00ff00]">decentralized</span>
            </h1>
            <p className="text-lg md:text-xl text-[#c9b88a] mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              MineScape empowers users to collaboratively create, own, and monetize virtual worlds through true
              decentralization—anchored to Filecoin storage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="gap-2 text-base px-8 bg-[#00aa00] hover:bg-[#00ff00] text-black font-bold border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.8)] transition-all"
              >
                <a href="https://blob.v0.app/lhpov.pdf" download="MineScape-Whitepaper.pdf">
                  📥 Download Whitepaper
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="gap-2 text-base px-8 bg-[#5865f2] hover:bg-[#7289da] text-white font-bold border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.8)] transition-all"
              >
                <a href="https://discord.gg/minescape" target="_blank" rel="noopener noreferrer">
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
            Core Features
          </h2>
          <p className="text-center text-[#c9b88a] mb-12 max-w-2xl mx-auto">
            Built on Filecoin with a novel asset class and community-driven governance
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-[#2d2416] border-4 border-[#8b4513] shadow-[4px_4px_0_0_rgba(139,69,19,0.5)] hover:translate-y-[-2px] transition-transform">
              <div className="size-12 bg-[#8b4513] border-2 border-black mb-4 shadow-[2px_2px_0_0_rgba(0,0,0,0.8)]">
                <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-[1px]">
                  <div className="bg-[#654321]"></div>
                  <div className="bg-[#8b4513]"></div>
                  <div className="bg-[#654321]"></div>
                  <div className="bg-[#8b4513]"></div>
                  <div className="bg-[#a0522d]"></div>
                  <div className="bg-[#8b4513]"></div>
                  <div className="bg-[#654321]"></div>
                  <div className="bg-[#8b4513]"></div>
                  <div className="bg-[#654321]"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#f5deb3]">Blocks & Items</h3>
              <p className="text-[#c9b88a] leading-relaxed">
                Mine fundamental blocks with unique attributes—preciousness, toughness, comfortness—and craft composable
                items with inheritable properties.
              </p>
            </Card>

            <Card className="p-6 bg-[#2d2416] border-4 border-[#8b4513] shadow-[4px_4px_0_0_rgba(139,69,19,0.5)] hover:translate-y-[-2px] transition-transform">
              <div className="size-12 bg-[#00aa00] border-2 border-black mb-4 shadow-[2px_2px_0_0_rgba(0,0,0,0.8)]">
                <div className="w-full h-full grid grid-cols-3 grid-rows-3">
                  <div className="bg-[#008800]"></div>
                  <div className="bg-[#00aa00]"></div>
                  <div className="bg-[#008800]"></div>
                  <div className="bg-[#00aa00]"></div>
                  <div className="bg-[#00ff00]"></div>
                  <div className="bg-[#00aa00]"></div>
                  <div className="bg-[#008800]"></div>
                  <div className="bg-[#00aa00]"></div>
                  <div className="bg-[#008800]"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#f5deb3]">Three Realm Types</h3>
              <p className="text-[#c9b88a] leading-relaxed">
                Mining realms for resources, creator realms for crafting recipes, and home realms for building your
                personalized virtual worlds.
              </p>
            </Card>

            <Card className="p-6 bg-[#2d2416] border-4 border-[#8b4513] shadow-[4px_4px_0_0_rgba(139,69,19,0.5)] hover:translate-y-[-2px] transition-transform">
              <div className="size-12 bg-[#4169e1] border-2 border-black mb-4 shadow-[2px_2px_0_0_rgba(0,0,0,0.8)]">
                <div className="w-full h-full grid grid-cols-3 grid-rows-3">
                  <div className="bg-[#1e3a8a]"></div>
                  <div className="bg-[#4169e1]"></div>
                  <div className="bg-[#1e3a8a]"></div>
                  <div className="bg-[#4169e1]"></div>
                  <div className="bg-[#6495ed]"></div>
                  <div className="bg-[#4169e1]"></div>
                  <div className="bg-[#1e3a8a]"></div>
                  <div className="bg-[#4169e1]"></div>
                  <div className="bg-[#1e3a8a]"></div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#f5deb3]">Real-World Anchoring</h3>
              <p className="text-[#c9b88a] leading-relaxed">
                All resources are mapped to Filecoin's decentralized storage network, ensuring authenticity, scarcity,
                and security.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20 border-t-4 border-[#8b4513]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f5deb3] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                Pioneering true user ownership
              </h2>
              <p className="text-[#c9b88a] mb-4 leading-relaxed">
                MineScape is a decentralized sandbox protocol that redefines virtual world-building. Drawing inspiration
                from Minecraft's revolutionary approach, we've built a platform where creators retain ownership and are
                fairly rewarded.
              </p>
              <p className="text-[#c9b88a] leading-relaxed">
                Operating without a native token and using a low-fee transaction model similar to OpenSea, MineScape
                ensures accessibility and sustainability while fostering an on-chain economy driven by collaboration.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center bg-[#2d2416] border-4 border-[#8b4513]">
                <div className="text-3xl font-bold text-[#00ff00] mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                  100%
                </div>
                <div className="text-sm text-[#c9b88a]">User-Owned</div>
              </Card>
              <Card className="p-6 text-center bg-[#2d2416] border-4 border-[#8b4513]">
                <div className="text-3xl font-bold text-[#00ff00] mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">3</div>
                <div className="text-sm text-[#c9b88a]">Realm Types</div>
              </Card>
              <Card className="p-6 text-center bg-[#2d2416] border-4 border-[#8b4513]">
                <div className="text-3xl font-bold text-[#00ff00] mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
                  10+
                </div>
                <div className="text-sm text-[#c9b88a]">Block Types</div>
              </Card>
              <Card className="p-6 text-center bg-[#2d2416] border-4 border-[#8b4513]">
                <div className="text-3xl font-bold text-[#00ff00] mb-2 drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">∞</div>
                <div className="text-sm text-[#c9b88a]">Possibilities</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="container mx-auto px-4 py-20 border-t-4 border-[#8b4513]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#f5deb3] drop-shadow-[2px_2px_0_rgba(0,0,0,0.8)]">
            Everyone plays a role
          </h2>
          <p className="text-center text-[#c9b88a] mb-12 max-w-2xl mx-auto">
            Whether you're a builder, creator, or miner, MineScape incentivizes collaboration
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
              <h3 className="text-xl font-semibold mb-3 text-[#f5deb3]">Builders</h3>
              <p className="text-[#c9b88a] leading-relaxed">
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
              <h3 className="text-xl font-semibold mb-3 text-[#f5deb3]">Creators</h3>
              <p className="text-[#c9b88a] leading-relaxed">
                Design new recipes and items, earning fees from usage and trades of your creations
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
              <h3 className="text-xl font-semibold mb-3 text-[#f5deb3]">Miners</h3>
              <p className="text-[#c9b88a] leading-relaxed">
                Filecoin node operators who provide realms and earn additional revenue through the protocol
              </p>
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
              <a href="https://blob.v0.app/lhpov.pdf" download="MineScape-Whitepaper.pdf">
                📥 Download Whitepaper
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="gap-2 text-base px-8 bg-[#5865f2] hover:bg-[#7289da] text-white font-bold border-2 border-black shadow-[4px_4px_0_0_rgba(0,0,0,0.8)] hover:shadow-[2px_2px_0_0_rgba(0,0,0,0.8)] transition-all"
            >
              <a href="https://discord.gg/minescape" target="_blank" rel="noopener noreferrer">
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
              <a href="https://minescape.xyz" className="hover:text-[#f5deb3] transition-colors">
                Website
              </a>
              <a href="mailto:contact@minescape.xyz" className="hover:text-[#f5deb3] transition-colors">
                Contact
              </a>
              <a
                href="https://twitter.com/minescape"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5deb3] transition-colors"
              >
                X (Twitter)
              </a>
              <a
                href="https://discord.gg/minescape"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#f5deb3] transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
          <div className="text-center text-sm text-[#c9b88a] mt-8">
            © 2025 MineScape. Built on Filecoin. Powered by decentralization.
          </div>
        </div>
      </footer>
    </div>
  )
}
