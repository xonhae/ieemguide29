import { motion } from 'motion/react';
import { Sparkles, ArrowRight, BookOpen, Users, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useState, useEffect } from 'react';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
}

export function HomePage({ setActiveTab }: HomePageProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    console.log('HomePage mounting'); // Debug log
    
    // 檢測移動端
    const checkMobile = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      console.log('HomePage mobile check:', mobile, window.innerWidth); // Debug log
    };
    
    checkMobile();
    setIsMounted(true);
    
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 如果還沒掛載完成，顯示加載狀態
  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center relative z-50">
        <div 
          className="text-white text-xl px-8 py-4 rounded-xl"
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
          }}
        >
          載入中...
        </div>
      </div>
    );
  }
  const features = [
    {
      icon: BookOpen,
      title: '選課指南',
      description: '精心整理的選課攻略，助你規劃理想的學習路徑',
      action: () => setActiveTab('courses'),
      stats: '學長姐經驗',
      color: '#6d7d6f',
      gradient: 'from-emerald-400/20 via-teal-500/15 to-green-600/20',
      shadowColor: 'rgba(109, 125, 111, 0.4)',
      glowColor: 'rgba(109, 125, 111, 0.6)'
    },
    {
      icon: Users,
      title: '迎新宿營',
      description: '搶先認識學長姐與同學，讓你迅速融入校園生活',
      action: () => setActiveTab('orientation'),
      stats: '活動介紹',
      color: '#5a6674',
      gradient: 'from-blue-400/20 via-indigo-500/15 to-blue-600/20',
      shadowColor: 'rgba(90, 102, 116, 0.4)',
      glowColor: 'rgba(90, 102, 116, 0.6)'
    },
    {
      icon: Globe,
      title: '推薦網站',
      description: '精選學習與生活實用網站，提升學習效率',
      action: () => setActiveTab('resources'),
      stats: '精選實用網站',
      color: '#8b6b61',
      gradient: 'from-pink-400/20 via-rose-500/15 to-red-600/20',
      shadowColor: 'rgba(139, 107, 97, 0.4)',
      glowColor: 'rgba(139, 107, 97, 0.6)'
    },
    {
      icon: Sparkles,
      title: '新生懶人包',
      description: '上到學校資訊、下到吃喝玩樂，應有盡有',
      action: () => window.open('https://nthu-fresh.notion.site/71158c2cbd0b462fabc15cd24ea4bc37', '_blank'),
      stats: '完整攻略',
      color: '#6a5e74',
      gradient: 'from-purple-400/20 via-violet-500/15 to-purple-600/20',
      shadowColor: 'rgba(106, 94, 116, 0.4)',
      glowColor: 'rgba(106, 94, 116, 0.6)'
    }
  ];

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/nthu_ieem/', '_blank');
  };

  return (
    <div 
      key="homepage-container"
      className="min-h-screen relative overflow-hidden"
      style={{ opacity: 1 }} // 確保始終可見
    >
      {/* 精緻背景裝飾元素 - 移動端簡化 */}
      {!isMobile && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 主要漂浮元素 */}
          <motion.div 
            className="absolute top-20 left-16 w-80 h-80 rounded-full opacity-60"
            style={{
              background: `radial-gradient(ellipse, rgba(109, 125, 111, 0.15) 0%, rgba(90, 102, 116, 0.08) 50%, transparent 100%)`,
              filter: 'blur(40px)'
            }}
            animate={{ 
              x: [0, 30, -20, 0],
              y: [0, -40, 20, 0],
              scale: [1, 1.2, 0.9, 1]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
        
        <motion.div 
          className="absolute bottom-32 right-20 w-96 h-96 rounded-full opacity-50"
          style={{
            background: `radial-gradient(ellipse, rgba(139, 107, 97, 0.12) 0%, rgba(106, 94, 116, 0.08) 50%, transparent 100%)`,
            filter: 'blur(50px)'
          }}
          animate={{ 
            x: [0, -40, 25, 0],
            y: [0, 30, -15, 0],
            scale: [0.9, 1.3, 1.1, 0.9]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />

        {/* 中央裝飾光暈 */}
        <motion.div 
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: `conic-gradient(
              rgba(109, 125, 111, 0.15), 
              rgba(90, 102, 116, 0.12), 
              rgba(139, 107, 97, 0.1), 
              rgba(106, 94, 116, 0.12), 
              rgba(109, 125, 111, 0.15)
            )`,
            filter: 'blur(80px)',
            transform: 'translate(-50%, -50%)'
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
        </div>
      )}

      {/* Hero Section - 更精���的設計 */}
      <section className="relative pt-28 pb-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-6xl mx-auto">
            {/* 頂部精緻標籤 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.2, duration: 1, ease: "easeOut" }}
              className="inline-flex items-center space-x-4 px-8 py-4 rounded-full mb-10 group relative overflow-hidden"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.15) 0%, 
                    rgba(255, 255, 255, 0.08) 50%, 
                    rgba(109, 125, 111, 0.12) 100%)
                `,
                backdropFilter: 'blur(25px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  0 8px 32px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3),
                  0 0 20px rgba(109, 125, 111, 0.3)
                `
              }}
            >
              {/* 內部動畫背景 */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(ellipse at center, rgba(109, 125, 111, 0.2) 0%, transparent 70%)`
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <Sparkles 
                size={22} 
                style={{ 
                  color: '#6d7d6f', 
                  filter: 'drop-shadow(0 0 10px rgba(109, 125, 111, 0.8))' 
                }} 
              />
              
              <span 
                className="font-bold text-white relative z-10"
                style={{
                  fontSize: '1.125rem',
                  background: 'linear-gradient(135deg, #ffffff 0%, #6d7d6f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                NTHU IEEM
              </span>
            </motion.div>

            {/* 主標題 - 移除浮動emoji */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              className="relative mb-10"
              style={{
                fontSize: 'clamp(3rem, 8vw, 7rem)',
                fontWeight: '900',
                letterSpacing: '-0.02em',
                lineHeight: '1.1'
              }}
            >
              <span
                style={{
                  background: `
                    linear-gradient(135deg, 
                      #ffffff 0%, 
                      #f8f8f8 25%, 
                      #e8e8e8 50%,
                      #6d7d6f 75%,
                      #8a9b8c 100%)
                  `,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                29級新生攻略
              </span>
            </motion.h1>

            {/* 副標題卡片 - 更精緻的玻璃效果 */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="relative max-w-5xl mx-auto mb-14 group"
            >
              <div
                className="relative px-12 py-10 rounded-3xl overflow-hidden"
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.15) 0%, 
                      rgba(255, 255, 255, 0.08) 50%, 
                      rgba(109, 125, 111, 0.1) 100%)
                  `,
                  backdropFilter: 'blur(30px)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  boxShadow: `
                    0 20px 60px rgba(0, 0, 0, 0.3),
                    inset 0 1px 0 rgba(255, 255, 255, 0.4),
                    0 0 40px rgba(109, 125, 111, 0.2)
                  `
                }}
              >
                {/* 動畫背景層 */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl"
                  style={{
                    background: `
                      radial-gradient(ellipse at 30% 30%, rgba(109, 125, 111, 0.15) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 70%, rgba(90, 102, 116, 0.1) 0%, transparent 60%)
                    `
                  }}
                  animate={{
                    background: [
                      `radial-gradient(ellipse at 30% 30%, rgba(109, 125, 111, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(90, 102, 116, 0.1) 0%, transparent 60%)`,
                      `radial-gradient(ellipse at 70% 30%, rgba(90, 102, 116, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 30% 70%, rgba(109, 125, 111, 0.12) 0%, transparent 60%)`,
                      `radial-gradient(ellipse at 30% 30%, rgba(109, 125, 111, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 70%, rgba(90, 102, 116, 0.1) 0%, transparent 60%)`
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                
                <p 
                  className="text-white relative z-10 leading-relaxed"
                  style={{
                    fontSize: 'clamp(1.25rem, 3vw, 2rem)'
                  }}
                >
                  你的大學生活完整指南，從選課規劃到校園生活，
                  <br />
                  <span 
                    className="font-semibold"
                    style={{
                      background: 'linear-gradient(135deg, #4ade80 0%, #22d3ee 50%, #6d7d6f 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    讓我們陪伴你順利開啟精彩的求學旅程
                  </span>
                </p>
                
                {/* 底部裝飾線 */}
                <div 
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(109, 125, 111, 0.6), rgba(255, 255, 255, 0.4), rgba(90, 102, 116, 0.6), transparent)'
                  }}
                />
              </div>
            </motion.div>

            {/* 行動按鈕組 - 更精緻的設計 */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <motion.button
                onClick={() => setActiveTab('courses')}
                className="group relative overflow-hidden px-12 py-4 text-white rounded-2xl font-semibold transition-all duration-500 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
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
                
                <Zap size={22} className="relative z-10" />
                <span className="relative z-10 text-lg">開始探索</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
              
              <motion.button 
                onClick={handleInstagramClick}
                className="group relative overflow-hidden px-12 py-4 text-white rounded-2xl font-semibold transition-all duration-500 flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: `
                    linear-gradient(135deg, 
                      rgba(255, 255, 255, 0.12) 0%, 
                      rgba(255, 255, 255, 0.08) 100%)
                  `,
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
                }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, rgba(236, 72, 153, 0.2) 0%, rgba(168, 85, 247, 0.2) 100%)`
                  }}
                />
                
                <span className="relative z-10 text-lg">前往系學會IG</span>
                <motion.div
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - 更精緻的卡片設計 */}
      <section className="pt-8 pb-24 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* 標題區域 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="text-center mb-12"
          >
            <div 
              className="relative px-16 py-12 rounded-3xl max-w-4xl mx-auto mb-8 overflow-hidden group"
              style={{
                background: `
                  linear-gradient(135deg, 
                    rgba(255, 255, 255, 0.12) 0%, 
                    rgba(255, 255, 255, 0.06) 50%, 
                    rgba(109, 125, 111, 0.08) 100%)
                `,
                backdropFilter: 'blur(25px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: `
                  0 20px 60px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.3)
                `
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `radial-gradient(ellipse at center, rgba(109, 125, 111, 0.1) 0%, transparent 70%)`
                }}
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <h2 
                className="relative z-10 mb-6"
                style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  fontWeight: '800',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 50%, #6d7d6f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                為你精心準備的指南
              </h2>
              <p 
                className="text-white/90 relative z-10"
                style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)'
                }}
              >
                四大核心功能，全方位協助你適應大學生活
              </p>
            </div>
          </motion.div>

          {/* 功能卡片網格 - 極致精美設計 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 80, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.5 + index * 0.2, duration: 1, ease: "easeOut" }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  className="group"
                >
                  <Card 
                    className="cursor-pointer transition-all duration-700 h-full border-0 rounded-3xl relative overflow-hidden"
                    onClick={feature.action}
                    style={{
                      background: `
                        linear-gradient(135deg, 
                          rgba(255, 255, 255, 0.15) 0%, 
                          rgba(255, 255, 255, 0.08) 50%, 
                          rgba(${feature.color.slice(1).match(/.{2}/g)?.map(x => parseInt(x, 16)).join(', ')}, 0.1) 100%)
                      `,
                      backdropFilter: 'blur(25px)',
                      border: `1px solid ${feature.shadowColor}`,
                      boxShadow: `
                        0 20px 60px rgba(0, 0, 0, 0.4), 
                        0 0 0 1px ${feature.shadowColor},
                        0 0 40px ${feature.glowColor}20
                      `
                    }}
                  >
                    {/* 背景動畫層 */}
                    <motion.div 
                      className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-3xl`}
                      style={{ mixBlendMode: 'overlay' }}
                    />
                    
                    {/* 頂部光線效果 */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-px"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${feature.glowColor}, transparent)`
                      }}
                    />
                    
                    <CardContent className="p-8 relative z-10">
                      {/* 圖標區域 - 極致設計 */}
                      <div className="flex items-center justify-between mb-10">
                        <motion.div 
                          className="relative p-6 rounded-3xl group/icon overflow-hidden"
                          style={{
                            background: `
                              linear-gradient(135deg, 
                                ${feature.color}60 0%, 
                                ${feature.color}40 50%,
                                ${feature.color}30 100%)
                            `,
                            backdropFilter: 'blur(15px)',
                            border: `1px solid ${feature.color}50`,
                            boxShadow: `
                              0 8px 32px ${feature.color}30, 
                              inset 0 1px 0 rgba(255,255,255,0.2),
                              0 0 20px ${feature.glowColor}
                            `
                          }}
                          whileHover={{ scale: 1.15, rotate: 8 }}
                          transition={{ duration: 0.4 }}
                        >
                          {/* 圖標背景動畫 */}
                          <motion.div 
                            className="absolute inset-0 rounded-3xl opacity-0 group-hover/icon:opacity-100 transition-all duration-500"
                            style={{
                              background: `radial-gradient(ellipse at center, ${feature.glowColor} 0%, transparent 70%)`
                            }}
                            animate={{
                              scale: [1, 1.1, 1],
                              opacity: [0, 0.6, 0]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                          />
                          
                          <Icon 
                            className="relative z-10 transition-transform group-hover:scale-110" 
                            size={32}
                            style={{ 
                              color: 'white',
                              filter: `
                                drop-shadow(0 3px 8px rgba(0,0,0,0.6)) 
                                drop-shadow(0 0 15px ${feature.glowColor})
                              `
                            }}
                          />
                        </motion.div>
                        
                        <div 
                          className="relative px-4 py-2 rounded-full text-white overflow-hidden"
                          style={{
                            background: `
                              linear-gradient(135deg, 
                                rgba(255, 255, 255, 0.15) 0%, 
                                rgba(255, 255, 255, 0.08) 100%)
                            `,
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            fontSize: '0.875rem'
                          }}
                        >
                          <div 
                            className="absolute inset-0 rounded-full"
                            style={{
                              background: `linear-gradient(90deg, transparent, ${feature.color}20, transparent)`
                            }}
                          />
                          <span className="relative z-10">{feature.stats}</span>
                        </div>
                      </div>
                      
                      {/* 標題 */}
                      <h3 
                        className="text-white mb-6 transition-all duration-400"
                        style={{
                          fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
                          fontWeight: '700'
                        }}
                      >
                        {feature.title}
                      </h3>
                      
                      {/* 描述 */}
                      <p 
                        className="leading-relaxed mb-10 text-white/90"
                        style={{
                          fontSize: '1rem'
                        }}
                      >
                        {feature.description}
                      </p>
                      
                      {/* ���部行動區域 */}
                      <div className="flex items-center transition-all duration-400 text-white group-hover:text-white">
                        <span className="font-semibold mr-3">探索更多</span>
                        <motion.div
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <ArrowRight size={18} />
                        </motion.div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}