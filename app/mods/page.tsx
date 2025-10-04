"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Search, Download, Star, User, Calendar, Tag, ArrowRight, AlertTriangle } from "lucide-react"

export default function ModsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const categories = ["All", "Gameplay", "Visual", "Audio", "Utility", "Experimental"]

  const mods = [
    {
      id: 1,
      name: "Enhanced Physics",
      description: "Improved physics simulation for more realistic interactions in VR environments.",
      category: "Gameplay",
      version: "2.1.0",
      downloads: 1250,
      rating: 4.8,
      author: "Anemunt",
      lastUpdated: "2024-01-15",
      tags: ["Physics", "Realism", "VR"],
    },
    {
      id: 2,
      name: "Neon UI Pack",
      description: "Futuristic neon-themed UI elements and HUD components for VR games.",
      category: "Visual",
      version: "1.5.2",
      downloads: 890,
      rating: 4.6,
      author: "Slugmaster",
      lastUpdated: "2024-01-10",
      tags: ["UI", "Neon", "Futuristic"],
    },
    {
      id: 3,
      name: "Spatial Audio Engine",
      description: "Advanced 3D audio processing for immersive soundscapes in virtual reality.",
      category: "Audio",
      version: "3.0.1",
      downloads: 2100,
      rating: 4.9,
      author: "Anemunt",
      lastUpdated: "2024-01-20",
      tags: ["Audio", "3D", "Immersive"],
    },
    {
      id: 4,
      name: "Debug Console Pro",
      description: "Professional debugging tools and console for VR development and testing.",
      category: "Utility",
      version: "1.8.0",
      downloads: 650,
      rating: 4.7,
      author: "Slugmaster",
      lastUpdated: "2024-01-08",
      tags: ["Debug", "Development", "Tools"],
    },
    {
      id: 5,
      name: "Quantum Shaders",
      description: "Experimental shader pack with quantum-inspired visual effects and materials.",
      category: "Experimental",
      version: "0.9.5",
      downloads: 420,
      rating: 4.3,
      author: "Anemunt",
      lastUpdated: "2024-01-12",
      tags: ["Shaders", "Experimental", "Quantum"],
    },
    {
      id: 6,
      name: "Hand Tracking Plus",
      description: "Enhanced hand tracking with gesture recognition and improved accuracy.",
      category: "Gameplay",
      version: "2.3.1",
      downloads: 1800,
      rating: 4.8,
      author: "Slugmaster",
      lastUpdated: "2024-01-18",
      tags: ["Hand Tracking", "Gestures", "Accuracy"],
    },
  ]

  const filteredMods = mods.filter((mod) => {
    const matchesCategory = selectedCategory === "All" || mod.category === selectedCategory
    const matchesSearch =
      mod.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mod.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mod.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden">
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

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6 mb-16"
          >
            <p className="text-sm uppercase tracking-widest text-gray-500">Community Content</p>
            <h1 className="text-6xl md:text-7xl font-light leading-tight">Mods Library</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Enhance your gaming experience with community-created modifications and tools
            </p>
          </motion.div>

          {/* Warning Notice */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-yellow-500/10 border border-yellow-500/30 rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-2">Important Notice</h3>
                <p className="text-yellow-200/80 text-sm leading-relaxed">
                  These mods are experimental and may affect game stability. Always backup your saves before
                  installation. Use at your own discretion and ensure compatibility with your setup. Xeno Interactions
                  is not responsible for issues caused by third-party modifications.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-16 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search mods..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-100 border border-gray-300 rounded-full text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mods Grid Section */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory + searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {filteredMods.map((mod, index) => (
                <motion.div
                  key={mod.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Mod Info */}
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-light group-hover:text-cyan-400 transition-colors">
                              {mod.name}
                            </h3>
                            <span className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm">
                              v{mod.version}
                            </span>
                          </div>
                          <p className="text-gray-400 leading-relaxed">{mod.description}</p>
                        </div>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {mod.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full text-sm flex items-center gap-1"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{mod.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{mod.lastUpdated}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Download className="w-4 h-4" />
                          <span>{mod.downloads.toLocaleString()} downloads</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span>{mod.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center">
                      <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 rounded-full flex items-center gap-2 whitespace-nowrap">
                        <Download className="w-5 h-5" />
                        Download Mod
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Results */}
          {filteredMods.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-light text-white mb-2">No mods found</h3>
              <p className="text-gray-400">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-light leading-tight">Want to create your own mods?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn about the Axo coding system and start building custom content for Tropik
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full inline-flex items-center gap-2">
              Learn About Axo
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
