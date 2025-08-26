import { motion, type Variants } from "framer-motion";
import { Code2, Cpu, Database, Globe, Server, Sparkles } from "lucide-react";

// Easing
const easeOutExpo: [number, number, number, number] = [0.16, 1, 0.3, 1];
const easeOutBack: [number, number, number, number] = [0.34, 1.56, 0.64, 1];

// Animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOutExpo,
    },
  },
};

const slideInVariants: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

// Ripple effect
const WaterRippleEffect = () => (
  <div className="absolute inset-0 overflow-hidden rounded-full">
    <motion.div
      className="absolute inset-0 bg-white opacity-10"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1.2,
        opacity: [0, 0.1, 0],
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 1,
        times: [0, 0.5, 1],
      }}
    />
    <motion.div
      className="absolute inset-0 bg-white opacity-15"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{
        scale: 1.5,
        opacity: [0, 0.08, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1.5,
        times: [0, 0.5, 1],
        delay: 0.5,
      }}
    />
  </div>
);

// Progress bar
const ProgressBar = ({ level }: { level: number }) => {
  return (
    <div className="h-2 bg-white/10 rounded-full overflow-hidden relative">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{
          duration: 1.8,
          ease: easeOutBack,
          delay: 0.6,
        }}
        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative"
      >
        <WaterRippleEffect />
      </motion.div>
    </div>
  );
};

export default function AboutSection() {
  const aboutData = {
    intro:
      "A passionate full-stack developer with a love for creating innovative solutions to digital problems of all scopes.",
    description:
      "I am a Canadian Forces Veteran who found true purpose in full-stack development. With experience across the entire development stack, I bring ideas to life by creating responsive and practical applications that deliver exceptional user experiences. Developing applications isn't a job... It's a passion.",
    stats: [
      { label: "Years Experience", value: "2+" },
      { label: "Projects Completed", value: "30+" },
      { label: "Technologies", value: "15+" },
    ],
    skills: [
      { name: "Frontend", icon: <Globe className="w-5 h-5" />, level: 90 },
      { name: "Backend", icon: <Server className="w-5 h-5" />, level: 85 },
      { name: "Databases", icon: <Database className="w-5 h-5" />, level: 80 },
      { name: "DevOps", icon: <Cpu className="w-5 h-5" />, level: 75 },
    ],
  };

  return (
    <section id="about" className="min-h-[100dvh] py-16 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row gap-12"
        >
          {/* Left Side - Header and Intro */}
          <div className="flex-1">
            <motion.h2
              variants={slideInVariants}
              className="text-4xl md:text-5xl font-bold mb-8 text-white"
            >
              About <span className="first-name-gradient">Me</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-xl text-purple-100 mb-6"
            >
              {aboutData.intro}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-purple-100 mb-8"
            >
              {aboutData.description}
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              {aboutData.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <div className="text-2xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-purple-100 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side - Skills */}
          <div className="flex-1">
            <motion.div
              variants={slideInVariants}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-white/10"
            >
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-semibold text-white mb-6 flex items-center"
              >
                <Code2 className="w-6 h-6 mr-2" />
                Technical Skills
              </motion.h3>

              <div className="space-y-6">
                {aboutData.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-white">
                        {skill.icon}
                        <span className="ml-2">{skill.name}</span>
                      </div>
                      <span className="text-purple-100">{skill.level}%</span>
                    </div>
                    <ProgressBar level={skill.level} />
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={itemVariants}
                className="mt-8 p-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="flex items-center">
                  <Sparkles className="w-5 h-5 text-yellow-300 mr-2" />
                  <span className="text-white">
                    Always learning new technologies and techniques!
                  </span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
