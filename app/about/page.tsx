"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
            <p className="text-sm uppercase tracking-widest text-gray-500">About Us</p>
            <h1 className="text-7xl md:text-8xl font-light tracking-tight text-white leading-tight">
              Xeno Interactions
            </h1>
            <p className="text-2xl md:text-3xl text-gray-400 font-light max-w-3xl mx-auto leading-relaxed">
              Creating immersive gaming experiences through innovation and passion
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Our Team</p>
            <h2 className="text-5xl md:text-6xl font-light text-black">The People Behind Xeno</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            {[
              {
                number: "1",
                name: "Animated",
                role: "Co-CEO",
                description: "Game & Company Director leading strategic vision and innovation",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4baf8e7da557f1ac29dcb30dff9c1e67-JcCR3YTUHaA6XP0iorpPrZkHP6vSLa.jpg",
              },
              {
                number: "2",
                name: "Slugmaster",
                role: "Co-CEO",
                description: "Head of Gameplay & Visual Design bringing creative excellence",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3335-ZP8FNAGbPacBTmQ40SiGvimH279bri.jpg",
              },
              {
                number: "3",
                name: "Justin",
                role: "Third in Command",
                description: "Management & Operations Director, Head of Events coordinating all activities",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rm4DSX5aytCSlMBftXnknCxn3B8Fq1.png",
              },
              {
                number: "4",
                name: "Anemunt",
                role: "Second in Command",
                description: "Xeno Interactions Manager & Gameplay Systems Lead ensuring quality experiences",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled71_20250919224056-boz9YiY62ILTzu0TpBa643E7nUCGwG.png",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-6"
              >
                <div className="relative w-48 h-48 mx-auto mb-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-2xl border-2 border-gray-200"
                  />
                </div>
                <div className="text-8xl font-light text-gray-300">{member.number}</div>
                <h3 className="text-3xl font-light">{member.name}</h3>
                <p className="text-cyan-400">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Our Values</p>
            <h2 className="text-5xl md:text-6xl font-light">What Drives Us</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                number: "1",
                title: "Passion-Driven",
                description: "Every project is crafted with genuine love and dedication to interactive entertainment",
              },
              {
                number: "2",
                title: "Innovation First",
                description: "We push boundaries and explore new possibilities in gaming and interactive media",
              },
              {
                number: "3",
                title: "Community Focused",
                description:
                  "Our community is at the heart of everything we do, driving us to create better experiences",
              },
              {
                number: "4",
                title: "Quality Excellence",
                description: "We never compromise on quality, ensuring every release meets our high standards",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="text-6xl font-light text-gray-800">{value.number}</div>
                <h3 className="text-2xl font-light">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-5xl md:text-6xl font-light leading-tight">Join our journey</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our projects and be part of something extraordinary
            </p>
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full">
              View Projects
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
