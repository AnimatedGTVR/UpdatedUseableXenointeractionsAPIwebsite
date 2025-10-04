"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function GamesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(100, 100, 100, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(100, 100, 100, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
              animation: "grid-move 20s linear infinite",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-widest text-gray-500">Our Games</p>
            <h1 className="text-7xl md:text-8xl font-light tracking-tight text-white leading-tight">Game Library</h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              Discover our collection of immersive gaming experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Games Section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">In Development</p>
            <h2 className="text-5xl md:text-6xl font-light text-black">Current Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                number: "1",
                title: "The Waking Soul",
                description: "A psychological horror experience that challenges reality",
                progress: 11,
                genre: "Horror",
                platforms: ["PC", "PlayStation", "Xbox"],
              },
              {
                number: "2",
                title: "Tropik",
                description: "Tropical adventure with mind-bending puzzles and community coding",
                progress: 3,
                genre: "Adventure",
                platforms: ["PC", "Mac", "Linux"],
              },
            ].map((game, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6"
              >
                <div className="text-8xl font-light text-gray-300">{game.number}</div>
                <h3 className="text-3xl font-light">{game.title}</h3>
                <p className="text-gray-600 leading-relaxed">{game.description}</p>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Development Progress</span>
                    <span>{game.progress}%</span>
                  </div>
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: `${game.progress}%` }} />
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-500">Genre: {game.genre}</p>
                  <p className="text-sm text-gray-500">Platforms: {game.platforms.join(", ")}</p>
                </div>

                <button className="inline-flex items-center gap-2 text-black hover:gap-4 transition-all duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-light leading-tight">More games coming soon</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Stay updated on our latest projects and be the first to experience our games
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
