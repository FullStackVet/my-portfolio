import { motion, type Variants } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

// Define project data
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Chat App",
    description:
      "A full-stack chat application featuring user authentication, live chats, and full database built on the MERN stack.",
    technologies: ["MongoDB", "Express", "React", "JavaScript"],
    imageUrl: "./chatApp.png",
    githubUrl: "https://github.com/FullStackVet/MERNChatApp.git",
  },
  {
    id: 2,
    title: "Full Weather App",
    description:
      "A full weather app built in React/Express utilizing Axios to call weatherapi.com. Features a live, 5-day and 24-hour forecast",
    technologies: ["TailwindCSS", "React", "TypeScript", "Express"],
    imageUrl: "./weatherApp.png",
    githubUrl: "https://github.com/FullStackVet/React-Weather-App.git",
  },
  {
    id: 3,
    title: "Basic Finance App",
    description:
      "A basic finance app with visual graph, summary report, clean forms to add expenses/income and a tracker.",
    technologies: ["Flutter", "Dart", "C++", "Swift"],
    imageUrl: "./financeApp.png",
    githubUrl: "https://github.com/FullStackVet/basic-finance-app.git",
  },
];

// Easing
const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Animations
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const ProjectSection = () => {
  return (
    <section id="projects" className="min-h-screen py-16 flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white md:mb-4 ">
            My <span className="first-name-gradient">Projects</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-purple-100 mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-purple-800 text-purple-100 text-xs rounded-full border border-purple-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-5"
        >
          <a
            href="https://github.com/FullStackVet"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg transition-all duration-300"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
