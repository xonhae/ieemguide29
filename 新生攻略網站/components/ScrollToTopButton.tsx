import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronUp } from 'lucide-react';
import { scrollToTop } from '../utils/scroll';
import { SCROLL_TO_TOP_BUTTON_STYLE, FLOW_ANIMATION_STYLE } from '../utils/constants';

interface ScrollToTopButtonProps {
  showScrollToTop: boolean;
  performanceMode: boolean;
}

export function ScrollToTopButton({ showScrollToTop, performanceMode }: ScrollToTopButtonProps) {
  return (
    <AnimatePresence>
      {showScrollToTop && (
        <motion.button
          key="scroll-to-top"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ 
            scale: performanceMode ? 1 : 1.05,
            y: performanceMode ? 0 : -1 
          }}
          whileTap={{ scale: 0.96 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 glass-elegant rounded-full shadow-2xl cursor-pointer transition-all duration-300 group"
          title="回到頂部"
        >
          {/* 精緻背景效果 */}
          <div
            className="absolute inset-0 rounded-full opacity-60"
            style={SCROLL_TO_TOP_BUTTON_STYLE}
          />
          
          {/* 流體背景動畫 - 更精緻 */}
          {!performanceMode && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={FLOW_ANIMATION_STYLE}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          
          <div className="noise-texture absolute inset-0 opacity-10 rounded-full"></div>
          <ChevronUp 
            size={20} 
            className="relative z-10 text-white group-hover:scale-105 transition-transform duration-200" 
            style={{ 
              filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.4))'
            }} 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}