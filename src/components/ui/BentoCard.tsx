import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BentoCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  onClick?: () => void;
}

export const BentoCard = ({ children, className, delay = 0, onClick, ...props }: BentoCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: delay, 
        ease: [0.23, 1, 0.32, 1] 
      }}
      whileHover={{ y: onClick ? -2 : 0 }}
      whileTap={{ scale: onClick ? 0.98 : 1 }}
      onClick={onClick}
      className={cn(
        "relative rounded-3xl p-6 overflow-hidden glass-card",
        "transition-[border-color,box-shadow] duration-300 hover:border-primary/40 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]",
        onClick && "cursor-pointer",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100 pointer-events-none" />
      {children}
    </motion.div>
  );
};
