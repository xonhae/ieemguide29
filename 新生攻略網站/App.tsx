import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navigation } from './components/Navigation';
import { MainContent } from './components/MainContent';
import { Footer } from './components/Footer';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import { RenderBackground } from './components/RenderBackground';
import { WelcomeModal } from './components/WelcomeModal';

import { scrollToTopInstant, initializeScrollHandler } from './utils/scroll';
import { getBackgroundVariant } from './utils/background';

// 強化移動端檢測
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768 || 
         window.matchMedia?.('(max-width: 768px)').matches ||
         /iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent || '');
};

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [mobileMode, setMobileMode] = useState(() => {
    // 服務器端渲染時假設為桌面端，客戶端會立即更新
    if (typeof window === 'undefined') return false;
    return isMobile();
  });
  const [isInitialized, setIsInitialized] = useState(false);
  const [showWelcomeModal, setShowWelcomeModal] = useState(false);

  // 檢查是否為首次訪問
  const checkFirstVisit = () => {
    if (typeof window === 'undefined') return false;
    const hasVisited = localStorage.getItem('nthu-ieem-visited');
    if (!hasVisited) {
      localStorage.setItem('nthu-ieem-visited', 'true');
      return true;
    }
    return false;
  };

  // 合併初始化邏輯
  useEffect(() => {
    // 設置基本配置
    document.documentElement.classList.add('dark');
    document.documentElement.setAttribute('lang', 'zh-TW');
    
    // 優化meta設置
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }
    
    if (!document.querySelector('meta[name="viewport"]')) {
      const viewport = document.createElement('meta');
      viewport.setAttribute('name', 'viewport');
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=no');
      document.head.appendChild(viewport);
    }

    // 移動端檢測和處理
    const handleMobileDetection = () => {
      try {
        const mobile = isMobile();
        console.log('Mobile detection:', mobile, window.innerWidth); // Debug log
        
        // 只在實際發生變化時更新狀態
        setMobileMode(prevMode => {
          if (prevMode !== mobile) {
            console.log('Mobile mode changing from', prevMode, 'to', mobile);
            return mobile;
          }
          return prevMode;
        });
        
        document.documentElement.classList.toggle('mobile-mode', mobile);
        
        // 強制重新渲染背景
        if (mobile) {
          document.body.classList.add('mobile-optimized');
        } else {
          document.body.classList.remove('mobile-optimized');
        }
      } catch (error) {
        console.error('Mobile detection error:', error);
        // 保持當前狀態，不強制改變
      }
    };

    // 初始檢測
    handleMobileDetection();
    
    // 監聽窗口大小變化
    window.addEventListener('resize', handleMobileDetection);
    window.addEventListener('orientationchange', () => {
      setTimeout(handleMobileDetection, 300); // 等待方向改變完成
    });

    // 滾動處理
    const cleanupScroll = initializeScrollHandler(setShowScrollToTop);

    // 標記初始化完成
    const initTimeoutId = setTimeout(() => {
      setIsInitialized(true);
      console.log('App initialization completed');
      
      // 檢查是否需要顯示歡迎彈窗
      if (checkFirstVisit()) {
        setTimeout(() => {
          setShowWelcomeModal(true);
        }, 1000); // 延遲1秒顯示，讓頁面完全載入
      }
    }, 50);

    return () => {
      clearTimeout(initTimeoutId);
      window.removeEventListener('resize', handleMobileDetection);
      window.removeEventListener('orientationchange', handleMobileDetection);
      cleanupScroll();
    };
  }, []);

  // 頁面切換時回到頂部
  useEffect(() => {
    scrollToTopInstant();
  }, [activeTab]);

  // 關閉歡迎彈窗
  const handleCloseWelcomeModal = () => {
    setShowWelcomeModal(false);
  };

  return (
    <div className="min-h-screen relative flex flex-col text-white">
      {/* 背景渲染系統 - 固定在最底層 */}
      <div className="fixed inset-0 z-0">
        <RenderBackground 
          variant={getBackgroundVariant(activeTab)} 
          mobileMode={mobileMode}
        />
      </div>

      {/* 主要內容區域 */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navigation 
          activeTab={activeTab} 
          setActiveTab={setActiveTab}
        />
        
        {/* 頁面內容 - 統一渲染保護 */}
        {isInitialized ? (
          mobileMode ? (
            <main className="flex-1" key={`main-${activeTab}`}>
              <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
            </main>
          ) : (
            <AnimatePresence mode="wait">
              <motion.main 
                key={activeTab}
                className="flex-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              >
                <MainContent activeTab={activeTab} setActiveTab={setActiveTab} />
              </motion.main>
            </AnimatePresence>
          )
        ) : (
          <main className="flex-1 min-h-screen flex items-center justify-center">
            <div 
              className="text-white text-xl px-8 py-4 rounded-xl"
              style={{
                background: 'rgba(0, 0, 0, 0.8)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}
            >
              正在初始化...
            </div>
          </main>
        )}
        
        <Footer />
      </div>

      {/* 回到頂部按鈕 */}
      <ScrollToTopButton showScrollToTop={showScrollToTop} />

      {/* 歡迎彈窗 */}
      <WelcomeModal 
        isOpen={showWelcomeModal}
        onClose={handleCloseWelcomeModal}
      />
    </div>
  );
}