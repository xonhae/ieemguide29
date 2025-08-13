import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, Smartphone, Volume2 } from 'lucide-react';

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WelcomeModal({ isOpen, onClose }: WelcomeModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
            style={{
              background: 'rgba(0, 0, 0, 0.6)',
              backdropFilter: 'blur(8px)'
            }}
            onClick={onClose}
          />

          {/* 彈窗內容 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-md mx-auto"
            style={{
              background: `
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.18) 0%, 
                  rgba(255, 255, 255, 0.12) 50%, 
                  rgba(109, 125, 111, 0.15) 100%)
              `,
              backdropFilter: 'blur(30px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              borderRadius: '24px',
              boxShadow: `
                0 20px 80px rgba(0, 0, 0, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                0 0 60px rgba(109, 125, 111, 0.2)
              `
            }}
          >
            {/* 動畫背景層 */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: `
                  radial-gradient(ellipse at 30% 30%, rgba(109, 125, 111, 0.2) 0%, transparent 60%),
                  radial-gradient(ellipse at 70% 70%, rgba(90, 102, 116, 0.15) 0%, transparent 60%)
                `
              }}
              animate={{
                background: [
                  `radial-gradient(ellipse at 30% 30%, rgba(109, 125, 111, 0.2) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(90, 102, 116, 0.15) 0%, transparent 60%)`,
                  `radial-gradient(ellipse at 70% 30%, rgba(90, 102, 116, 0.18) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(109, 125, 111, 0.18) 0%, transparent 60%)`,
                  `radial-gradient(ellipse at 30% 30%, rgba(109, 125, 111, 0.2) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(90, 102, 116, 0.15) 0%, transparent 60%)`
                ]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />



            {/* 內容區域 */}
            <div className="relative z-10 p-8">
              {/* 標題 */}
              <div className="text-center mb-8">
                <motion.h2
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="mb-4"
                  style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                    fontWeight: '700',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #6d7d6f 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  歡迎來到清大工工系學會
                </motion.h2>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="flex justify-center space-x-4 mb-6"
                >
                  <div className="p-3 rounded-2xl" style={{
                    background: 'rgba(109, 125, 111, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(109, 125, 111, 0.4)'
                  }}>
                    <Monitor size={24} className="text-white" />
                  </div>
                  <div className="p-3 rounded-2xl" style={{
                    background: 'rgba(90, 102, 116, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(90, 102, 116, 0.4)'
                  }}>
                    <Smartphone size={24} className="text-white" />
                  </div>
                  <div className="p-3 rounded-2xl" style={{
                    background: 'rgba(139, 107, 97, 0.3)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(139, 107, 97, 0.4)'
                  }}>
                    <Volume2 size={24} className="text-white" />
                  </div>
                </motion.div>
              </div>

              {/* 主要訊息 */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-4 mb-8"
              >
                <div className="p-4 rounded-2xl" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  <p className="text-white text-center leading-relaxed" style={{
                    fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                  }}>
                    本網站使用<span className="font-semibold text-emerald-300">玻璃材質UI</span>，
                    以<span className="font-semibold text-blue-300">電腦端觀看</span>將有更佳的體驗。
                  </p>
                </div>

                <div className="p-4 rounded-2xl" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.15)'
                }}>
                  <p className="text-white text-center leading-relaxed" style={{
                    fontSize: 'clamp(0.875rem, 2.5vw, 1rem)'
                  }}>
                    若網站音樂無法自動播放，請按右上角的
                    <span className="font-semibold text-rose-300">開關鍵</span>。
                  </p>
                </div>
              </motion.div>

              {/* 確認���鈕 */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                onClick={onClose}
                className="w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-500 relative overflow-hidden group"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(109, 125, 111, 0.8) 0%, 
                      rgba(90, 102, 116, 0.6) 50%,
                      rgba(109, 125, 111, 0.4) 100%)
                  `,
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  boxShadow: `
                    0 10px 40px rgba(0,0,0,0.4), 
                    inset 0 1px 0 rgba(255,255,255,0.3),
                    0 0 30px rgba(109, 125, 111, 0.4)
                  `
                }}
              >
                {/* Hover背景動畫 */}
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(ellipse at center, rgba(109, 125, 111, 0.6) 0%, transparent 70%)`
                  }}
                />
                
                <span className="relative z-10" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.125rem)' }}>
                  開始探索網站
                </span>
              </motion.button>
            </div>

            {/* 底部裝飾線 */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-px rounded-b-3xl"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(109, 125, 111, 0.6), rgba(255, 255, 255, 0.4), rgba(90, 102, 116, 0.6), transparent)'
              }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}