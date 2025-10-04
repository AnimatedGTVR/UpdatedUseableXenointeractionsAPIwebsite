"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  Users,
  Settings,
  MessageSquare,
  Bell,
  Shield,
  LogOut,
  ChevronDown,
  Star,
  Trophy,
  Zap,
  Code2,
  FileCode,
  Wrench,
  ArrowRight,
  Menu,
  Code,
  AlertTriangle,
} from "lucide-react"
import { useState, useEffect } from "react"
import React from "react" // Import React for React.useState and React.useEffect

const translations = {
  en: {
    xenoInteractions: "Xeno Interactions",
    xenoTech: "Xeno Tech",
    subtitle: "Creating immersive gaming experiences",
    techSubtitle: "Advanced development tools and systems",
    description:
      "We're building the future of interactive entertainment with cutting-edge technology and innovative gameplay.",
    techDescription: "Empowering developers with powerful tools and frameworks for game development.",
    games: "Games",
    theWakingSoul: "The Waking Soul",
    tropik: "Tropik",
    wakingSoulDesc: "A psychological horror experience that challenges reality",
    tropikDesc: "Tropical adventure with mind-bending puzzles and community coding",
    axo: "Axo",
    axoDesc: "Community coding system for Tropik",
    axoFull:
      "Axo is a powerful community coding system integrated into Tropik, supporting Lua and C# scripting. Designed specifically for Unity developers, Axo enables players to create custom game modes, mechanics, and experiences.",
    home: "Home",
    community: "Community",
    friends: "Friends",
    notifications: "Notifications",
    login: "Login",
    logout: "Logout",
    profile: "Profile",
    privacySafety: "Privacy & Safety",
    email: "Email",
    password: "Password",
    signIn: "Sign In",
    signUp: "Sign Up",
    createAccount: "Create Account",
    welcomeBack: "Welcome back!",
    joinXeno: "Join Xeno",
    settings: "Settings",
    general: "General",
    audio: "Audio",
    appearance: "Appearance",
    privacy: "Privacy",
    advanced: "Advanced",
    account: "Account",
    security: "Security",
    editProfile: "Edit Profile",
    username: "Username",
    displayName: "Display Name",
    bio: "Bio",
    location: "Location",
    website: "Website",
    saveChanges: "Save Changes",
    xenoCode: "XENO Code",
    xenoCodeDesc: "Your unique code for cross-game authentication",
    copyCode: "Copy Code",
    regenerateCode: "Regenerate Code",
    searchFriends: "Search friends...",
    online: "Online",
    offline: "Offline",
    playing: "Playing",
    darkMode: "Dark Mode",
    darkModeDesc: "Use dark theme across the platform",
    autoLogin: "Auto Login",
    autoLoginDesc: "Automatically sign in with XENO code",
    showOnlineStatus: "Show Online Status",
    showOnlineDesc: "Let friends see when you're online",
    language: "Language",
    masterVolume: "Master Volume",
    soundEffects: "Sound Effects",
    music: "Music",
    voiceChat: "Voice Chat",
    communityTitle: "Community Hub",
    communityDesc: "Connect with other players and share your experiences",
    forums: "Forums",
    events: "Events",
    leaderboards: "Leaderboards",
    notificationsTitle: "Notifications",
    noNotifications: "No new notifications",
    markAllRead: "Mark all as read",
    privacyTitle: "Privacy & Safety",
    privacyDesc: "Your privacy and safety are our top priorities",
    dataCollection: "Data Collection",
    dataCollectionDesc: "We collect minimal data necessary for service functionality",
    accountSecurity: "Account Security",
    accountSecurityDesc: "Enable two-factor authentication and strong passwords",
    contentModeration: "Content Moderation",
    contentModerationDesc: "Report inappropriate content and behavior",
    parentalControls: "Parental Controls",
    parentalControlsDesc: "Manage content access and communication settings",
    getStarted: "Get Started",
    learnMore: "Learn More",
    viewProject: "View Project",
    inDevelopment: "In Development",
    comingSoon: "Coming Soon",
    axoScripting: "Axo Scripting", // Added for the new page
  },
}

