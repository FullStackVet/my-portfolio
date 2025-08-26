import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useHeroAnimation } from "../hooks/useHeroAnimation";
import VSCodeDisplay from "./VSCodeDisplay";

export default function HeroSection() {
  const {
    firstNameVisible,
    lastNameVisible,
    lastNameReversed,
    currentStatus,
    isFlipping,
  } = useHeroAnimation();

  return (
    <section id="hero">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row w-full h-full">
          {/* Left Side - Name and Intro */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start space-y-8 py-12 md:py-0">
            <div className="text-center md:text-left">
              {/* First Name */}
              <AnimatePresence>
                {firstNameVisible && (
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.0, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold py-3 first-name-gradient"
                  >
                    Timothy
                  </motion.h1>
                )}
              </AnimatePresence>

              {/* Last Name w/ Animation */}
              <AnimatePresence>
                {lastNameVisible && (
                  <motion.h1
                    key={lastNameReversed ? "reversed" : "normal"}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                    className={`text-5xl md:text-7xl font-bold py-2.5 ${
                      !lastNameReversed ? "last-name-gradient" : "text-white"
                    }`}
                  >
                    {lastNameReversed ? "yhpruM" : "Murphy"}
                  </motion.h1>
                )}
              </AnimatePresence>

              {/* Flip overlay */}
              <AnimatePresence>
                {isFlipping && (
                  <motion.div
                    initial={{ rotateX: 0, opacity: 0 }}
                    animate={{ rotateX: 180, opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="absolute md:inset-0 flex items-center justify-center"
                    style={{ perspective: "1000px" }}
                  >
                    <motion.div
                      className="text-5xl md:text-7xl font-bold last-name-gradient"
                      initial={{ rotateX: 0 }}
                      animate={{ rotateX: 180 }}
                      transition={{ duration: 1.2, ease: "easeInOut" }}
                    >
                      Murphy
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Intro */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.8, ease: "easeOut" }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white">
                Full-Stack Developer
              </h2>
              <p className="text-lg md:text-xl text-purple-100 max-w-md">
                Creating innovative solutions with modern technologies and a
                passion for building the future.
              </p>

              {/* CTA */}
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="pt-4 flex justify-center md:justify-start"
              >
                <a
                  href="#about"
                  className="flex items-center text-white bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 hover:bg-white/30 transition-all duration-300 group"
                >
                  <span className="mr-2">Who am I?</span>
                  <ChevronDown className="w-5 h-5 group-hover:animate-bounce" />
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Side - Simulator */}
          <div className="flex-1 flex justify-center items-center py-8 md:py-0">
            <VSCodeDisplay currentStatus={currentStatus} />
          </div>
        </div>
      </div>
    </section>
  );
}
