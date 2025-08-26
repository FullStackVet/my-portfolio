import { Code, Coffee, Terminal } from "lucide-react";
import type { StatusItem } from "../types";
import { developerProfile, statusItems } from "../data/profile";
import { AnimatePresence, motion } from "framer-motion";

interface VsCodeDisplayProps {
  currentStatus: number;
}

const getStatusIcon = (status: StatusItem) => {
  switch (status.icon) {
    case "code":
      return <Code className="h-4 w-4" />;
    case "coffee":
      return <Coffee className="h-4 w-4" />;
    case "learn":
      return <Terminal className="h-4 w-4" />;
    default:
      return <Code className="h-4 w-4" />;
  }
};

export default function VsCodeDisplay({ currentStatus }: VsCodeDisplayProps) {
  return (
    <div className="w-full max-w-md bg-gray-900 rounded-lg overflow-hidden shadow-2xl border border-gray-700">
      {/* VsCode Title Bar */}
      <div className="bg-gray-800 px-4 py-2 flex items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        {/* Simulator Filename */}
        <div className="flex-1 ml-28 text-gray-400 text-sm font-medium">
          about-me.ts
        </div>
      </div>

      {/* VsCode Simulator Content */}
      <div className="p-4 font-mono text-sm text-gray-300">
        <span className="text-green-600">
          // Using VsCode to write code with code
        </span>
        <div className="mb-1">
          <span className="text-purple-400">const</span>{" "}
          <span className="text-yellow-400">aboutMe</span>
          <span className="text-gray-400">: </span>
          <span className="text-blue-400">DevProfile</span>{" "}
          <span className="text-gray-400">= {"{"}</span>
        </div>

        <div className="ml-4 space-y-1">
          <div>
            <span className="text-cyan-400">devname</span>
            <span className="text-gray-400">: </span>
            <span className="text-green-400">
              "{developerProfile.codename}"
            </span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="text-cyan-400">location</span>
            <span className="text-gray-400">: </span>
            <span className="text-green-400">
              "{developerProfile.location}"
            </span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="text-cyan-400">role</span>
            <span className="text-gray-400">: </span>
            <span className="text-green-400">"{developerProfile.role}"</span>
            <span className="text-gray-400">,</span>
          </div>

          <div>
            <span className="text-cyan-400">stack</span>
            <span className="text-gray-400">: {"{"}</span>
          </div>

          <div className="ml-4">
            <div>
              <span className="text-cyan-400">languages</span>
              <span className="text-gray-400">: </span>
              <span className="text-yellow-400">[</span>
              {developerProfile.stack.languages.map((lang, i) => (
                <span key={lang}>
                  <span className="text-green-400">"{lang}"</span>
                  {i < developerProfile.stack.languages.length - 1 && (
                    <span className="text-gray-400">, </span>
                  )}
                </span>
              ))}
              <span className="text-yellow-400">]</span>
              <span className="text-gray-400">,</span>
            </div>

            <div>
              <span className="text-cyan-400">frameworks</span>
              <span className="text-gray-400">: </span>
              <span className="text-yellow-400">[</span>
              {developerProfile.stack.frameworks.map((fw, i) => (
                <span key={fw}>
                  <span className="text-green-400">"{fw}"</span>
                  {i < developerProfile.stack.frameworks.length - 1 && (
                    <span className="text-gray-400">, </span>
                  )}
                </span>
              ))}
              <span className="text-yellow-400">]</span>
              <span className="text-gray-400">,</span>
            </div>
          </div>

          <div>
            <span className="text-gray-400">{"}"},</span>
          </div>

          <div>
            <span className="text-cyan-400">missionStatement</span>
            <span className="text-gray-400">: </span>
            <span className="text-green-400">
              "{developerProfile.missionStatement}"
            </span>
            <span className="text-gray-400">,</span>
          </div>
        </div>

        <div className="mt-1">
          <span className="text=gray-400">{"}"};</span>
        </div>
      </div>

      {/* Status Pill */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStatus}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="mx-4 mb-4 flex justify-center"
        >
          <motion.div
            animate={{ rotate: [0, -2, 0, 2, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="flex items-center space-x-2 bg-blue-600/20 backdrop-blur-sm text-blue-300 px-4 py-2 rounded-full border border-blue-500/30"
          >
            {getStatusIcon(statusItems[currentStatus])}
            <span>{statusItems[currentStatus].text}</span>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
