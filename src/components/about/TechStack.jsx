"use client";

import { motion } from "framer-motion";
import { allTechnologies } from "@/lib/data";
import { TechIcon } from "@/lib/icons";

export function TechStack({ className }) {
  return (
    <div className={className}>
      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-sky-600" />
        Stack Tecnológico
      </h3>

      <div className="grid grid-cols-5 gap-3">
        {allTechnologies.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative"
          >
            <div className="flex flex-col items-center gap-2 p-3 rounded-xl border border-border/50 hover:border-primary/50 hover:bg-yellow-700/10 transition-all duration-300 bg-sky-700/10">
              <div
                className="p-2 rounded-lg transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${tech.color}15` }}
              >
                <TechIcon icon={tech.icon} color={tech.color} />
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors text-center leading-tight">
                {tech.name}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function TechBadge({ name, color }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105"
      style={{
        backgroundColor: `${color}15`,
        color: color,
        border: `1px solid ${color}30`,
      }}
    >
      {name}
    </span>
  );
}
