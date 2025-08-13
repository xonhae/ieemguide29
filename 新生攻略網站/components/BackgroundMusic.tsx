import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { Button } from './ui/button';

// YouTube Player全域變數和API狀態
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export function BackgroundMusic() {
  // 檢查用戶偏好，強化預設為開啟音樂
  const getInitialMusicState = () => {
    const savedState = localStorage.getItem('background-music-enabled');
    // 如果從未設置過，或者設置為true，都返回true
    // 只有用戶明確點擊關閉才設為false
    if (savedState === null || savedState === 'true') {
      return true;
    }
    return savedState !== 'false'; // 只有明確設為false才關閉，否則預設開啟
  };

  const [musicEnabled, setMusicEnabled] = useState(getInitialMusicState);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [apiReady, setApiReady] = useState(false);
  const [playerReady, setPlayerReady] = useState(false);
  
  // 在組件載入時立即設置預設音樂為開啟
  useEffect(() => {
    // 確保localStorage設置正確
    if (localStorage.getItem('background-music-enabled') === null) {
      localStorage.setItem('background-music-enabled', 'true');
    }
    console.log('BackgroundMusic initialized with musicEnabled:', musicEnabled);
  }, []);
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // YouTube影片ID - 從你提供的連結提取
  const YOUTUBE_VIDEO_ID = 'bMD7yJtES4c';

  // 載入YouTube IFrame API
  useEffect(() => {
    // 如果已經載入過，直接初始化
    if (window.YT && window.YT.Player) {
      setApiReady(true);
      initializePlayer();
      return;
    }

    // 載入YouTube IFrame API
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    // 設置API準備就緒回調
    window.onYouTubeIframeAPIReady = () => {
      console.log('YouTube API ready');
      setApiReady(true);
      initializePlayer();
    };

    return () => {
      // 清理
      if (playerRef.current && playerRef.current.destroy) {
        playerRef.current.destroy();
      }
    };
  }, []);

  // 監聽用戶首次互動，立即嘗試播放音樂
  useEffect(() => {
    if (!musicEnabled || hasUserInteracted) return;

    const handleFirstInteraction = () => {
      console.log('First user interaction detected, attempting to play music');
      if (playerReady && musicEnabled && !isPlaying) {
        playMusic().catch(() => {
          console.log('Failed to play on first interaction');
        });
      }
    };

    // 監聽各種可能的用戶互動
    const events = ['click', 'touchstart', 'keydown', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { once: true, passive: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };
  }, [musicEnabled, hasUserInteracted, playerReady, isPlaying]);

  // 積極的自動播放策略
  useEffect(() => {
    console.log('AutoPlay useEffect triggered:', { musicEnabled, apiReady, playerReady });
    
    // 如果音樂被啟用且播放器準備就緒，積極嘗試播放
    if (musicEnabled && apiReady && playerReady) {
      console.log('Attempting autoplay...');
      // 更短的延遲，更積極的自動播放嘗試
      const timeoutId = setTimeout(() => {
        playMusic().then(() => {
          console.log('Autoplay successful');
        }).catch((error) => {
          console.log('Autoplay failed (expected for some browsers):', error);
          // 靜默失敗，不影響用戶體驗
        });
      }, 300); // 進一步縮短到300ms

      return () => clearTimeout(timeoutId);
    }
  }, [apiReady, playerReady, musicEnabled]);

  // 頁面完全載入後的延遲檢查
  useEffect(() => {
    if (!musicEnabled) return;

    const delayedCheck = setTimeout(() => {
      console.log('Delayed music check:', { isPlaying, playerReady, musicEnabled });
      if (!isPlaying && playerReady && musicEnabled) {
        console.log('Music should be playing but is not, attempting restart...');
        playMusic().catch(() => {
          console.log('Delayed restart failed');
        });
      }
    }, 2000); // 2秒後檢查

    return () => clearTimeout(delayedCheck);
  }, [playerReady, musicEnabled]);

  // 初始化YouTube播放器
  const initializePlayer = () => {
    if (!containerRef.current || !window.YT || !window.YT.Player) return;

    try {
      playerRef.current = new window.YT.Player('youtube-player', {
        height: '1',
        width: '1',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
          autoplay: 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          playsinline: 1,
          rel: 0,
          showinfo: 0,
          loop: 1,
          playlist: YOUTUBE_VIDEO_ID, // 需要設置playlist來實現loop
        },
        events: {
          onReady: (event: any) => {
            console.log('YouTube player ready');
            event.target.setVolume(50); // 設置音量為50%，音量適中清晰可聞
            setPlayerReady(true);
            
            // 如果音樂預設開啟，立即嘗試播放
            if (musicEnabled) {
              console.log('Music enabled, attempting immediate play');
              setTimeout(() => {
                playMusic().then(() => {
                  console.log('Immediate play successful');
                }).catch((error) => {
                  console.log('Immediate play failed:', error);
                });
              }, 50); // 非常短的延遲，幾乎立即執行
            }
          },
          onStateChange: (event: any) => {
            console.log('Player state changed:', event.data);
            // YT.PlayerState.PLAYING = 1, YT.PlayerState.PAUSED = 2, YT.PlayerState.ENDED = 0
            if (event.data === 1) { // 正在播放
              setIsPlaying(true);
              console.log('Player is now playing');
            } else if (event.data === 2) { // 已暫停
              setIsPlaying(false);
              console.log('Player is now paused');
            } else if (event.data === 0) { // 已結束
              // 影片結束時重新播放（備用loop邏輯）
              if (musicEnabled) {
                console.log('Video ended, restarting...');
                event.target.playVideo();
              }
            }
          },
          onError: (event: any) => {
            setIsPlaying(false);
          }
        }
      });
    } catch (error) {
      // 靜默失敗
    }
  };

  // 播放音樂
  const playMusic = async () => {
    if (!playerRef.current || !playerRef.current.playVideo) {
      console.log('Player not ready for playback');
      return Promise.reject(new Error('播放器未準備就緒'));
    }

    try {
      console.log('Attempting to play video...');
      // 直接調用播放，不等待Promise（YouTube API可能不總是返回Promise）
      playerRef.current.playVideo();
      
      // 設置狀態
      setIsPlaying(true);
      setMusicEnabled(true);
      setHasUserInteracted(true);
      localStorage.setItem('background-music-enabled', 'true');
      
      console.log('Play command executed, states updated');
      return Promise.resolve();
    } catch (error) {
      console.log('Play failed:', error);
      setIsPlaying(false);
      return Promise.reject(error);
    }
  };

  // 暫停音樂
  const pauseMusic = () => {
    if (!playerRef.current || !playerRef.current.pauseVideo) return;

    playerRef.current.pauseVideo();
    setIsPlaying(false);
    setMusicEnabled(false);
    localStorage.setItem('background-music-enabled', 'false');
  };

  // 音樂控制切換
  const toggleMusic = async () => {
    setHasUserInteracted(true);
    
    if (isPlaying) {
      pauseMusic();
    } else {
      await playMusic();
    }
  };

  // 移除performanceMode檢查，音樂組件始終可用

  return (
    <>
      {/* 隱藏的YouTube播放器 */}
      <div 
        ref={containerRef}
        style={{
          position: 'absolute',
          top: '-9999px',
          left: '-9999px',
          width: '1px',
          height: '1px',
          visibility: 'hidden',
          pointerEvents: 'none'
        }}
      >
        <div id="youtube-player"></div>
      </div>

      {/* 音樂控制按鈕 - 圓形設計 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <Button
          onClick={toggleMusic}
          variant="ghost"
          size="sm"
          className="relative overflow-hidden w-10 h-10 sm:w-12 sm:h-12 p-0 rounded-full transition-all duration-500 group flex items-center justify-center"
          title={isPlaying ? '關閉背景音樂' : '開啟背景音樂'}
          style={{
            background: isPlaying 
              ? `
                  linear-gradient(135deg, 
                    rgba(109, 125, 111, 0.6) 0%, 
                    rgba(90, 102, 116, 0.4) 50%,
                    rgba(109, 125, 111, 0.3) 100%)
                ` 
              : `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.12) 0%, 
                    rgba(255, 255, 255, 0.08) 100%)
                `,
            backdropFilter: 'blur(20px)',
            border: isPlaying 
              ? '1px solid rgba(109, 125, 111, 0.6)' 
              : '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: isPlaying 
              ? `
                  0 8px 32px rgba(109, 125, 111, 0.4), 
                  inset 0 1px 0 rgba(255, 255, 255, 0.2),
                  0 0 20px rgba(109, 125, 111, 0.6)
                ` 
              : `
                  0 4px 20px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.1)
                `
          }}
        >
          {/* 背景噪點紋理 */}
          <div 
            className="absolute inset-0 rounded-full opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 0.5px, transparent 0)`,
              backgroundSize: '6px 6px'
            }}
          />
          
          {/* 多層背景動畫 */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: isPlaying 
                ? `radial-gradient(ellipse at center, rgba(109, 125, 111, 0.3) 0%, transparent 70%)`
                : `radial-gradient(ellipse at center, rgba(255, 255, 255, 0.1) 0%, transparent 70%)`
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* 圖標 */}
          <motion.div
            className="relative z-10 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={isPlaying ? { rotate: [0, 5, -5, 0] } : {}}
            transition={isPlaying ? { duration: 2, repeat: Infinity, ease: "easeInOut" } : {}}
          >
            {isPlaying ? (
              <Volume2 
                className="w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300" 
                style={{ 
                  color: '#6d7d6f',
                  filter: `
                    drop-shadow(0 2px 6px rgba(0,0,0,0.8))
                    drop-shadow(0 0 12px rgba(109, 125, 111, 0.8))
                  `
                }} 
              />
            ) : (
              <VolumeX 
                className="w-4 h-4 sm:w-5 sm:h-5 text-white/80 transition-all duration-300" 
                style={{ 
                  filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))'
                }} 
              />
            )}
          </motion.div>
          
          {/* 播放指示器 - 多重光環效果 */}
          {isPlaying && (
            <>
              {/* 外層光環 */}
              <motion.div
                className="absolute -inset-2 rounded-full"
                style={{
                  border: '1px solid rgba(109, 125, 111, 0.4)',
                  background: `radial-gradient(ellipse, rgba(109, 125, 111, 0.1) 0%, transparent 70%)`
                }}
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              />
              
              {/* 中層光環 */}
              <motion.div
                className="absolute -inset-1 rounded-full"
                style={{
                  border: '1px solid rgba(109, 125, 111, 0.6)',
                  background: `radial-gradient(ellipse, rgba(109, 125, 111, 0.15) 0%, transparent 70%)`
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.3
                }}
              />
              
              {/* 內層光環 */}
              <motion.div
                className="absolute -inset-0.5 rounded-full"
                style={{
                  border: '1px solid rgba(109, 125, 111, 0.8)',
                  background: `radial-gradient(ellipse, rgba(109, 125, 111, 0.2) 0%, transparent 70%)`
                }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 1, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.6
                }}
              />
            </>
          )}
          
          {/* Hover效果 */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, rgba(109, 125, 111, 0.2) 0%, transparent 100%)`
            }}
          />
        </Button>
      </motion.div>
    </>
  );
}