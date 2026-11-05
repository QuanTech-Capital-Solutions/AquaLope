//"use client"; // Required if you are using Next.js App Router
import { motion } from "framer-motion";

export default function ScrollSection({ children, className = "" }) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }} // Starts invisible and 50px lower
      whileInView={{ opacity: 1, y: 0 }} // Animates to full opacity and original position
      viewport={{ once: true, margin: "-100px" }} // Triggers once when 100px into view
      transition={{ duration: 1.0, ease: "easeOut" }} // Smooth transition
    >
      {children}
    </motion.section>
  );
}