export default function XenoInteractionsWebsite() {
  // Renamed function to avoid conflict
  const [mode, setMode] = useState<"interactions" | "tech">("interactions")
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [showFriendsModal, setShowFriendsModal] = useState(false)
  const [showUserDropdown, setShowUserDropdown] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [language, setLanguage] = useState("en")

  const [user, setUser] = useState({
    username: "Player123",
    displayName: "John Doe",
    email: "john@example.com",
    bio: "Gaming enthusiast and developer",
    location: "San Francisco, CA",
    website: "https://johndoe.dev",
    xenoCode: "XENO-2024-ABC123",
    avatar: "https://images.unsplash.com/photo-153571387500-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
  })

  const [settings, setSettings] = useState({
    darkMode: true,
    autoLogin: false,
    showOnlineStatus: true,
    masterVolume: 80,
    soundEffects: 70,
    music: 60,
    voiceChat: 90,
    language: "en",
  })

  const t = (key: string) => {
    return (
      translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] ||
      translations.en[key as keyof typeof translations.en] ||
      key
    )
  }

  useEffect(() => {
    const savedSettings = localStorage.getItem("xenoSettings")
    const savedUser = localStorage.getItem("xenoUser")
    const savedAuth = localStorage.getItem("xenoAuth")

    if (savedSettings) {
      const parsed = JSON.parse(savedSettings)
      setSettings(parsed)
      setLanguage(parsed.language || "en")
    }
    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    if (savedAuth) {
      setIsLoggedIn(JSON.parse(savedAuth))
    }
  }, [])

  const saveSettings = (newSettings: typeof settings) => {
    setSettings(newSettings)
    setLanguage(newSettings.language)
    localStorage.setItem("xenoSettings", JSON.stringify(newSettings))
  }

  const saveUser = (newUser: typeof user) => {
    setUser(newUser)
    localStorage.setItem("xenoUser", JSON.stringify(newUser))
  }

  const handleLogin = (email: string, password: string) => {
    setIsLoggedIn(true)
    localStorage.setItem("xenoAuth", "true")
    setShowLoginModal(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    localStorage.removeItem("xenoAuth")
    setShowUserDropdown(false)
  }

  const generateXenoCode = () => {
    const newCode = `XENO-${new Date().getFullYear()}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`
    const newUser = { ...user, xenoCode: newCode }
    saveUser(newUser)
  }

  const copyXenoCode = () => {
    navigator.clipboard.writeText(user.xenoCode)
  }

  const toggleMode = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setMode(mode === "interactions" ? "tech" : "interactions")
      setTimeout(() => setIsTransitioning(false), 300)
    }, 300)
  }

  const HomePage = () => (
    <div className="min-h-screen">
      {/* Hero Section - Modern, eye-catching design */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />

          {/* Animated grid */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(6, 182, 212, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(6, 182, 212, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
              animation: "grid-move-slow 30s linear infinite",
            }}
          />

          {/* Floating orbs for depth */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl floating-orb" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl floating-orb"
            style={{ animationDelay: "5s" }}
          />
        </div>

        <div className="relative z-10 text-center px-6 max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-12"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-cyan-400/20 blur-2xl rounded-full" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f1v8RdzRfbDqC6zYwkeC72RqeYggnK.png"
                alt="Xeno Logo"
                className="relative w-24 h-24 md:w-32 md:h-32 mx-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8 mb-16"
          >
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tighter text-white leading-[0.9] mb-6"
              >
                {mode === "interactions" ? (
                  <>
                    <span className="block">IMMERSIVE</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                      GAMING
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block">POWERFUL</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                      TOOLS
                    </span>
                  </>
                )}
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="max-w-3xl mx-auto"
            >
              <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed">
                {mode === "interactions" ? t("subtitle") : t("techSubtitle")}
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button
              onClick={() => setCurrentPage("games")}
              className="group relative bg-white text-black hover:bg-gray-100 px-10 py-7 text-lg rounded-full font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
            >
              <span className="relative z-10">{t("getStarted")}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            </Button>

            <button
              onClick={toggleMode}
              className="glass-card flex items-center gap-4 px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <span
                className={`text-sm font-medium transition-colors duration-300 ${mode === "interactions" ? "text-cyan-400" : "text-gray-400"}`}
              >
                Interactions
              </span>
              <div className="relative w-12 h-6 bg-gray-800/50 rounded-full border border-gray-700">
                <motion.div
                  className="absolute top-0.5 w-5 h-5 rounded-full shadow-lg"
                  style={{
                    background:
                      mode === "interactions"
                        ? "linear-gradient(135deg, #06b6d4, #3b82f6)"
                        : "linear-gradient(135deg, #a855f7, #ec4899)",
                  }}
                  animate={{ left: mode === "interactions" ? "2px" : "26px" }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </div>
              <span
                className={`text-sm font-medium transition-colors duration-300 ${mode === "tech" ? "text-purple-400" : "text-gray-400"}`}
              >
                Tech
              </span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-20 flex flex-wrap items-center justify-center gap-4"
          >
            {mode === "interactions" ? (
              <>
                <div className="glass-card px-6 py-3 rounded-full text-sm text-gray-300 border border-cyan-400/20">
                  <span className="text-cyan-400 mr-2">●</span>
                  Narrative-Driven
                </div>
                <div className="glass-card px-6 py-3 rounded-full text-sm text-gray-300 border border-cyan-400/20">
                  <span className="text-cyan-400 mr-2">●</span>
                  Immersive Worlds
                </div>
                <div className="glass-card px-6 py-3 rounded-full text-sm text-gray-300 border border-cyan-400/20">
                  <span className="text-cyan-400 mr-2">●</span>
                  Beta Access
                </div>
              </>
            ) : (
              <>
                <div className="glass-card px-6 py-3 rounded-full text-sm text-gray-300 border border-purple-400/20">
                  <span className="text-purple-400 mr-2">●</span>
                  Lua & C# Support
                </div>
                <div className="glass-card px-6 py-3 rounded-full text-sm text-gray-300 border border-purple-400/20">
                  <span className="text-purple-400 mr-2">●</span>
                  Unity Integration
                </div>
                <div className="glass-card px-6 py-3 rounded-full text-sm text-gray-300 border border-purple-400/20">
                  <span className="text-purple-400 mr-2">●</span>
                  Open Source
                </div>
              </>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex items-start justify-center p-2 backdrop-blur-sm bg-black/20">
              <motion.div
                className="w-1.5 h-3 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
              />
            </div>
            <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Projects Section - Numbered layout inspired by Avencio */}
      <section className="py-32 px-6 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Our Projects</p>
            <h2 className="text-5xl md:text-6xl font-light text-black">
              {mode === "interactions" ? "Games in Development" : "Development Tools"}
            </h2>
          </motion.div>

          {mode === "interactions" ? (
            <div className="grid md:grid-cols-2 gap-16">
              {/* Project 1 - The Waking Soul */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <div className="text-8xl font-light text-gray-300">1</div>
                <h3 className="text-3xl font-light">{t("theWakingSoul")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("wakingSoulDesc")}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Development Progress</span>
                    <span>11%</span>
                  </div>
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "11%" }} />
                  </div>
                </div>
                <button
                  onClick={() => setCurrentPage("waking-soul")}
                  className="inline-flex items-center gap-2 text-black hover:gap-4 transition-all duration-300"
                >
                  {t("viewProject")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              {/* Project 2 - Tropik */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="text-8xl font-light text-gray-300">2</div>
                <h3 className="text-3xl font-light">{t("tropik")}</h3>
                <p className="text-gray-600 leading-relaxed">{t("tropikDesc")}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Development Progress</span>
                    <span>3%</span>
                  </div>
                  <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-black rounded-full" style={{ width: "3%" }} />
                  </div>
                </div>
                <button
                  onClick={() => setCurrentPage("tropik")}
                  className="inline-flex items-center gap-2 text-black hover:gap-4 transition-all duration-300"
                >
                  {t("viewProject")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <div className="text-6xl font-light text-gray-300">1</div>
                <h3 className="text-2xl font-light">Development SDKs</h3>
                <p className="text-gray-600 leading-relaxed">
                  Advanced frameworks and tools for game development with Unity integration
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <div className="text-6xl font-light text-gray-300">2</div>
                <h3 className="text-2xl font-light">Axo Coding System</h3>
                <p className="text-gray-600 leading-relaxed">
                  Community-driven development platform supporting C# for custom content creation
                </p>
                <button
                  onClick={() => setCurrentPage("axo")}
                  className="inline-flex items-center gap-2 text-black hover:gap-4 transition-all duration-300"
                >
                  {t("learnMore")}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-4"
              >
                <div className="text-6xl font-light text-gray-300">3</div>
                <h3 className="text-2xl font-light">Unity Tools</h3>
                <p className="text-gray-600 leading-relaxed">
                  Seamless integration with Unity Engine for professional game development workflows
                </p>
              </motion.div>
            </div>
          )}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20 text-center"
          >
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Our Team</p>
            <h2 className="text-5xl md:text-6xl font-light">The People Behind Xeno</h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                name: "Animated",
                role: "Co-CEO",
                specialty: "Game & Company Director",
                avatar:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4baf8e7da557f1ac29dcb30dff9c1e67-JcCR3YTUHaA6XP0iorpPrZkHP6vSLa.jpg",
              },
              {
                name: "Slugmaster",
                role: "Co-CEO",
                specialty: "Head of Gameplay & Visual Design",
                avatar:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_3335-ZP8FNAGbPacBTmQ40SiGvimH279bri.jpg",
              },
              {
                name: "Justin",
                role: "Third in Command",
                specialty: "Management & Operations Director, Head of Events",
                avatar:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rm4DSX5aytCSlMBftXnknCxn3B8Fq1.png",
              },
              {
                name: "Anemunt",
                role: "Second in Command",
                specialty: "Xeno Interactions Manager & Gameplay Systems Lead",
                avatar:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled71_20250919224056-boz9YiY62ILTzu0TpBa643E7nUCGwG.png",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="space-y-4"
              >
                <div className="aspect-square bg-gray-900 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-light">{member.name}</h3>
                <p className="text-cyan-400">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.specialty}</p>
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
            <h2 className="text-5xl md:text-6xl font-light leading-tight">Ready to join the adventure?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated on our latest projects and be the first to experience our games
            </p>
            <Button
              onClick={() => setShowLoginModal(true)}
              className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg rounded-full"
            >
              {t("getStarted")}
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )

  const WakingSoulPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => setCurrentPage("home")}
          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 mb-12"
        >
          ← Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-light text-white mb-2">{t("theWakingSoul")}</h1>
                <p className="text-xl text-gray-400">{t("wakingSoulDesc")}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="px-4 py-2 bg-red-500/10 text-red-400 rounded-full text-sm border border-red-500/20">
                Horror
              </span>
              <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20">
                Psychological
              </span>
              <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20">
                Single Player
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Development Progress</span>
              <span className="text-cyan-400">11%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "11%" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Story & Design", desc: "Core narrative and game mechanics in development" },
              { title: "Art & Audio", desc: "Concept art and atmospheric sound design underway" },
              { title: "Programming", desc: "Core systems and gameplay mechanics being built" },
              { title: "Testing", desc: "Early prototyping and concept validation" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-6"
              >
                <h3 className="text-lg font-medium text-cyan-400 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8"
          >
            <h2 className="text-2xl font-light text-white mb-4">About The Game</h2>
            <p className="text-gray-400 leading-relaxed">
              The Waking Soul is a psychological horror experience that blurs the line between reality and nightmare.
              Players will navigate through a haunting narrative where every choice matters and nothing is as it seems.
              With atmospheric environments, mind-bending puzzles, and a story that challenges perception, The Waking
              Soul promises to deliver an unforgettable horror experience.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )

  const TropikPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => setCurrentPage("home")}
          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 mb-12"
        >
          ← Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-light text-white mb-2">{t("tropik")}</h1>
                <p className="text-xl text-gray-400">{t("tropikDesc")}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <span className="px-4 py-2 bg-green-500/10 text-green-400 rounded-full text-sm border border-green-500/20">
                Adventure
              </span>
              <span className="px-4 py-2 bg-yellow-500/10 text-yellow-400 rounded-full text-sm border border-yellow-500/20">
                Puzzle
              </span>
              <span className="px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm border border-cyan-500/20">
                Multiplayer
              </span>
              <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20">
                Moddable
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Development Progress</span>
              <span className="text-cyan-400">3%</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "3%" }}
                transition={{ duration: 1, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
              />
            </div>
          </div>

          {/* Axo System Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-xl p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <FileCode className="w-8 h-8 text-purple-400" />
              <h2 className="text-2xl font-light text-purple-400">{t("axo")} Community Coding System</h2>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">{t("axoFull")}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h4 className="text-purple-400 font-medium mb-2 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Lua Support
                </h4>
                <p className="text-gray-400 text-sm">Lightweight scripting for quick prototypes and simple mods</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <h4 className="text-purple-400 font-medium mb-2 flex items-center gap-2">
                  <FileCode className="w-5 h-5" />
                  C# Support
                </h4>
                <p className="text-gray-400 text-sm">Full Unity integration for advanced game mechanics and systems</p>
              </div>
            </div>

            <button
              onClick={() => setCurrentPage("axo")}
              className="mt-6 inline-flex items-center gap-2 text-purple-400 hover:gap-4 transition-all duration-300"
            >
              Learn more about Axo
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8"
          >
            <h2 className="text-2xl font-light text-white mb-4">About The Game</h2>
            <p className="text-gray-400 leading-relaxed">
              Tropik is a vibrant tropical adventure that combines exploration, puzzle-solving, and community
              creativity. With the integrated Axo coding system, players can create and share their own content, making
              every playthrough unique. Whether you're solving intricate puzzles or building custom game modes, Tropik
              offers endless possibilities for creativity and fun.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )

  const AxoPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => setCurrentPage("home")}
          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2 mb-12"
        >
          ← Back to Home
        </button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-12"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-500 rounded-2xl flex items-center justify-center">
                <FileCode className="w-10 h-10 text-white" />
              </div>
              <div>
                <h1 className="text-5xl font-light text-white mb-2">{t("axo")} Coding System</h1>
                <p className="text-xl text-gray-400">Community-driven game development for Tropik</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8"
          >
            <h2 className="text-2xl font-light text-white mb-4">What is Axo?</h2>
            <p className="text-gray-400 leading-relaxed mb-4">{t("axoFull")}</p>
            <p className="text-gray-400 leading-relaxed">
              Axo provides a safe, sandboxed environment for community-created content, with built-in moderation tools
              and version control to ensure quality and security.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/20 rounded-xl p-8"
            >
              <Code2 className="w-12 h-12 text-blue-400 mb-4" />
              <h3 className="text-2xl font-light text-blue-400 mb-4">Lua Scripting</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Perfect for beginners and quick prototypes. Lua offers a simple, lightweight scripting language ideal
                for creating basic mods and game modes.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Easy to learn syntax</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Fast iteration and testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Great for simple mechanics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Community tutorials available</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-xl p-8"
            >
              <FileCode className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-light text-purple-400 mb-4">C# Integration</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Full Unity Engine integration for advanced developers. Create complex systems, custom mechanics, and
                professional-grade content.
              </p>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Complete Unity API access</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Advanced gameplay systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Professional development tools</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400 mt-1">•</span>
                  <span>Performance optimization</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-gray-900/30 border border-gray-800 rounded-xl p-8"
          >
            <h3 className="text-2xl font-light text-white mb-6">Features</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Wrench, title: "Built-in Editor", desc: "In-game code editor with syntax highlighting" },
                { icon: Users, title: "Community Hub", desc: "Share and discover community creations" },
                { icon: Shield, title: "Safe Sandbox", desc: "Secure execution environment" },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <feature.icon className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-gray-300 mb-1">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )

  const PrivacySafetyPage = () => {
    const [activeSection, setActiveSection] = React.useState("overview")

    const sections = [
      { id: "overview", label: "Overview" },
      { id: "data", label: "Data Collection" },
      { id: "security", label: "Account Security" },
      { id: "moderation", label: "Content Moderation" },
      { id: "parental", label: "Parental Controls" },
      { id: "rights", label: "Data Rights" },
    ]

    return (
      <div className="min-h-screen">
        <div className="sticky top-0 z-40 bg-black/95 backdrop-blur-md border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-light text-white">Privacy & Safety</h2>
              <div className="flex items-center gap-2 overflow-x-auto">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id)
                      document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`px-4 py-2 rounded-lg text-sm whitespace-nowrap transition-all ${
                      activeSection === section.id
                        ? "bg-cyan-400 text-black font-medium"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    }`}
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section id="overview" className="relative py-32 px-6 overflow-hidden">
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

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-sm uppercase tracking-widest text-gray-500">Legal & Safety</p>
              <h1 className="text-6xl md:text-7xl font-light text-white leading-tight">Privacy & Safety</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Your privacy and safety are fundamental to everything we do at Xeno Interactions
              </p>
            </motion.div>
          </div>
        </section>

        {/* Data Collection Section */}
        <section id="data" className="py-32 px-6 bg-white text-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="text-8xl font-light text-gray-300">1</div>
                <h2 className="text-4xl md:text-5xl font-light">Data Collection & Usage</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We believe in transparency about what data we collect and how we use it
                </p>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-light">What We Collect</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      {
                        title: "Account Information",
                        items: [
                          "Email address and username",
                          "Profile information you provide",
                          "Account preferences and settings",
                          "XENO authentication codes",
                        ],
                      },
                      {
                        title: "Game Data",
                        items: [
                          "Game progress and achievements",
                          "In-game statistics and performance",
                          "Custom content and mods created",
                          "Multiplayer interactions and chat",
                        ],
                      },
                      {
                        title: "Technical Data",
                        items: [
                          "Device and hardware information",
                          "Operating system and version",
                          "Performance metrics and crash reports",
                          "Network and connection data",
                        ],
                      },
                      {
                        title: "Usage Analytics",
                        items: [
                          "Feature usage and engagement",
                          "Session duration and frequency",
                          "Navigation patterns",
                          "Error logs and diagnostics",
                        ],
                      },
                    ].map((category, index) => (
                      <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                        <h4 className="font-medium text-lg mb-4">{category.title}</h4>
                        <ul className="space-y-2">
                          {category.items.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                              <span className="text-black mt-1">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-100 border border-gray-200 rounded-xl p-8">
                  <h4 className="font-medium text-lg mb-3">How We Use Your Data</h4>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      <strong className="text-black">Service Delivery:</strong> To provide, maintain, and improve our
                      games and services
                    </p>
                    <p>
                      <strong className="text-black">Personalization:</strong> To customize your experience and provide
                      relevant content
                    </p>
                    <p>
                      <strong className="text-black">Communication:</strong> To send updates, notifications, and respond
                      to your inquiries
                    </p>
                    <p>
                      <strong className="text-black">Security:</strong> To protect against fraud, abuse, and
                      unauthorized access
                    </p>
                    <p>
                      <strong className="text-black">Analytics:</strong> To understand usage patterns and improve our
                      products
                    </p>
                  </div>
                </div>

                <div className="bg-black text-white rounded-xl p-8">
                  <h4 className="font-medium text-lg mb-3 text-cyan-400">What We Never Do</h4>
                  <ul className="space-y-2">
                    {[
                      "Sell your personal data to third parties",
                      "Share your data without your explicit consent",
                      "Use your data for purposes not disclosed to you",
                      "Access your private messages or content without legal requirement",
                      "Track you across other websites or services",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300">
                        <span className="text-cyan-400 mt-1">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Account Security Section */}
        <section id="security" className="py-32 px-6 bg-black text-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="text-8xl font-light text-gray-800">2</div>
                <h2 className="text-4xl md:text-5xl font-light">Account Security</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Multiple layers of protection to keep your account secure
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Two-Factor Authentication",
                    desc: "Add an extra layer of security with 2FA using authenticator apps or SMS codes",
                    features: [
                      "Support for Google Authenticator, Authy, and more",
                      "Backup codes for account recovery",
                      "Trusted device management",
                      "Login notifications and alerts",
                    ],
                  },
                  {
                    title: "Password Security",
                    desc: "Strong password requirements and secure password management",
                    features: [
                      "Minimum 12 characters with complexity requirements",
                      "Password strength indicator",
                      "Secure password reset process",
                      "Password breach monitoring",
                    ],
                  },
                  {
                    title: "Session Management",
                    desc: "Monitor and control active sessions across all your devices",
                    features: [
                      "View all active login sessions",
                      "Remote logout from any device",
                      "Session timeout after inactivity",
                      "Suspicious activity detection",
                    ],
                  },
                  {
                    title: "Login Protection",
                    desc: "Advanced security measures to prevent unauthorized access",
                    features: [
                      "Rate limiting on login attempts",
                      "IP-based access controls",
                      "Device fingerprinting",
                      "Automatic account lockout after failed attempts",
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
                  >
                    <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                    <p className="text-gray-400 mb-6">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-light mb-4">XENO Code Security</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Your XENO code is a unique identifier that allows you to authenticate across all Xeno games and
                  services. It's encrypted, regularly rotated, and never shared with third parties. You can regenerate
                  your code at any time from your account settings.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    { label: "Encrypted Storage", desc: "AES-256 encryption" },
                    { label: "Regular Rotation", desc: "Auto-refresh every 90 days" },
                    { label: "Instant Revocation", desc: "Regenerate anytime" },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                      <p className="font-medium text-cyan-400 mb-1">{item.label}</p>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Moderation Section */}
        <section id="moderation" className="py-32 px-6 bg-white text-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="text-8xl font-light text-gray-300">3</div>
                <h2 className="text-4xl md:text-5xl font-light">Content Moderation</h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Creating a safe and welcoming community for all players
                </p>
              </div>

              <div className="space-y-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      title: "Report System",
                      desc: "Easy-to-use reporting tools for inappropriate content, harassment, or violations",
                      icon: "🚨",
                    },
                    {
                      title: "24/7 Moderation",
                      desc: "Dedicated team reviewing reports around the clock to maintain community standards",
                      icon: "👥",
                    },
                    {
                      title: "AI Protection",
                      desc: "Automated systems detect and filter harmful content before it reaches players",
                      icon: "🤖",
                    },
                  ].map((item, index) => (
                    <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
                      <div className="text-4xl mb-4">{item.icon}</div>
                      <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-100 border border-gray-200 rounded-xl p-8">
                  <h3 className="text-2xl font-light mb-6">Community Guidelines</h3>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Respect Others",
                        desc: "Treat all community members with respect. No harassment, hate speech, or discrimination.",
                      },
                      {
                        title: "No Cheating",
                        desc: "Use of hacks, exploits, or unauthorized modifications is strictly prohibited.",
                      },
                      {
                        title: "Appropriate Content",
                        desc: "Keep content family-friendly. No explicit, violent, or disturbing material.",
                      },
                      {
                        title: "Privacy Protection",
                        desc: "Don't share personal information of yourself or others without consent.",
                      },
                      {
                        title: "Fair Play",
                        desc: "Play fairly and don't engage in griefing, trolling, or disruptive behavior.",
                      },
                      {
                        title: "Intellectual Property",
                        desc: "Respect copyrights and trademarks. Don't use unauthorized content.",
                      },
                    ].map((rule, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-medium">
                          {index + 1}
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">{rule.title}</h4>
                          <p className="text-gray-600 text-sm">{rule.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="font-medium text-lg mb-4">Enforcement Actions</h4>
                    <ul className="space-y-3 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-black mt-1">1.</span>
                        <span>
                          <strong className="text-black">Warning:</strong> First-time minor violations receive a warning
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-black mt-1">2.</span>
                        <span>
                          <strong className="text-black">Temporary Suspension:</strong> Repeated or moderate violations
                          result in temporary bans
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-black mt-1">3.</span>
                        <span>
                          <strong className="text-black">Permanent Ban:</strong> Severe or repeated violations lead to
                          permanent account termination
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h4 className="font-medium text-lg mb-4">Appeal Process</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      If you believe a moderation action was taken in error, you can appeal through our support system.
                    </p>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-black mt-1">•</span>
                        <span>Submit appeal within 30 days</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-black mt-1">•</span>
                        <span>Review by senior moderation team</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-black mt-1">•</span>
                        <span>Response within 5 business days</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Parental Controls Section */}
        <section id="parental" className="py-32 px-6 bg-black text-white">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="text-8xl font-light text-gray-800">4</div>
                <h2 className="text-4xl md:text-5xl font-light">Parental Controls</h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  Tools to help parents manage their children's gaming experience
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Content Filters",
                    desc: "Control what content is accessible based on age ratings and categories",
                    features: [
                      "Age-appropriate content filtering",
                      "Custom content restrictions",
                      "Mod and user-generated content controls",
                      "Chat and communication filters",
                    ],
                  },
                  {
                    title: "Communication Management",
                    desc: "Manage who can communicate with your child and how",
                    features: [
                      "Friend request approval system",
                      "Whitelist/blacklist for contacts",
                      "Voice and text chat restrictions",
                      "Block strangers from messaging",
                    ],
                  },
                  {
                    title: "Play Time Limits",
                    desc: "Set healthy boundaries for gaming sessions",
                    features: [
                      "Daily and weekly time limits",
                      "Scheduled play times",
                      "Break reminders",
                      "Bedtime enforcement",
                    ],
                  },
                  {
                    title: "Activity Monitoring",
                    desc: "Stay informed about your child's gaming activity",
                    features: [
                      "Detailed activity reports",
                      "Friend list monitoring",
                      "Purchase history and spending limits",
                      "Real-time notifications",
                    ],
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-8"
                  >
                    <h3 className="text-2xl font-light mb-3">{item.title}</h3>
                    <p className="text-gray-400 mb-6">{item.desc}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                          <span className="text-cyan-400 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-xl p-8">
                <h3 className="text-2xl font-light mb-4">Setting Up Parental Controls</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { step: "1", title: "Create Account", desc: "Set up a parent account" },
                    { step: "2", title: "Link Child", desc: "Connect child's account" },
                    { step: "3", title: "Configure", desc: "Set restrictions and limits" },
                    { step: "4", title: "Monitor", desc: "Review activity reports" },
                  ].map((item, i) => (
                    <div key={i} className="text-center">
                      <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-3">
                        {item.step}
                      </div>
                      <h4 className="font-medium mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Data Rights Section */}
        <section id="rights" className="py-32 px-6 bg-white text-black">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="text-8xl font-light text-gray-300">5</div>
                <h2 className="text-4xl md:text-5xl font-light">Your Data Rights</h2>
                <p className="text-xl text-gray-600 leading-relaxed">You have full control over your personal data</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: "Access Your Data",
                    desc: "Request a complete copy of all data we have about you",
                    action: "Download your data archive anytime from account settings",
                  },
                  {
                    title: "Correct Your Data",
                    desc: "Update or correct any inaccurate personal information",
                    action: "Edit your profile and account information directly",
                  },
                  {
                    title: "Delete Your Data",
                    desc: "Request permanent deletion of your account and associated data",
                    action: "Account deletion is processed within 30 days",
                  },
                  {
                    title: "Export Your Data",
                    desc: "Download your data in a portable, machine-readable format",
                    action: "Export includes all game progress, settings, and content",
                  },
                  {
                    title: "Restrict Processing",
                    desc: "Limit how we use your data while keeping your account active",
                    action: "Configure data processing preferences in settings",
                  },
                  {
                    title: "Object to Processing",
                    desc: "Opt out of specific data processing activities",
                    action: "Manage consent preferences for analytics and marketing",
                  },
                ].map((right, index) => (
                  <div key={index} className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                    <h3 className="text-xl font-medium mb-3">{right.title}</h3>
                    <p className="text-gray-600 mb-4">{right.desc}</p>
                    <p className="text-sm text-gray-500 italic">{right.action}</p>
                  </div>
                ))}
              </div>

              <div className="bg-black text-white rounded-xl p-8">
                <h3 className="text-2xl font-light mb-4">GDPR & CCPA Compliance</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We comply with the General Data Protection Regulation (GDPR) and California Consumer Privacy Act
                  (CCPA), ensuring your data rights are protected regardless of your location.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {[
                    "Right to be informed",
                    "Right to access",
                    "Right to rectification",
                    "Right to erasure",
                    "Right to restrict processing",
                    "Right to data portability",
                  ].map((right, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                      <span className="text-cyan-400">✓</span>
                      <span>{right}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact & Support Section */}
        <section className="py-32 px-6 bg-black text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-light">Questions or Concerns?</h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Our privacy and safety team is here to help. Contact us anytime with questions about your data, privacy,
                or security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-lg rounded-full">
                  Contact Support
                </Button>
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg rounded-full">
                  Privacy Policy
                </Button>
              </div>
              <p className="text-gray-500 text-sm">Last updated: January 2024 • Email: privacy@xenointeractions.com</p>
            </motion.div>
          </div>
        </section>
      </div>
    )
  }

  const GamesPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Our Games</p>
          <h1 className="text-6xl font-light text-white mb-6">Explore Our Projects</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the immersive gaming experiences we're creating
          </p>
        </motion.div>

        <div className="space-y-12">
          {[
            {
              title: t("theWakingSoul"),
              desc: t("wakingSoulDesc"),
              progress: 11,
              icon: Zap,
              gradient: "from-cyan-400 to-blue-500",
              tags: ["Horror", "Psychological", "Single Player"],
              page: "waking-soul",
            },
            {
              title: t("tropik"),
              desc: t("tropikDesc"),
              progress: 3,
              icon: Trophy,
              gradient: "from-green-400 to-emerald-500",
              tags: ["Adventure", "Puzzle", "Multiplayer", "Moddable"],
              page: "tropik",
            },
          ].map((game, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              onClick={() => setCurrentPage(game.page)}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start gap-6">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${game.gradient} rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  <game.icon className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-light text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {game.title}
                  </h2>
                  <p className="text-gray-400 mb-4 leading-relaxed">{game.desc}</p>
                  <div className="flex gap-2 mb-6">
                    {game.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>Development Progress</span>
                      <span className="text-cyan-400">{game.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${game.gradient} rounded-full`}
                        style={{ width: `${game.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const CommunityPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">Community</p>
          <h1 className="text-6xl font-light text-white mb-6">{t("communityTitle")}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">{t("communityDesc")}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: MessageSquare, page: "community", label: "Community" }, // Added page prop
            { icon: Star, page: "events", label: "Events" }, // Assuming 'events' is a valid page
            { icon: Trophy, page: "leaderboards", label: "Leaderboards" }, // Assuming 'leaderboards' is a valid page
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setCurrentPage(item.page)} // Use item.page for navigation
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-8 hover:border-cyan-400/30 transition-all duration-300"
            >
              <item.icon className="w-12 h-12 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-light text-white mb-3">{item.label}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  const NotificationsPage = () => (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-light text-white mb-12">{t("notificationsTitle")}</h1>
          <div className="bg-gray-900/30 border border-gray-800 rounded-2xl p-12">
            <Bell className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400">{t("noNotifications")}</p>
          </div>
        </motion.div>
      </div>
    </div>
  )

  const AxoScriptingPage = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-black text-white"
    >
      {/* Animated Grid Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />
      </div>

      <div className="relative pt-32 pb-20">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-6 mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full mb-6">
              <span className="text-cyan-400 text-sm font-light">Axo Scripting System</span>
            </div>
            <h1 className="text-7xl md:text-8xl font-light mb-6 tracking-tight">
              Build Your
              <br />
              <span className="text-cyan-400">Own Mods</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
              Create custom gameplay experiences with our powerful Axo scripting system using C# for Unity integration.
            </p>
          </motion.div>
        </div>

        {/* IMPORTANT WARNING SECTION */}
        <div className="max-w-7xl mx-auto px-6 mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-red-500/10 border-2 border-red-500 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-3xl font-light text-red-500 mb-4">Important Warning - Alpha Status</h2>
                <p className="text-lg text-white mb-6 leading-relaxed">
                  Axo is currently in <span className="font-semibold text-red-400">ALPHA</span>. We ONLY allow specific
                  sections of the game to be modded. Attempting to mod the full game will result in the following
                  punishments:
                </p>
              </div>
            </div>

            <div className="space-y-4 ml-12">
              <div className="flex items-start gap-4 bg-black/50 p-4 rounded-xl border border-red-500/30">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-light text-white mb-1">First Offense</h3>
                  <p className="text-gray-400">Official Warning - Your account will be flagged</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-black/50 p-4 rounded-xl border border-red-500/30">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-light text-white mb-1">Second Offense</h3>
                  <p className="text-gray-400">Suspension from Voice Chat and Rooms</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-black/50 p-4 rounded-xl border border-red-500/30">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-light text-white mb-1">Third Offense</h3>
                  <p className="text-gray-400">Account Ban - Permanent removal from the platform</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-black/50 p-4 rounded-xl border border-red-500/30">
                <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-light text-white mb-1">Fourth Offense (Alt Accounts)</h3>
                  <p className="text-gray-400">
                    Permanent Headset Ban - Hardware-level ban if alternate accounts are used
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 ml-12 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
              <p className="text-yellow-400 text-sm leading-relaxed">
                <span className="font-semibold">Please Note:</span> Only mod the approved sections of the game. Full
                documentation on allowed modding areas is available in the SDK documentation. Respect the rules to keep
                the community safe and fair for everyone.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Language Support Section */}
        <div className="bg-white text-black py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-start gap-12 mb-16">
              <span className="text-6xl font-light text-gray-300">01</span>
              <div>
                <h2 className="text-5xl font-light mb-6">Language Support</h2>
                <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
                  Choose your preferred scripting language and start creating immediately.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div whileHover={{ y: -4 }} className="bg-black text-white p-8 rounded-2xl border border-gray-800">
                <Code className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-3xl font-light mb-4">Lua Scripting</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  Lightweight and easy to learn. Perfect for quick prototyping and simple gameplay modifications.
                </p>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    Fast execution and hot-reloading
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    Simple syntax for beginners
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
                    Extensive documentation
                  </li>
                </ul>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="bg-cyan-400 text-black p-8 rounded-2xl">
                <Code className="w-12 h-12 mb-6" />
                <h3 className="text-3xl font-light mb-4">C# Scripting</h3>
                <p className="text-gray-800 mb-6 leading-relaxed">
                  Full Unity integration with C# provides professional-grade development capabilities. Perfect for
                  experienced developers who want complete control over game mechanics and systems.
                </p>
                <ul className="space-y-3 text-gray-800">
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    Full Unity API access
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    Type-safe development
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    Advanced debugging tools
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* API Documentation Section */}
        <div className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-start gap-12 mb-16">
              <span className="text-6xl font-light text-gray-800">02</span>
              <div>
                <h2 className="text-5xl font-light mb-6">API Documentation</h2>
                <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                  Comprehensive documentation for all Axo scripting features and functions.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Game Events", desc: "Hook into game events and create custom behaviors" },
                { title: "Entity System", desc: "Spawn, modify, and control game entities" },
                { title: "UI Framework", desc: "Create custom user interfaces and menus" },
                { title: "Networking", desc: "Build multiplayer-compatible modifications" },
                { title: "Asset Loading", desc: "Import custom models, textures, and sounds" },
                { title: "Save System", desc: "Persist mod data across game sessions" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -4 }}
                  className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl"
                >
                  <h3 className="text-xl font-light mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Code Examples Section */}
        <div className="bg-white text-black py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-start gap-12 mb-16">
              <span className="text-6xl font-light text-gray-300">03</span>
              <div>
                <h2 className="text-5xl font-light mb-6">Code Examples</h2>
                <p className="text-xl text-gray-600 max-w-2xl font-light leading-relaxed">
                  Learn from practical examples and start building your mods today.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-light">C# Example: Custom Weapon</h3>
                  <span className="text-cyan-400 text-sm">C#</span>
                </div>
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{`using UnityEngine;
using Axo;

public class CustomWeapon : AxoWeapon
{
    public override void OnFire()
    {
        // Custom firing logic
        SpawnProjectile();
        PlaySound("weapon_fire");
    }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        {/* Getting Started Section */}
        <div className="py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-start gap-12 mb-16">
              <span className="text-6xl font-light text-gray-800">04</span>
              <div>
                <h2 className="text-5xl font-light mb-6">Getting Started</h2>
                <p className="text-xl text-gray-400 max-w-2xl font-light leading-relaxed">
                  Follow these steps to create your first Axo mod.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Install Axo SDK",
                  desc: "Download and install the Axo Software Development Kit from our developer portal.",
                },
                {
                  step: "2",
                  title: "Choose Your Language",
                  desc: "Use C# for advanced Unity integration and professional development.",
                },
                {
                  step: "3",
                  title: "Create Your Project",
                  desc: "Use the Axo CLI to generate a new mod project with all necessary files.",
                },
                {
                  step: "4",
                  title: "Write Your Code",
                  desc: "Implement your mod logic using our comprehensive API and documentation.",
                },
                {
                  step: "5",
                  title: "Test & Debug",
                  desc: "Use the built-in testing tools to debug and refine your mod.",
                },
                {
                  step: "6",
                  title: "Publish & Share",
                  desc: "Upload your mod to the Xeno community hub and share with other players.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl"
                >
                  <div className="w-12 h-12 bg-cyan-400 text-black rounded-full flex items-center justify-center font-light text-xl flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-cyan-400 to-blue-500 py-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-6xl font-light mb-6 text-black">Ready to Start Building?</h2>
            <p className="text-xl text-black/80 mb-12 max-w-2xl mx-auto font-light">
              Download the Axo SDK and join our community of mod creators today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-black text-white hover:bg-gray-900 px-8 py-6 text-lg rounded-full">
                Download SDK
              </Button>
              <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 text-lg rounded-full">
                View Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const renderPage = () => {
    switch (currentPage) {
      case "games":
        return <GamesPage />
      case "community":
        return <CommunityPage />
      case "notifications":
        return <NotificationsPage />
      case "waking-soul":
        return <WakingSoulPage />
      case "tropik":
        return <TropikPage />
      case "axo":
        return <AxoPage />
      case "privacy":
        return <PrivacySafetyPage />
      case "axo-scripting": // Added case for the new page
        return <AxoScriptingPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="fixed inset-0 opacity-10 pointer-events-none">
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

      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/50 backdrop-blur-md border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button onClick={() => setCurrentPage("home")} className="flex items-center gap-3">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-f1v8RdzRfbDqC6zYwkeC72RqeYggnK.png"
              alt="Xeno Logo"
              className="w-8 h-8"
            />
            <span className="text-xl font-light">Xeno</span>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => setCurrentPage("home")}
              className={`text-sm transition-colors ${currentPage === "home" ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage("games")}
              className={`text-sm transition-colors ${currentPage === "games" ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              Games
            </button>
            {/* Added Axo Scripting to navigation menu */}
            <button
              onClick={() => setCurrentPage("axo-scripting")}
              className={`text-sm transition-colors ${currentPage === "axo-scripting" ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              Axo Scripting
            </button>
            <button
              onClick={() => setCurrentPage("community")}
              className={`text-sm transition-colors ${currentPage === "community" ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              Community
            </button>
            <button
              onClick={() => setCurrentPage("privacy")}
              className={`text-sm transition-colors ${currentPage === "privacy" ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
            >
              Privacy
            </button>
          </div>

          {/* User actions */}
          <div className="flex items-center gap-4">
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserDropdown(!showUserDropdown)}
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <img src={user.avatar || "/placeholder.svg"} alt="Avatar" className="w-8 h-8 rounded-full" />
                  <ChevronDown className="w-4 h-4" />
                </button>

                <AnimatePresence>
                  {showUserDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute top-full right-0 mt-2 bg-gray-900/95 backdrop-blur-md border border-gray-800 rounded-xl p-2 min-w-48"
                    >
                      <div className="px-3 py-2 border-b border-gray-800">
                        <p className="font-medium text-white">{user.displayName}</p>
                        <p className="text-sm text-gray-400">@{user.username}</p>
                      </div>

                      <button
                        onClick={() => {
                          setShowSettingsModal(true)
                          setShowUserDropdown(false)
                        }}
                        className="w-full flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800 rounded-lg transition-colors"
                      >
                        <Settings className="w-4 h-4" />
                        {t("settings")}
                      </button>

                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-3 py-2 text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
                      >
                        <LogOut className="w-4 h-4" />
                        {t("logout")}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Button
                onClick={() => setShowLoginModal(true)}
                className="bg-white text-black hover:bg-gray-200 px-6 py-2 text-sm rounded-full"
              >
                {t("login")}
              </Button>
            )}

            <button
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="md:hidden text-gray-400 hover:text-white transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 pt-16">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderPage()}
        </motion.div>
      </div>
    </div>
  )
}
