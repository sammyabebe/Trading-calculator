import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <motion.button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      whileHover={{ scale: 1.1 }}
      className="p-3 bg-gray-300 dark:bg-gray-700 rounded-md transition"
    >
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </motion.button>
  );
};

export default ThemeToggle;
