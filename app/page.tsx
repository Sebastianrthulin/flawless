"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Settings, Database, Workflow, ArrowRight, Star, Check, Menu, X, Sun, Moon } from "lucide-react"

export default function SwedishAutomationAgency() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("darkMode")
      return saved ? JSON.parse(saved) : false
    }
    return false
  })
  const { scrollYProgress } = useScroll()

  const testimonials = [
    {
      name: "Erik Johansson",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      quote:
        "Professionell service och otroliga resultat. Våra CRM-integrationer fungerar prova ring deras support den är ta mig fan öppen 24/7.",
      stars: 5,
    },
    {
      name: "Maria Andersson",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      quote: "Otroligt intressant hur en investering i teknologi kan förändra hur ett företag fungerar.",
      stars: 5,
    },
    {
      name: "Lars Pettersson",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "Bra automation men implementeringen tog längre tid än förväntat. Slutresultatet var dock värt väntan.",
      stars: 4,
    },
    {
      name: "Sofia Karlsson",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
      quote:
        "Först hade vi tekniska problem och jag var besviken. Men deras support team jobbade dygnet runt för att lösa allt. Från 2 stjärnor till 5 stjärnor - fantastisk service!",
      stars: 5,
    },
    {
      name: "Emma Svensson",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      quote: "Sparar oss 8 timmar i veckan på administrativa uppgifter. Enkelt att använda och pålitligt.",
      stars: 4,
    },
    {
      name: "Johan Nilsson",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face",
      quote: "Automationen fungerar bra men kunde varit mer anpassningsbar för våra specifika behov.",
      stars: 3,
    },
    {
      name: "Petra Gustafsson",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
      quote: "Mycket nöjd med resultatet. Implementeringen gick smidigt och supporten är alltid tillgänglig.",
      stars: 5,
    },
  ]

  useEffect(() => {
    try {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 8000)
      return () => clearInterval(interval)
    } catch (error) {
      console.error("Testimonial interval error:", error)
    }
  }, [testimonials.length])

  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
      }
    } catch (error) {
      console.error("Error saving theme preference:", error)
    }
  }, [isDarkMode])

  const scrollToFooter = () => {
    try {
      if (typeof window === "undefined") return

      const footer = document.querySelector("footer")
      if (footer) {
        footer.scrollIntoView({ behavior: "smooth" })
      } else {
        // Fallback: scroll to bottom of page
        const documentHeight = Math.max(
          document.body.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.clientHeight,
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight,
        )
        window.scrollTo({ top: documentHeight, behavior: "smooth" })
      }
    } catch (error) {
      console.error("Scroll error:", error)
      // Final fallback
      try {
        if (typeof window !== "undefined") {
          window.scrollTo(0, document.body?.scrollHeight || 0)
        }
      } catch (fallbackError) {
        console.error("Fallback scroll error:", fallbackError)
      }
    }
  }

  const toggleTheme = () => {
    try {
      setIsDarkMode((prev) => {
        const newValue = !prev
        if (typeof window !== "undefined") {
          localStorage.setItem("darkMode", JSON.stringify(newValue))
        }
        return newValue
      })
    } catch (error) {
      console.error("Theme toggle error:", error)
    }
  }

  const setCurrentTestimonialSafely = (index: number) => {
    try {
      if (index >= 0 && index < testimonials.length) {
        setCurrentTestimonial(index)
      }
    } catch (error) {
      console.error("Error setting testimonial:", error)
    }
  }

  // Enhanced theme-based classes with vibrant color support
  const themeClasses = {
    bg: isDarkMode ? "bg-zinc-950" : "bg-gray-50",
    text: isDarkMode ? "text-white" : "text-gray-900",
    textSecondary: isDarkMode ? "text-gray-300" : "text-gray-600",
    textMuted: isDarkMode ? "text-gray-400" : "text-gray-500",
    cardBg: isDarkMode ? "bg-zinc-900/80" : "bg-white/90",
    cardBgHover: isDarkMode ? "bg-zinc-950" : "bg-gray-50/90",
    cardBorder: isDarkMode ? "border-zinc-700/50" : "border-gray-300/50",
    cardBorderHover: isDarkMode ? "border-gray-400/50" : "border-gray-500/50",
    navBg: isDarkMode ? "bg-zinc-950/80" : "bg-white/80",
    navBorder: isDarkMode ? "border-zinc-800/50" : "border-gray-300/50",
    accent: isDarkMode ? "text-white" : "text-gray-900",
    accentHover: isDarkMode ? "text-white" : "text-gray-900",
    particles: isDarkMode ? "bg-gray-400/20" : "bg-gray-600/20",
    shadow: isDarkMode ? "shadow-zinc-900/50" : "shadow-gray-400/30",
    borderAccent: isDarkMode ? "border-gray-400" : "border-gray-600",
    heroText: isDarkMode ? "text-white" : "text-gray-900",
    heroSubtext: isDarkMode ? "text-gray-400" : "text-gray-600",
    testimonialName: isDarkMode ? "text-white" : "text-gray-900",
    // New colorful theme classes
    gradientText: isDarkMode
      ? "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
      : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent",
    gradientBorder: isDarkMode
      ? "border-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30"
      : "border-gradient-to-r from-blue-600/30 via-purple-600/30 to-pink-600/30",
    colorfulShadow: isDarkMode ? "shadow-lg shadow-purple-500/20" : "shadow-lg shadow-purple-500/30",
  }

  return (
    <div
      className={`min-h-screen ${themeClasses.bg} ${themeClasses.text} overflow-x-hidden transition-all duration-700`}
    >
      {/* Scroll Progress Bar */}
      <motion.div
        className={`fixed top-0 left-0 right-0 h-1 ${isDarkMode ? "bg-white" : "bg-gray-900"} origin-left z-50`}
        style={{ scaleX: scrollYProgress }}
      />

      {/* Static Background */}
      <div className="fixed inset-0 z-0">
        <div className={`absolute inset-0 ${themeClasses.bg} transition-all duration-700`} />
      </div>

      {/* Compact Navigation Menu - FOLLOWS SCROLL - FIXED - Hidden on mobile */}
      <div
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-30 backdrop-blur-2xl ${isDarkMode ? "bg-black/20 border-white/10" : "bg-white/20 border-gray-400/20"} border rounded-full px-8 py-3 hidden md:flex`}
      >
        <div className="flex items-center justify-center space-x-8">
          {[
            { name: "Tjänster", href: "#tjanster" },
            { name: "Process", href: "#process" },
            { name: "Priser", href: "#priser" },
            { name: "Kontakt", href: "#kontakt" },
          ].map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                if (item.name === "Kontakt") {
                  e.preventDefault()
                  const element = document.querySelector("#kontakt")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }
              }}
              className={`${themeClasses.textSecondary} transition-all duration-300 font-medium relative group whitespace-nowrap hover:scale-105 font-inter`}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isDarkMode ? "bg-white" : "bg-black"}`}
              ></span>
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="fixed top-4 right-4 z-50 md:hidden">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`${themeClasses.textSecondary} hover:${themeClasses.accentHover} transition-all duration-300 hover:bg-transparent backdrop-blur-sm ${isDarkMode ? "bg-black/20" : "bg-white/20"} border ${isDarkMode ? "border-white/10" : "border-gray-400/20"} rounded-lg`}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`fixed top-16 right-4 left-4 z-40 md:hidden backdrop-blur-2xl ${isDarkMode ? "bg-black/95 border-white/10" : "bg-white/95 border-gray-400/20"} border rounded-2xl p-6 max-w-sm mx-auto`}
          >
            <div className="flex flex-col space-y-4">
              {[
                { name: "Tjänster", href: "#tjanster" },
                { name: "Process", href: "#process" },
                { name: "Priser", href: "#priser" },
                { name: "Kontakt", href: "#kontakt" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${themeClasses.textSecondary} hover:${themeClasses.accentHover} transition-colors font-medium text-lg py-2 px-3 rounded-lg hover:${themeClasses.cardBgHover} font-inter`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div
                className={`flex flex-col space-y-3 pt-4 border-t ${isDarkMode ? "border-white/10" : "border-gray-300/30"}`}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleTheme}
                  className={`${themeClasses.textSecondary} hover:${themeClasses.accentHover} transition-all duration-300 self-start hover:bg-transparent`}
                >
                  {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                </Button>
                <Button
                  variant="outline"
                  className={`bg-transparent border ${isDarkMode ? "border-white/20 text-white hover:text-white hover:bg-transparent" : "border-gray-400/30 text-gray-900 hover:text-gray-900 hover:bg-transparent"} transition-all duration-300 w-full font-sans`}
                  asChild
                >
                  <a href="https://calendly.com/liam-flawlessagency/15min" target="_blank" rel="noopener noreferrer">
                    Boka Möte
                  </a>
                </Button>
                <Button
                  className={`${isDarkMode ? "bg-white text-black hover:bg-white" : "bg-black text-white hover:bg-black"} transition-all duration-300 w-full font-sans`}
                  onClick={() => {
                    scrollToFooter()
                    setIsMenuOpen(false)
                  }}
                >
                  Kontakta Oss
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Hero Section - Mobile optimized */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 pt-6 overflow-hidden scroll-mt-20"
      >
        {/* Dynamic Colorful Grainy Background */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Base gradient with vibrant colors */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500"
                : "bg-gradient-to-br from-violet-400 via-purple-400 to-pink-300"
            }`}
          />

          {/* Enhanced grain texture with color */}
          <div
            className={`absolute inset-0 ${isDarkMode ? "opacity-80" : "opacity-60"}`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "150px 150px",
              mixBlendMode: isDarkMode ? "overlay" : "multiply",
            }}
          />

          {/* Animated color overlays */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-tr from-blue-400/40 via-transparent to-rose-400/30"
                : "bg-gradient-to-tr from-blue-200/40 via-transparent to-rose-200/30"
            }`}
          />

          {/* Secondary animated overlay */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-bl from-indigo-400/30 via-transparent to-fuchsia-400/40"
                : "bg-gradient-to-bl from-indigo-200/30 via-transparent to-fuchsia-200/40"
            }`}
          />

          {/* Frame border */}
          <div
            className={`absolute inset-0 border-2 transition-all duration-700 ${
              isDarkMode ? "border-white/10" : "border-gray-400/20"
            }`}
          />
        </div>

        {/* Logo - Top Left of Hero - Mobile responsive */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
          <div
            className="flex items-center gap-2 md:gap-4 cursor-pointer"
            onClick={() => {
              try {
                if (typeof window !== "undefined") {
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              } catch (error) {
                console.error("Scroll to top error:", error)
                try {
                  if (typeof window !== "undefined") {
                    window.scrollTo(0, 0)
                  }
                } catch (fallbackError) {
                  console.error("Fallback scroll to top error:", fallbackError)
                }
              }
            }}
          >
            <div className="flex flex-col">
              <div className={`text-lg md:text-xl font-bold ${themeClasses.text}`}>Flawless</div>
              <div
                className={`text-xs ${themeClasses.textMuted} font-medium tracking-wider uppercase hidden sm:block font-inter`}
              ></div>
            </div>
          </div>
        </div>

        {/* Buttons - Top Right of Hero - Mobile responsive */}
        <div className="absolute top-4 right-16 md:top-6 md:right-6 z-20 flex items-center space-x-2 md:space-x-4">
          {/* Theme Toggle Button - Hidden on mobile, shown in menu instead */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className={`hidden md:flex ${themeClasses.textSecondary} hover:${themeClasses.accentHover} transition-all duration-300 hover:scale-110 relative hover:bg-transparent`}
          >
            <motion.div animate={{ rotate: isDarkMode ? 0 : 180 }} transition={{ duration: 0.5 }}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.div>
          </Button>

          <Button
            variant="outline"
            className={`inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-2 [&amp;_svg]:shrink-0 h-11 ${isDarkMode ? "bg-white text-black hover:bg-white hover:text-black" : "bg-black text-white hover:bg-black hover:text-white"} border-2 ${isDarkMode ? "border-white/20" : "border-gray-400/20"} text-sm px-4 py-2 rounded-md font-medium shadow-lg backdrop-blur-sm hidden md:block font-sans hover:shadow-[0_10px_25px_rgba(255,255,255,0.4)]`}
            asChild
          >
            <a href="https://calendly.com/liam-flawlessagency/15min" target="_blank" rel="noopener noreferrer">
              Boka möte
            </a>
          </Button>
          <Button
            className={`hidden md:flex ${isDarkMode ? "bg-white text-black hover:bg-white" : "bg-black text-white hover:bg-black/90"} transition-all duration-300 shadow-lg backdrop-blur-sm font-sans h-11 px-4 py-2 text-sm font-medium rounded-md hover:shadow-[0_10px_25px_rgba(255,255,255,0.4)] border-2 ${isDarkMode ? "border-white/20" : "border-gray-400/20"}`}
            onClick={(e) => {
              e.preventDefault()
              scrollToFooter()
            }}
          >
            Kontakt
          </Button>
        </div>

        {/* Hero Content - Mobile optimized */}
        <div className="text-center max-w-4xl mx-auto z-10 mt-16 md:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight"
          >
            <span className={`${themeClasses.heroText} drop-shadow-lg`}>Framtidens Företag</span>
            <br />
            <span className={`${themeClasses.heroText} drop-shadow-lg`}>Jobbar Inte Manuellt.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-lg sm:text-xl md:text-2xl ${isDarkMode ? "text-gray-200" : "text-gray-600"} mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-sm font-inter`}
          >
            Med optimerade automationer hjälper vi dig att spara tid, minska kostnader och öka intäkterna.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center px-4"
          >
            <Button
              size="lg"
              className={`inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 bg-white text-black border-white/20 hover:bg-white hover:text-black border-2 text-base px-8 md:px-10 py-4 md:py-5 rounded-lg font-medium shadow-lg hover:shadow-[0_12px_30px_rgba(255,255,255,0.4)] relative z-10 w-full sm:w-auto backdrop-blur-sm font-sans`}
              asChild
            >
              <a href="https://calendly.com/liam-flawlessagency/15min" target="_blank" rel="noopener noreferrer">
                <span className="flex items-center gap-3">
                  Boka
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>
            </Button>

            <Button
              size="lg"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 bg-transparent text-white border-white border hover:bg-white hover:text-black text-base px-8 md:px-10 py-4 md:py-5 rounded-lg font-medium shadow-lg relative z-10 w-full sm:w-auto backdrop-blur-sm font-sans"
              asChild
            >
              <a href="#tjanster">Läs mer</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Enhanced About Us Section */}
      <section id="about" className="py-20 px-4 relative z-10 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className={`${themeClasses.text}`}>Om Oss</span>
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <Card
                className={`${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-xl transition-all duration-700 hover:${themeClasses.cardBgHover} hover:${themeClasses.cardBorderHover} ${themeClasses.shadow}`}
              >
                <CardContent className="p-6 md:p-8">
                  <div
                    className={`max-h-64 overflow-y-auto scrollbar-thin ${isDarkMode ? "scrollbar-thumb-gray-400/50 scrollbar-track-zinc-800/50" : "scrollbar-thumb-gray-500/50 scrollbar-track-gray-200/50"} space-y-4 md:space-y-6`}
                  >
                    <p className={`text-base md:text-lg ${themeClasses.textSecondary} leading-relaxed font-inter`}>
                      Vi är ett engagerat team med en tydlig vision att förstå dina behov och leverera lösningar som är
                      optimerade för just din verksamhet. Genom att arbeta helt inhouse skapar vi smarta lösningar som
                      hjälper företag att växa, effektivisera och utvecklas.
                    </p>
                    <p className={`text-sm md:text-base ${themeClasses.textMuted} leading-relaxed font-inter`}>
                      Med över fem års erfarenhet inom automation, AI och systemutveckling har vi hjälpt många företag
                      att uppnå ökad effektivitet och lönsamhet. Men för oss handlar det inte bara om teknik det handlar
                      om att skapa verkligt värde för människor.
                    </p>
                    <p className={`text-sm md:text-base ${themeClasses.textMuted} leading-relaxed font-inter`}>
                      Vi vet hur viktigt det är att alltid finnas där när du behöver oss. Därför erbjuder vi personlig
                      och engagerad support dygnet runt, årets alla dagar. Vårt löfte är enkelt: att ge dig snabba,
                      pålitliga och mänskliga svar oavsett tid på dygnet.
                    </p>
                    <p className={`text-base md:text-lg ${themeClasses.accent} font-semibold leading-relaxed`}>
                      Hos oss får du inte bara en lösning, du får en partner som står vid din sida, varje steg på vägen.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="tjanster" className="py-20 px-4 relative z-10 mb-16 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 md:mb-32 relative z-10"
        >
          <h2 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className={`${themeClasses.text}`}>Våra Tjänster</span>
          </h2>
          <p
            className={`mt-2 text-lg md:text-xl ${themeClasses.textSecondary} max-w-4xl mx-auto leading-relaxed font-inter`}
          >
            Här ser du våra vanligaste tjänster, vi optimerar allt efter dina behov.
            <br className="hidden sm:block" />
            Osäker på vad som passar? Boka en kostnadsfri konsultation, så hittar vi rätt lösning för dig.
          </p>
        </motion.div>
        {/* Dynamic Colorful Grainy Background Frame for Services */}
        <div className="absolute left-4 right-4 top-80 bottom-8 md:left-8 md:right-8 md:top-80 md:bottom-8 z-0 rounded-3xl overflow-hidden">
          {/* Base gradient with vibrant colors */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500"
                : "bg-gradient-to-br from-violet-400 via-purple-400 to-pink-300"
            }`}
          />

          {/* Enhanced grain texture with color */}
          <div
            className={`absolute inset-0 ${isDarkMode ? "opacity-80" : "opacity-60"}`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "150px 150px",
              mixBlendMode: isDarkMode ? "overlay" : "multiply",
            }}
          />

          {/* Animated color overlays */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-tr from-blue-400/40 via-transparent to-rose-400/30"
                : "bg-gradient-to-tr from-blue-200/40 via-transparent to-rose-200/30"
            }`}
          />

          {/* Secondary animated overlay */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-bl from-indigo-400/30 via-transparent to-fuchsia-400/40"
                : "bg-gradient-to-bl from-indigo-200/30 via-transparent to-fuchsia-200/40"
            }`}
          />

          {/* Frame border */}
          <div
            className={`absolute inset-0 rounded-3xl border-2 transition-all duration-700 ${
              isDarkMode ? "border-white/10" : "border-gray-400/20"
            }`}
          />
          {/* Top fade from hero colors */}
          <div
            className={`absolute top-0 left-0 right-0 h-32 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-b from-violet-600/60 via-purple-600/40 to-transparent"
                : "bg-gradient-to-b from-violet-400/60 via-purple-400/40 to- transparent"
            }`}
          />

          {/* Bottom fade to process colors */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-32 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-t from-violet-600/60 via-purple-600/50 to-transparent"
                : "bg-gradient-to-t from-violet-400/60 via-purple-400/50 to-transparent"
            }`}
          />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="pt-16 pb-16 px-8 md:pt-20 md:pb-20 md:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full justify-items-center">
              {[
                {
                  icon: <Database className="h-8 w-8" />,
                  title: "CRM Integration",
                  description: "Automatisera kunddata och säljprocesser med seamless CRM-kopplingar.",
                },
                {
                  icon: <Workflow className="h-8 w-8" />,
                  title: "Processautomation",
                  description: "Effektivisera repetitiva uppgifter och arbetsflöden för maximal produktivitet.",
                },
                {
                  icon: <Settings className="h-8 w-8" />,
                  title: "API-kopplingar",
                  description: "Koppla samman olika system och plattformar för smidig dataöverföring.",
                },
                {
                  icon: <Zap className="h-8 w-8" />,
                  title: "Skräddarsydd Automation",
                  description: "Skräddarsydda AI-Agenter som kan göra vilken typ av uppgift du än kan tänka dig.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group h-full"
                >
                  <Card
                    className={`${isDarkMode ? "bg-purple-900/20 border-purple-400/30" : "bg-purple-50/80 border-purple-300/50"} backdrop-blur-xl hover:${isDarkMode ? "bg-purple-800/30" : "bg-purple-100/90"} transition-all duration-300 hover:${isDarkMode ? "border-purple-300/50" : "border-purple-400/60"} hover:${themeClasses.shadow} h-full`}
                  >
                    <CardContent className="p-6 h-full flex flex-col">
                      <div
                        className={`${isDarkMode ? "text-purple-300" : "text-purple-700"} mb-4 group-hover:${isDarkMode ? "text-purple-200" : "text-purple-800"} transition-all duration-300 group-hover:scale-110`}
                      >
                        {service.icon}
                      </div>
                      <h3
                        className={`text-lg md:text-xl font-semibold mb-3 ${themeClasses.text} group-hover:${themeClasses.accentHover} transition-colors duration-300 font-inter`}
                      >
                        {service.title}
                      </h3>
                      <p
                        className={`text-sm md:text-base ${themeClasses.textSecondary} group-hover:${themeClasses.textSecondary} transition-colors duration-300 flex-grow font-inter`}
                      >
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Process Timeline */}
      <section id="process" className="py-20 px-4 relative z-10 mb-16 scroll-mt-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className={`${themeClasses.text}`}>Så Funkar Det</span>
          </h2>
          <p className={`text-lg md:text-xl ${themeClasses.textSecondary} font-inter`}>
            Vår beprövade process för att leverera perfekta automationslösningar
          </p>
        </motion.div>
        {/* Dynamic Colorful Grainy Background Frame for Process */}
        <div className="absolute left-4 right-4 top-64 bottom-16 md:left-8 md:right-8 z-0 rounded-3xl overflow-hidden">
          {/* Base gradient with vibrant colors */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-br from-violet-600 via-purple-600 to-pink-500"
                : "bg-gradient-to-br from-violet-400 via-purple-400 to-pink-300"
            }`}
          />

          {/* Enhanced grain texture with color */}
          <div
            className={`absolute inset-0 ${isDarkMode ? "opacity-80" : "opacity-60"}`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "150px 150px",
              mixBlendMode: isDarkMode ? "overlay" : "multiply",
            }}
          />

          {/* Animated color overlays */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-tr from-blue-400/40 via-transparent to-rose-400/30"
                : "bg-gradient-to-tr from-blue-200/40 via-transparent to-rose-200/30"
            }`}
          />

          {/* Secondary animated overlay */}
          <div
            className={`absolute inset-0 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-bl from-indigo-400/30 via-transparent to-fuchsia-400/40"
                : "bg-gradient-to-bl from-indigo-200/30 via-transparent to-fuchsia-200/40"
            }`}
          />

          {/* Frame border */}
          <div
            className={`absolute inset-0 rounded-3xl border-2 transition-all duration-700 ${
              isDarkMode ? "border-white/10" : "border-gray-400/20"
            }`}
          />
          {/* Top fade from services colors */}
          <div
            className={`absolute top-0 left-0 right-0 h-32 transition-all duration-700 ${
              isDarkMode
                ? "bg-gradient-to-b from-violet-600/60 via-purple-600/50 to-transparent"
                : "bg-gradient-to-b from-violet-400/60 via-purple-400/50 to-transparent"
            }`}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="p-8 md:p-12">
            <div className="space-y-8 md:space-y-12">
              {[
                {
                  step: "01",
                  title: "Analys & Kartläggning",
                  description: "Vi analyserar dina nuvarande processer och identifierar automationsmöjligheter",
                },
                {
                  step: "02",
                  title: "Strategisk Planering",
                  description: "Vi skapar en skräddarsydd automationsstrategi baserad på dina specifika behov",
                },
                {
                  step: "03",
                  title: "Utveckling & Implementation",
                  description: "Vårt team bygger och implementerar dina automationslösningar",
                },
                {
                  step: "04",
                  title: "Testning & Optimering",
                  description: "Vi testar noggrant och optimerar för maximal prestanda och tillförlitlighet",
                },
                {
                  step: "05",
                  title: "Support & Underhåll",
                  description: "24/7 support och fria uppdateringar för att säkerställa optimal funktion",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 w-full">
                    <Card
                      className={`${isDarkMode ? "bg-purple-900/20 border-purple-400/30" : "bg-purple-50/80 border-purple-300/50"} backdrop-blur-xl hover:${isDarkMode ? "bg-purple-800/30" : "bg-purple-100/90"} transition-all duration-300 hover:${isDarkMode ? "border-purple-300/50" : "border-purple-400/60"} ${themeClasses.shadow}`}
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
                          <div
                            className={`${isDarkMode ? "bg-white text-zinc-900" : "bg-gray-900 text-white"} w-12 h-12 rounded-full flex items-center justify-center font-bold ${themeClasses.shadow} flex-shrink-0 font-inter`}
                          >
                            {item.step}
                          </div>
                          <h3 className={`text-lg md:text-xl font-semibold ${themeClasses.text} font-inter`}>
                            {item.title}
                          </h3>
                        </div>
                        <p className={`text-sm md:text-base ${themeClasses.textSecondary} font-inter`}>
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div
                    className={`${isDarkMode ? "bg-white" : "bg-gray-900"} w-6 h-6 md:w-8 md:h-8 rounded-full flex-shrink-0 ${themeClasses.shadow} hidden md:block`}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section id="testimonials" className="py-20 px-4 relative z-10 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className={`${themeClasses.text}`}>Vad Våra Kunder Säger</span>
            </h2>
          </motion.div>

          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className={`${themeClasses.cardBg} border ${themeClasses.cardBorder} backdrop-blur-xl transition-all duration-700 ${themeClasses.shadow}`}
                >
                  <CardContent className="p-6 md:p-8 text-center">
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 md:h-5 md:w-5 transition-all duration-300 ${
                            i < testimonials[currentTestimonial].stars
                              ? `${isDarkMode ? "text-yellow-400" : "text-yellow-500"} fill-current drop-shadow-sm`
                              : `${themeClasses.textMuted}`
                          }`}
                        />
                      ))}
                    </div>
                    <blockquote
                      className={`text-lg md:text-xl lg:text-2xl ${themeClasses.textSecondary} mb-6 italic leading-relaxed font-inter`}
                    >
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <img
                        src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                        alt={testimonials[currentTestimonial].name}
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-2 ${themeClasses.cardBorder}`}
                      />
                      <div className="text-center sm:text-left">
                        <div className={`font-semibold text-base md:text-lg ${themeClasses.testimonialName}`}>
                          {testimonials[currentTestimonial].name}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialSafely(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? `${isDarkMode ? "bg-white" : "bg-gray-900"}`
                      : `${isDarkMode ? "bg-gray-600" : "bg-gray-400"}`
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing */}
      <section id="priser" className="py-20 px-4 relative z-10 scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className={`${themeClasses.text}`}>Pris utefter ditt behov av system</span>
            </h2>
            <p className={`text-lg md:text-xl ${themeClasses.textSecondary} mb-8 font-inter`}>
              Välj det paket som passar ditt företags behov bäst
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "Starter",
                description: "Perfekt för små företag som vill komma igång",
                features: [
                  "1 automation",
                  "Grundläggande CRM-integration",
                  "24/7 Support",
                  "Månadsrapporter",
                  "SLA-garanti",
                ],
                colorTheme: "purple",
              },
              {
                name: "Professional",
                description: "För växande företag med större behov",
                features: [
                  "2 automationer",
                  "Skräddarsydda integrationer",
                  "24/7 Support",
                  "Veckorapporter",
                  "SLA-garanti",
                ],
                popular: true,
                colorTheme: "purple",
              },
              {
                name: "Enterprise",
                description: "Fullständig automationslösning för stora företag",
                features: [
                  "Obegränsade automationer",
                  "Dedikerad projektledare",
                  "24/7 support",
                  "Dagliga rapporter",
                  "SLA-garanti",
                ],
                colorTheme: "pink",
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-6 md:-top-6 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge
                      className={`px-2 md:px-3 py-1 text-xs md:text-sm font-medium shadow-lg border-0 pointer-events-none ${isDarkMode ? "bg-white text-black" : "bg-black text-white"} font-inter`}
                    >
                      Mest Populär
                    </Badge>
                  </div>
                )}
                <Card
                  className={`${plan.popular ? `${themeClasses.cardBg} border-2` : `${themeClasses.cardBg} border ${themeClasses.cardBorder}`} backdrop-blur-xl hover:${themeClasses.cardBgHover} transition-all duration-300 ${themeClasses.shadow} h-full`}
                  style={{
                    borderColor: plan.popular ? (isDarkMode ? "#000000" : "#000000") : undefined,
                  }}
                >
                  <CardContent className="p-6 md:p-8 flex flex-col h-full">
                    <h3 className={`text-xl md:text-2xl font-bold mb-2 ${themeClasses.text}`}>{plan.name}</h3>
                    <p className={`${themeClasses.textSecondary} mb-6 text-sm md:text-base font-inter`}>
                      {plan.description}
                    </p>

                    <div className="mb-6 text-center">
                      <span className={`text-xl md:text-2xl font-bold ${themeClasses.accent}`}>Få Offert</span>
                    </div>

                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center gap-3">
                          <Check className={`h-4 w-4 md:h-5 md:w-5 flex-shrink-0 ${themeClasses.accent}`} />
                          <span className={`text-sm md:text-base ${themeClasses.textSecondary} font-inter`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`${isDarkMode ? "bg-white text-black hover:bg-white" : "bg-black text-white hover:bg-black"} transition-all duration-300 ${themeClasses.shadow} w-full relative z-10 mt-auto font-sans`}
                      size="lg"
                      asChild
                    >
                      <a
                        href="https://calendly.com/liam-flawlessagency/15min"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Boka Möte
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Interactive Demo Booking Section */}
      <section id="kontakt" className="py-20 px-4 relative z-10 overflow-hidden scroll-mt-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 relative z-10"
          >
            <h2 className={`text-4xl md:text-5xl lg:text-7xl font-bold mb-6 ${themeClasses.text}`}>
              Redo för Framtiden?
            </h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className={`text-lg md:text-xl lg:text-l ${themeClasses.textSecondary} max-w-3xl mx-auto leading-relaxed font-inter`}
            >
              Vi bygger avancerade system och automationer från grunden, designade för att lösa just era
              verksamhetsutmaningar.
            </motion.p>
          </motion.div>

          {/* Enhanced Interactive Demo Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {[
              {
                icon: <Zap className={`h-8 w-8 md:h-12 md:w-12 ${themeClasses.accent}`} />,
                title: "Live Demo",
                description: "Prova våra automationer kostnadsfritt",
                delay: 0.1,
              },
              {
                icon: <Settings className={`h-8 w-8 md:h-12 md:w-12 ${themeClasses.accent}`} />,
                title: "Personlig Rådgivning",
                description: "Få skräddarsydda lösningar för ditt företag",
                delay: 0.2,
              },
              {
                icon: <ArrowRight className={`h-8 w-8 md:h-12 md:w-12 ${themeClasses.accent}`} />,
                title: "Snabb Implementation",
                description: "Kom igång inom 24 timmar med full support",
                delay: 0.3,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: item.delay,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="relative group"
              >
                <Card
                  className={`relative backdrop-blur-xl transition-all duration-300 rounded-2xl overflow-hidden ${themeClasses.shadow} ${isDarkMode ? "border-0" : ""}`}
                  style={{
                    backgroundColor: isDarkMode ? "#8b45c1" : undefined,
                    backgroundImage: isDarkMode
                      ? `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNose' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
                      : `linear-gradient(135deg, 
          rgba(124, 58, 237, 0.12) 0%, 
          rgba(147, 51, 234, 0.12) 50%, 
          rgba(190, 24, 93, 0.12) 100%),
         url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNose' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
                    backgroundSize: isDarkMode ? "150px 150px" : "100% 100%, 150px 150px",
                    backgroundBlendMode: isDarkMode ? "multiply" : "normal, multiply",
                  }}
                >
                  <CardContent className="p-4 md:p-8 text-center h-auto min-h-[140px] md:h-64 flex flex-col justify-center">
                    <motion.div
                      className="mb-3 md:mb-4 flex justify-center"
                      animate={{
                        y: [0, -8, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: index * 1.2,
                        ease: "easeInOut",
                      }}
                    >
                      {item.icon}
                    </motion.div>
                    <h3
                      className={`text-base md:text-xl font-bold mb-2 md:mb-3 ${themeClasses.text} group-hover:${themeClasses.accentHover} transition-colors font-inter`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs md:text-base ${themeClasses.textSecondary} group-hover:${themeClasses.textSecondary} transition-colors leading-relaxed font-inter`}
                    >
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Main CTA Section */}
          <div className="relative">
            <Card
              className={`relative backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-700 ${themeClasses.shadow} ${isDarkMode ? "border-0" : ""}`}
              style={{
                backgroundColor: isDarkMode ? "#8b45c1" : undefined,
                backgroundImage: isDarkMode
                  ? `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNose' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`
                  : `linear-gradient(135deg, 
          rgba(124, 58, 237, 0.12) 0%, 
          rgba(147, 51, 234, 0.12) 50%, 
          rgba(190, 24, 93, 0.12) 100%),
         url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNose' baseFrequency='1.2' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
                backgroundSize: isDarkMode ? "150px 150px" : "100% 100%, 150px 150px",
                backgroundBlendMode: isDarkMode ? "multiply" : "normal, multiply",
              }}
            >
              <CardContent className="p-8 md:p-12 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="mb-8"
                >
                  <Button
                    size="lg"
                    className={`relative overflow-hidden ${isDarkMode ? "bg-white text-black hover:bg-white hover:text-black" : "bg-black text-white hover:bg-black hover:text-white"} text-base md:text-lg px-6 md:px-10 py-4 md:py-6 rounded-full font-bold shadow-lg transition-all duration-500 w-full sm:w-auto border-2 ${isDarkMode ? "border-white/20 hover:border-white/30 hover:shadow-[0_15px_35px_rgba(255,255,255,0.4)]" : "border-gray-400/30 hover:border-gray-400/40 hover:shadow-[0_15px_35px_rgba(0,0,0,0.4)]"} font-sans`}
                    asChild
                  >
                    <a
                      href="https://calendly.com/liam-flawlessagency/15min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative block"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-3 md:gap-4">
                        Boka möte
                        <motion.div
                          animate={{ x: [0, 8, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                        >
                          <ArrowRight className="h-5 w-5 md:h-6 md:w-6" />
                        </motion.div>
                      </span>
                    </a>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="space-y-4"
                >
                  <div
                    className={`flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 text-sm ${isDarkMode ? "text-white" : "text-black"} font-inter`}
                  >
                    {["15 minuters personligt möte", "Helt kostnadsfritt", "Ingen förpliktelse"].map((text, index) => (
                      <div key={text} className="flex items-center justify-center gap-2">
                        <motion.div
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{
                            duration: 2.5,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: index * 0.7,
                          }}
                          className={`w-2 h-2 ${themeClasses.accent} rounded-full`}
                        />
                        {text}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {["TechFlow AB", "Nordic Solutions", "Innovate Stockholm", "Future Corp", "Smart Systems"].map(
                (company, index) => (
                  <motion.div
                    key={company}
                    animate={{
                      opacity: [0.3, 0.9, 0.3],
                      scale: [0.95, 1.05, 0.95],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: index * 0.8,
                    }}
                    className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} font-medium text-xs md:text-sm font-inter`}
                  >
                    {company}
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer
        className={`py-12 px-4 border-t relative z-10 transition-all duration-700 ${themeClasses.cardBg}`}
        style={{
          borderImage: isDarkMode
            ? "linear-gradient(90deg, rgba(139,69,193,0.3), rgba(168,85,247,0.3), rgba(236,72,153,0.3)) 1"
            : "linear-gradient(90deg, rgba(124,58,237,0.3), rgba(147,51,234,0.3), rgba(190,24,93,0.3)) 1",
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className={`text-xl md:text-2xl font-bold mb-4 ${themeClasses.text}`}>Flawless Agency</div>
              <p className={`text-sm md:text-base ${themeClasses.textMuted} font-inter`}>
                Sveriges ledande automationspartner för moderna företag.
              </p>
            </div>

            <div className="text-center md:text-left">
              <h4 className={`font-semibold mb-4 ${themeClasses.text}`}>Tjänster</h4>
              <ul className={`space-y-2 ${themeClasses.textMuted} text-sm md:text-base`}>
                {[
                  { name: "CRM Integration", color: "purple" },
                  { name: "Processautomation", color: "purple" },
                  { name: "API-kopplingar", color: "purple" },
                  { name: "Custom Automation", color: "pink" },
                ].map((service) => (
                  <li key={service.name}>
                    <a
                      href="#tjanster"
                      className={`transition-colors duration-300 hover:${isDarkMode ? "text-white" : "text-black"} font-inter`}
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="text-center md:text-left">
              <h4 className={`font-semibold mb-4 ${themeClasses.text}`}>Kontakt</h4>
              <ul className={`space-y-2 ${themeClasses.textMuted} text-sm md:text-base font-inter`}>
                <li>Stockholm, Sverige</li>
                <li>
                  <a
                    href="tel:+46793529906"
                    className={`transition-colors duration-300 hover:${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    +46 79 352 99 06
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@flawless.se"
                    className={`transition-colors duration-300 hover:${isDarkMode ? "text-white" : "text-black"}`}
                  >
                    info@flawless.se
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`border-t mt-8 pt-8 text-center ${themeClasses.textMuted} text-sm md:text-base font-inter`}
            style={{
              borderImage: isDarkMode
                ? "linear-gradient(90deg, rgba(139,69,193,0.2), rgba(168,85,247,0.2), rgba(236,72,153,0.2)) 1"
                : "linear-gradient(90deg, rgba(124,58,237,0.2), rgba(147,51,234,0.2), rgba(190,24,93,0.2)) 1",
            }}
          >
            © {new Date().getFullYear()} Flawless Agency. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
