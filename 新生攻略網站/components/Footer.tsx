import { motion } from 'motion/react';

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="glass-elegant border-t border-border/30 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
              <span 
                className="text-sm block"
                style={{ color: 'white', textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
              >
                © 2025 清大工工系學會學術部門
              </span>
              <span 
                className="text-sm block"
                style={{ color: 'white', textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
              >
                版權所有
              </span>
            </div>
          
          <div className="flex items-center space-x-2">
            <span 
              className="text-sm"
              style={{ color: 'white', textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
            >
              Made by
            </span>
            <span 
              className="text-sm font-medium"
              style={{
                background: `
                  linear-gradient(135deg, 
                    #ffffff 0%, 
                    #f0f0f0 20%, 
                    #d4b5b0 40%,
                    #a8b5c4 60%,
                    #8a9b8c 80%,
                    #6d7d6f 100%)
                `,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))'
              }}
            >
              xonhae
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}