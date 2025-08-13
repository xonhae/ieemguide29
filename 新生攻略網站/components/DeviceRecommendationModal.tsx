import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Monitor, Smartphone, X, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';
import { Checkbox } from './ui/checkbox';

interface DeviceRecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDontShowAgain: (dontShow: boolean) => void;
}

export function DeviceRecommendationModal({ 
  isOpen, 
  onClose, 
  onDontShowAgain 
}: DeviceRecommendationModalProps) {
  const [dontShowAgain, setDontShowAgain] = React.useState(false);

  const handleClose = () => {
    if (dontShowAgain) {
      onDontShowAgain(true);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ 
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(12px)'
          }}
        >
          {/* 背景點擊關閉 */}
          <div 
            className="absolute inset-0" 
            onClick={handleClose}
          />
          
          {/* 彈窗內容 */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ 
              duration: 0.4, 
              type: "spring", 
              stiffness: 300, 
              damping: 30 
            }}
            className="relative w-full max-w-lg mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <Card className="glass-premium border-0 relative overflow-hidden">
              {/* 關閉按鈕 */}
              <Button
                onClick={handleClose}
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 rounded-full w-8 h-8 p-0 hover:bg-white/20"
                style={{ color: '#e8e6e3' }}
              >
                <X size={16} />
              </Button>

              <CardHeader className="pb-6 pt-8">
                {/* 圖標區域 */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    {/* 電腦圖標 - 推薦 */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                      className="relative"
                    >
                      <div 
                        className="p-4 rounded-xl border-2"
                        style={{
                          background: 'rgba(168, 181, 196, 0.2)',
                          borderColor: 'rgba(168, 181, 196, 0.4)'
                        }}
                      >
                        <Monitor size={48} style={{ color: '#a8b5c4' }} />
                      </div>
                      {/* 推薦標記 */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, type: "spring", stiffness: 400 }}
                        className="absolute -top-2 -right-2"
                      >
                        <div 
                          className="p-1 rounded-full"
                          style={{
                            background: 'rgba(156, 175, 158, 0.9)',
                            border: '2px solid rgba(255, 255, 255, 0.3)'
                          }}
                        >
                          <CheckCircle size={16} style={{ color: 'white' }} />
                        </div>
                      </motion.div>
                    </motion.div>

                    {/* 手機圖標 - 較小，放在右下角 */}
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0.3 }}
                      animate={{ scale: 0.7, opacity: 0.6 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
                    >
                      <div 
                        className="p-2 rounded-lg"
                        style={{
                          background: 'rgba(184, 181, 175, 0.15)',
                          border: '1px solid rgba(184, 181, 175, 0.3)'
                        }}
                      >
                        <Smartphone size={24} style={{ color: '#b8b5af' }} />
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* 標題 */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="text-center"
                >
                  <h2 
                    className="text-2xl font-bold mb-2"
                    style={{
                      background: `linear-gradient(45deg, #e8e6e3, #c4c1b8)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    建議使用電腦閱覽
                  </h2>
                  <p className="text-sm" style={{ color: '#b8b5af' }}>
                    以獲得最佳瀏覽體驗
                  </p>
                </motion.div>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* 說明文字 */}
                  <div className="text-center space-y-3">
                    <p className="text-sm leading-relaxed" style={{ color: '#c4c1b8' }}>
                      本站使用玻璃材質UI，
                      <br />
                      建議使用電腦閱覽以獲得最佳效果。
                    </p>
                    <div className="inline-block px-4 py-2 rounded-full" style={{
                      background: 'rgba(212, 181, 176, 0.15)',
                      border: '1px solid rgba(212, 181, 176, 0.25)'
                    }}>
                      <p className="text-xs font-medium" style={{ color: '#d4b5b0' }}>
                        💡 手機也可以正常使用，但視覺效果會有所簡化
                      </p>
                    </div>
                  </div>

                  {/* 不再顯示選項 */}
                  <div className="flex items-center justify-center space-x-3">
                    <Checkbox
                      id="dont-show-again"
                      checked={dontShowAgain}
                      onCheckedChange={(checked) => setDontShowAgain(checked as boolean)}
                      className="border-white/30 data-[state=checked]:bg-white/20"
                    />
                    <label 
                      htmlFor="dont-show-again"
                      className="text-xs cursor-pointer select-none"
                      style={{ color: '#b8b5af' }}
                    >
                      不再顯示此提示
                    </label>
                  </div>

                  {/* 按鈕 */}
                  <div className="flex justify-center">
                    <Button
                      onClick={handleClose}
                      className="px-8 py-2 rounded-xl transition-all duration-200"
                      style={{
                        background: 'rgba(168, 181, 196, 0.8)',
                        border: '1px solid rgba(168, 181, 196, 0.6)',
                        color: 'white',
                        fontWeight: '500'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(168, 181, 196, 0.9)';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(168, 181, 196, 0.8)';
                        e.currentTarget.style.transform = 'translateY(0px)';
                      }}
                    >
                      我知道了
                    </Button>
                  </div>
                </motion.div>
              </CardContent>

              {/* 裝飾性光點 */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full"
                  style={{ background: 'rgba(156, 175, 158, 0.6)' }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.2, scale: 1 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 rounded-full"
                  style={{ background: 'rgba(212, 181, 176, 0.5)' }}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full"
                  style={{ background: 'rgba(181, 168, 196, 0.7)' }}
                />
              </div>
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}