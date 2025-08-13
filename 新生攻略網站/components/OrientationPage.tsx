import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Users, MapPin, Calendar, Star, Users2, Sparkles, Brain, Clock, MessageCircle, Phone, ExternalLink, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export function OrientationPage() {
  const [captainCopied, setCaptainCopied] = useState(false);
  const [viceCaptainCopied, setViceCaptainCopied] = useState(false);
  
  // 複製營長電話號碼功能
  const copyCaptainPhoneNumber = async () => {
    const phoneNumber = '0905497112';
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setCaptainCopied(true);
      setTimeout(() => setCaptainCopied(false), 2000);
    } catch (error) {
      // 如果clipboard API不支持，使用fallback方法
      console.log('Clipboard API not supported, using fallback');
      const textArea = document.createElement('textarea');
      textArea.value = phoneNumber;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999);
      try {
        document.execCommand('copy');
        setCaptainCopied(true);
        setTimeout(() => setCaptainCopied(false), 2000);
      } catch (fallbackError) {
        console.error('複製失敗:', fallbackError);
      }
      document.body.removeChild(textArea);
    }
  };

  // 複製副營長電話號碼功能
  const copyViceCaptainPhoneNumber = async () => {
    const phoneNumber = '0932278172';
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setViceCaptainCopied(true);
      setTimeout(() => setViceCaptainCopied(false), 2000);
    } catch (error) {
      // 如果clipboard API不支持，使用fallback方法
      console.log('Clipboard API not supported, using fallback');
      const textArea = document.createElement('textarea');
      textArea.value = phoneNumber;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      textArea.setSelectionRange(0, 99999);
      try {
        document.execCommand('copy');
        setViceCaptainCopied(true);
        setTimeout(() => setViceCaptainCopied(false), 2000);
      } catch (fallbackError) {
        console.error('複製失敗:', fallbackError);
      }
      document.body.removeChild(textArea);
    }
  };

  const activities = [
    {
      icon: Users2,
      title: '認識系上的同學與學長姐',
      description: '在輕鬆的氛圍中結識新朋友，建立珍貴的大學人脈',
      color: '#a8b5c4'
    },
    {
      icon: Sparkles,
      title: '在晚會成為全場最靚的仔',
      description: '展現你的才華，在精彩的晚會上閃閃發光',
      color: '#d4b5b0'
    },
    {
      icon: Brain,
      title: '展現你博學多聞的金頭腦',
      description: '參與有趣的益智活動，展示你的聰明才智',
      color: '#9caf9e'
    }
  ];

  return (
    <motion.div 
      key="orientationpage-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen pt-20 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="glass-light inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-6">
            <div className="flex items-center space-x-2" style={{ color: '#a8b5c4' }}>
              <Users size={18} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))', color: 'white' }} />
              <span 
                className="font-medium text-white"
                style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
              >
                迎新宿營
              </span>
            </div>
          </div>
          <h1 
            className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-white"
            style={{
              textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)'
            }}
          >
            2025 工工系迎新宿營
          </h1>
        </motion.div>

        {/* 活動介紹卡片 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="glass-standard border-0">
            <CardContent className="p-6 md:p-12 text-center">
              <div className="flex items-center justify-center mb-6">
                <MessageCircle size={48} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
              </div>
              <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
                <h2 
                  className="text-2xl md:text-3xl font-bold text-center text-white"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                  }}
                >
                  剛上大學不知道要參加什麼活動嗎？
                </h2>
                <span className="text-2xl md:text-3xl">🙀</span>
              </div>
              <div className="inline-block px-4 md:px-8 py-3 md:py-4 rounded-2xl mb-6 md:mb-8 glass-light">
                <p 
                  className="text-lg md:text-2xl font-bold" 
                  style={{ 
                    color: '#d4b5b0',
                    textShadow: '0 2px 6px rgba(0,0,0,0.8)'
                  }}
                >
                  ➡️ 參加宿營準沒錯！⬅️
                </p>
              </div>
              <div 
                className="text-lg leading-relaxed max-w-3xl mx-auto mb-8 text-white/90"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
              >
                {/* 桌面版：三行顯示 */}
                <div className="hidden md:block">
                  <p className="mb-2">這一定會是你們融入大學生活跟認識朋友的絕佳機會 <span className="text-xl">🤝</span></p>
                  <p className="mb-2">一起來體驗各種有趣的活動以及學長姐精心準備的表演吧 <span className="text-xl">🎉</span></p>
                  <p>相信這將會成為你們超級難忘的回憶 <span className="text-xl">😆</span></p>
                </div>
                
                {/* 移動端：緊湊顯示 */}
                <div className="md:hidden text-base leading-snug">
                  <p className="mb-3">
                    這一定會是你們融入大學生活跟認識朋友的絕佳機會 <span className="text-lg">🤝</span>
                    <br className="mb-1" />
                    一起來體驗各種有趣的活動以及學長姐精心準備的表演吧 <span className="text-lg">🎉</span>
                    <br className="mb-1" />
                    相信這將會成為你們超級難忘的回憶 <span className="text-lg">😆</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* 活動時間地點 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-light border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Calendar size={24} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
                  <span 
                    className="text-white"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                  >
                    活動時間
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock size={20} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
                    <div>
                      <p 
                        className="text-white"
                        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
                      >
                        9月19日（五）晚上出發
                      </p>
                      <p 
                        className="text-sm text-white/80"
                        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}
                      >
                        活動開始
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock size={20} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
                    <div>
                      <p 
                        className="text-white"
                        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
                      >
                        9月21日（日）
                      </p>
                      <p 
                        className="text-sm text-white/80"
                        style={{ textShadow: '0 1px 3px rgba(0,0,0,0.7)' }}
                      >
                        活動結束
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-light border-0">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <MapPin size={24} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
                  <span 
                    className="text-white"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                  >
                    活動地點
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p 
                    className="text-xl text-white"
                    style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                  >
                    峨眉湖吾家農場
                  </p>
                  <p 
                    className="text-sm text-white/80"
                    style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
                  >
                    315新竹縣峨眉鄉環湖路8-8號
                  </p>
                  <Badge 
                    variant="outline" 
                    className="text-xs glass-light border-0 text-white"
                    style={{
                      background: `rgba(212, 181, 176, 0.2)`,
                      color: '#d4b5b0',
                      textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                    }}
                  >
                    風景優美的自然環境
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.section>

        {/* 活動亮點 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-3xl">✅</span>
              <h2 
                className="text-3xl font-bold text-white"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                }}
              >
                參加宿營你可以
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <Card 
                    className="h-full border-0 group glass-light hover:scale-105 hover:-translate-y-1 subject-card"
                    style={{
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(${parseInt(activity.color.slice(1, 3), 16)}, ${parseInt(activity.color.slice(3, 5), 16)}, ${parseInt(activity.color.slice(5, 7), 16)}, 0.2)`,
                      '--shadow-color': `${parseInt(activity.color.slice(1, 3), 16)}, ${parseInt(activity.color.slice(3, 5), 16)}, ${parseInt(activity.color.slice(5, 7), 16)}`
                    } as React.CSSProperties}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex justify-center mb-4">
                        <div 
                          className="p-4 rounded-xl transition-transform duration-200 group-hover:scale-110 glass-light"
                          style={{
                            background: `${activity.color}30`,
                            border: `1px solid ${activity.color}40`
                          }}
                        >
                          <Icon 
                            size={32}
                            style={{ 
                              color: 'white',
                              filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.4)) drop-shadow(0 1px 2px ${activity.color}50)`
                            }}
                          />
                        </div>
                      </div>
                      
                      <CardTitle 
                        className="text-xl text-center leading-tight flex items-center justify-center gap-2 text-white"
                        style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                      >
                        <span className="text-xl">⭐️</span>
                        <span>{activity.title}</span>
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-2">
                      <p 
                        className="text-sm leading-relaxed text-center text-white/90"
                        style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
                      >
                        {activity.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* 營隊幹部聯絡資訊 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <Card className="glass-standard border-0">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center space-x-3 mb-2">
                <Phone size={24} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
                <span 
                  className="text-2xl font-bold text-white"
                  style={{
                    textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                  }}
                >
                  營隊幹部聯絡資訊
                </span>
              </div>
              <div className="inline-block px-4 py-2 rounded-full glass-light mb-2">
                <p 
                  className="text-lg font-medium" 
                  style={{ 
                    color: '#d4b5b0',
                    textShadow: '0 2px 6px rgba(0,0,0,0.8)'
                  }}
                >
                  有任何問題歡迎聯絡我們！
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              {/* 營長資訊 */}
              <div className="mb-12">
                <div className="text-center mb-6">
                  <div className="inline-block px-6 py-3 rounded-full glass-light mb-4">
                    <h3 
                      className="text-xl font-bold text-white"
                      style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                    >
                      🎖️ 營長 - 劉昕楷
                    </h3>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {/* 營長LINE聯絡 */}
                  <div className="text-center">
                    <div className="inline-block p-4 rounded-xl mb-4 glass-light">
                      <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
                      >
                        <path 
                          d="M12 2C6.48 2 2 6.48 2 12c0 1.54 0.36 3.04 1.05 4.4L2 22l5.6-1.05C9.96 21.64 11.46 22 13 22h-1c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.13 12.88c-.06.18-.22.34-.4.4-.39.12-.84.12-1.23 0l-.7-.29c-.57-.22-1.1-.51-1.58-.84l-.84-.62c-.26-.18-.58-.27-.9-.27-.32 0-.64.09-.9.27l-.84.62c-.48.33-1.01.62-1.58.84l-.7.29c-.39.12-.84.12-1.23 0-.18-.06-.34-.22-.4-.4-.12-.39-.12-.84 0-1.23l.29-.7c.22-.57.51-1.1.84-1.58l.62-.84c.18-.26.27-.58.27-.9 0-.32-.09-.64-.27-.9l-.62-.84c-.33-.48-.62-1.01-.84-1.58l-.29-.7c-.12-.39-.12-.84 0-1.23.06-.18.22-.34.4-.4.39-.12.84-.12 1.23 0l.7.29c.57.22 1.1.51 1.58.84l.84.62c.26.18.58.27.9.27.32 0 .64-.09.9-.27l.84-.62c.48-.33 1.01-.62 1.58-.84l.7-.29c.39-.12.84-.12 1.23 0 .18.06.34.22.4.4.12.39.12.84 0 1.23l-.29.7c-.22.57-.51 1.1-.84 1.58l-.62.84c-.18.26-.27.58-.27.9 0 .32.09.64.27.9l.62.84c.33.48.62 1.01.84 1.58l.29.7c.12.39.12.84 0 1.23z" 
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h4 
                      className="font-medium mb-3 text-white"
                      style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                    >
                      LINE 好友
                    </h4>
                    <Button
                      variant="ghost"
                      onClick={() => window.open('https://line.me/ti/p/bQdGbkPFBI', '_blank')}
                      className="w-full hover:scale-105 transition-all duration-300 border-0 text-white glass-standard"
                      title="點擊加入營長LINE好友"
                      style={{
                        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                        background: 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.12)'
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      加入 LINE 好友
                    </Button>
                  </div>

                  {/* 營長電話聯絡 */}
                  <div className="text-center">
                    <div className="inline-block p-4 rounded-xl mb-4 glass-light">
                      <Phone size={32} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
                    </div>
                    <h4 
                      className="font-medium mb-3 text-white"
                      style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                    >
                      電話聯絡
                    </h4>
                    {/* 營長電話號碼複製按鈕 */}
                    <Button
                      variant="ghost"
                      onClick={copyCaptainPhoneNumber}
                      className={`w-full hover:scale-105 transition-all duration-300 border-0 text-white glass-standard ${
                        captainCopied ? 'bg-green-500/20' : ''
                      }`}
                      title={captainCopied ? "電話號碼已複製！" : "點擊複製電話號碼"}
                      style={{
                        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                        background: captainCopied ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(16px)',
                        border: captainCopied ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(255, 255, 255, 0.12)',
                        boxShadow: captainCopied ? '0 4px 16px rgba(34, 197, 94, 0.2)' : '0 4px 16px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {captainCopied ? (
                        <>
                          <Check size={16} className="mr-2" style={{ color: '#22c55e' }} />
                          <span style={{ color: '#22c55e' }}>已複製 0905-497-112</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} className="mr-2" />
                          點擊複製 0905-497-112
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              {/* 副營長資訊 */}
              <div className="border-t border-white/10 pt-8">
                <div className="text-center mb-6">
                  <div className="inline-block px-6 py-3 rounded-full glass-light mb-4">
                    <h3 
                      className="text-xl font-bold text-white"
                      style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                    >
                      🎖️ 副營長 - 黃靖恩
                    </h3>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {/* 副營長LINE聯絡 */}
                  <div className="text-center">
                    <div className="inline-block p-4 rounded-xl mb-4 glass-light">
                      <svg 
                        width="32" 
                        height="32" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }}
                      >
                        <path 
                          d="M12 2C6.48 2 2 6.48 2 12c0 1.54 0.36 3.04 1.05 4.4L2 22l5.6-1.05C9.96 21.64 11.46 22 13 22h-1c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.13 12.88c-.06.18-.22.34-.4.4-.39.12-.84.12-1.23 0l-.7-.29c-.57-.22-1.1-.51-1.58-.84l-.84-.62c-.26-.18-.58-.27-.9-.27-.32 0-.64.09-.9.27l-.84.62c-.48.33-1.01.62-1.58.84l-.7.29c-.39.12-.84.12-1.23 0-.18-.06-.34-.22-.4-.4-.12-.39-.12-.84 0-1.23l.29-.7c.22-.57.51-1.1.84-1.58l.62-.84c.18-.26.27-.58.27-.9 0-.32-.09-.64-.27-.9l-.62-.84c-.33-.48-.62-1.01-.84-1.58l-.29-.7c-.12-.39-.12-.84 0-1.23.06-.18.22-.34.4-.4.39-.12.84-.12 1.23 0l.7.29c.57.22 1.1.51 1.58.84l.84.62c.26.18.58.27.9.27.32 0 .64-.09.9-.27l.84-.62c.48-.33 1.01-.62 1.58-.84l.7-.29c.39-.12.84-.12 1.23 0 .18.06.34.22.4.4.12.39.12.84 0 1.23l-.29.7c-.22.57-.51 1.1-.84 1.58l-.62.84c-.18.26-.27.58-.27.9 0 .32.09.64.27.9l.62.84c.33.48.62 1.01.84 1.58l.29.7c.12.39.12.84 0 1.23z" 
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                    <h4 
                      className="font-medium mb-3 text-white"
                      style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                    >
                      LINE 好友
                    </h4>
                    <Button
                      variant="ghost"
                      onClick={() => window.open('https://line.me/ti/p/bcmg0SvOj9', '_blank')}
                      className="w-full hover:scale-105 transition-all duration-300 border-0 text-white glass-standard"
                      title="點擊加入副營長LINE好友"
                      style={{
                        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                        background: 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(16px)',
                        border: '1px solid rgba(255, 255, 255, 0.12)'
                      }}
                    >
                      <ExternalLink size={16} className="mr-2" />
                      加入 LINE 好友
                    </Button>
                  </div>

                  {/* 副營長電話聯絡 */}
                  <div className="text-center">
                    <div className="inline-block p-4 rounded-xl mb-4 glass-light">
                      <Phone size={32} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
                    </div>
                    <h4 
                      className="font-medium mb-3 text-white"
                      style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                    >
                      電話聯絡
                    </h4>
                    {/* 副營長電話號碼複製按鈕 */}
                    <Button
                      variant="ghost"
                      onClick={copyViceCaptainPhoneNumber}
                      className={`w-full hover:scale-105 transition-all duration-300 border-0 text-white glass-standard ${
                        viceCaptainCopied ? 'bg-green-500/20' : ''
                      }`}
                      title={viceCaptainCopied ? "電話號碼已複製！" : "點擊複製電話號碼"}
                      style={{
                        textShadow: '0 1px 4px rgba(0,0,0,0.8)',
                        background: viceCaptainCopied ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255, 255, 255, 0.06)',
                        backdropFilter: 'blur(16px)',
                        border: viceCaptainCopied ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(255, 255, 255, 0.12)',
                        boxShadow: viceCaptainCopied ? '0 4px 16px rgba(34, 197, 94, 0.2)' : '0 4px 16px rgba(0, 0, 0, 0.1)'
                      }}
                    >
                      {viceCaptainCopied ? (
                        <>
                          <Check size={16} className="mr-2" style={{ color: '#22c55e' }} />
                          <span style={{ color: '#22c55e' }}>已複製 0932-278-172</span>
                        </>
                      ) : (
                        <>
                          <Copy size={16} className="mr-2" />
                          點擊複製 0932-278-172
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p 
                  className="text-sm leading-relaxed px-4 text-white/90"
                  style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
                >
                  有任何問題歡迎聯絡營長劉昕楷或副營長黃靖恩！<br className="md:hidden" />
                  <span className="md:inline-block">我們會盡快回覆您</span> <span className="text-lg">😊</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* 呼籲參加 */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Card className="glass-standard border-0">
            <CardContent className="p-6 md:p-12 text-center">
              <div className="inline-block p-6 rounded-full mb-6 glass-light">
                <Star size={48} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
              </div>
              <h2 
                className="text-3xl font-bold mb-6 text-white"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                }}
              >
                學弟妹一定要來唷！
              </h2>
              <div 
                className="text-xl md:text-xl text-lg leading-relaxed max-w-2xl mx-auto text-white/90"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
              >
                <p className="mb-2">這將是你在清大工工系最美好回憶的開始</p>
                <p className="flex items-center justify-center gap-2 flex-wrap text-center">
                  <span>期待與你們在峨眉湖畔共度美好時光</span>
                  <span className="text-2xl md:text-2xl text-xl">✨</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>
      </div>
    </motion.div>
  );
}