import React, { useState, useEffect } from 'react';

interface RenderBackgroundProps {
  variant?: 'home' | 'courses' | 'orientation' | 'resources' | 'subject';
  performanceMode?: boolean;
  mobileMode?: boolean;
}

export function RenderBackground({ variant = 'home', performanceMode = false, mobileMode = false }: RenderBackgroundProps) {
  const [isReady, setIsReady] = useState(false);

  // 確保組件正確初始化
  useEffect(() => {
    console.log('RenderBackground mounting:', { variant, performanceMode, mobileMode }); // Debug log
    
    const initTimer = setTimeout(() => {
      setIsReady(true);
      console.log('RenderBackground ready'); // Debug log
    }, 100);

    return () => clearTimeout(initTimer);
  }, [variant, performanceMode, mobileMode]);
  // 調亮的色彩配置，保留完整的主題系統
  const variantConfig = {
    home: {
      // 首頁：白金奢華風 - 更明亮
      primary: '#ffffff',    // 純白色
      secondary: '#ffd700',  // 金色  
      accent: '#1e90ff',     // 道奇藍
      tertiary: '#ffb6c1',   // 淺粉色
      background: '#2a2f3e', // 調亮：中等深藍背景
      bgSecondary: '#1f2429', // 漸變用的次要背景
      gradientBase: '#343945' // 漸變基礎色
    },
    courses: {
      // 選課指南：學術智慧風 - 更明亮
      primary: '#4682b4',    // 深邃學術藍
      secondary: '#ffc107',  // 智慧金光
      accent: '#2ecc71',     // 成長翠綠
      tertiary: '#9b59b6',   // 創新紫羅蘭
      background: '#2e3339', // 調亮：中等藍灰背景
      bgSecondary: '#242a2f',
      gradientBase: '#394045'
    },
    orientation: {
      // 迎新宿營：青春活力風 - 更明亮
      primary: '#ff6347',    // 活力珊瑚橙
      secondary: '#40e0d0',  // 清新土耳其藍
      accent: '#ff69b4',     // 熱情洋紅
      tertiary: '#ffd700',   // 陽光金黃
      background: '#3a2f2a', // 調亮：中等暖色背景
      bgSecondary: '#2f241f',
      gradientBase: '#453935'
    },
    resources: {
      // 推薦網站：探索發現風 - 更明亮
      primary: '#8a2be2',    // 神秘藍紫
      secondary: '#00bfff',  // 科技深天藍
      accent: '#32cd32',     // 發現翠綠
      tertiary: '#ff8c00',   // 創新活力橙
      background: '#2f2a3a', // 調亮：中等紫背景
      bgSecondary: '#24202f',
      gradientBase: '#3a3540'
    },
    subject: {
      // 科目頁面：知識深度風 - 更明亮
      primary: '#191970',    // 深邃午夜藍
      secondary: '#daa520',  // 古典智慧金
      accent: '#dc143c',     // 洞察深紅
      tertiary: '#00fa9a',   // 突破春綠
      background: '#2a2f3a', // 調亮：中等靛青背景
      bgSecondary: '#1f242a',
      gradientBase: '#353a45'
    }
  };

  const colors = variantConfig[variant];

  // 如果還沒準備好，顯示簡單的回退背景
  if (!isReady) {
    return (
      <div 
        className="absolute inset-0 w-full h-full transition-opacity duration-300"
        style={{
          background: `linear-gradient(135deg, ${colors.background} 0%, ${colors.bgSecondary} 100%)`
        }}
      />
    );
  }

  return (
    <div 
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* 明亮基礎背景 - 三色漸變 */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(ellipse at top left, ${colors.background} 0%, ${colors.bgSecondary} 50%, ${colors.gradientBase} 100%)`
        }}
      />

      {/* 流動漸變動畫層 - 主要視覺效果 */}
      <div 
        className={`absolute inset-0 ${!performanceMode ? 'animated-gradient' : ''}`}
        style={{
          opacity: mobileMode ? 0.85 : 0.70,
          backgroundImage: `linear-gradient(45deg, 
            ${colors.primary}${mobileMode ? '45' : '35'} 0%, 
            ${colors.secondary}${mobileMode ? '40' : '30'} 25%, 
            ${colors.accent}${mobileMode ? '38' : '28'} 50%, 
            ${colors.tertiary}${mobileMode ? '40' : '30'} 75%, 
            ${colors.primary}${mobileMode ? '45' : '35'} 100%)`,
          backgroundSize: '300% 300%'
        }}
      />

      {/* 徑向光源層 - 增加深度 */}
      <div 
        className="absolute inset-0"
        style={{
          opacity: mobileMode ? 0.65 : 0.55,
          backgroundImage: `
            radial-gradient(ellipse at 20% 20%, ${colors.primary}${mobileMode ? '50' : '40'} 0%, ${colors.primary}${mobileMode ? '20' : '15'} 30%, transparent 50%),
            radial-gradient(ellipse at 80% 80%, ${colors.secondary}${mobileMode ? '45' : '35'} 0%, ${colors.secondary}${mobileMode ? '18' : '12'} 30%, transparent 50%),
            radial-gradient(ellipse at 60% 40%, ${colors.accent}${mobileMode ? '40' : '30'} 0%, ${colors.accent}${mobileMode ? '15' : '10'} 40%, transparent 60%)`
        }}
      />

      {/* 動態光球效果 - 統一版本 */}
      {!performanceMode && (
        <>
          {/* 主要光球組 - 適應性尺寸 */}
          <div 
            className={`absolute top-10 left-10 rounded-full floating-orb-1 ${mobileMode ? 'w-[300px] h-[300px]' : 'w-[480px] h-[480px]'}`}
            style={{
              opacity: mobileMode ? 0.60 : 0.50,
              backgroundImage: `radial-gradient(circle, ${colors.primary}${mobileMode ? '70' : '60'} 0%, ${colors.primary}${mobileMode ? '35' : '30'} 40%, transparent 70%)`,
              filter: mobileMode ? 'blur(25px)' : 'blur(35px)'
            }}
          />

          <div 
            className={`absolute bottom-10 right-20 rounded-full floating-orb-2 ${mobileMode ? 'w-[350px] h-[350px]' : 'w-[560px] h-[560px]'}`}
            style={{
              opacity: mobileMode ? 0.55 : 0.45,
              backgroundImage: `radial-gradient(circle, ${colors.secondary}${mobileMode ? '65' : '55'} 0%, ${colors.secondary}${mobileMode ? '30' : '25'} 40%, transparent 70%)`,
              filter: mobileMode ? 'blur(30px)' : 'blur(45px)'
            }}
          />

          <div 
            className={`absolute top-1/3 right-1/4 rounded-full floating-orb-3 ${mobileMode ? 'w-[250px] h-[250px]' : 'w-[400px] h-[400px]'}`}
            style={{
              opacity: mobileMode ? 0.65 : 0.55,
              backgroundImage: `radial-gradient(circle, ${colors.accent}${mobileMode ? '60' : '50'} 0%, ${colors.accent}${mobileMode ? '25' : '20'} 40%, transparent 70%)`,
              filter: mobileMode ? 'blur(20px)' : 'blur(30px)'
            }}
          />

          {/* 額外增強光球 - 適應性超大光球 */}
          <div 
            className={`absolute top-1/2 left-1/2 rounded-full floating-orb-1 ${mobileMode ? 'w-[400px] h-[400px]' : 'w-[640px] h-[640px]'}`}
            style={{
              opacity: mobileMode ? 0.35 : 0.25,
              backgroundImage: `radial-gradient(circle, ${colors.tertiary}${mobileMode ? '80' : '70'} 0%, ${colors.tertiary}${mobileMode ? '40' : '35'} 30%, ${colors.primary}${mobileMode ? '20' : '15'} 60%, transparent 80%)`,
              filter: mobileMode ? 'blur(40px)' : 'blur(60px)',
              transform: 'translate(-50%, -50%)'
            }}
          />

          <div 
            className={`absolute bottom-1/4 left-1/3 rounded-full floating-orb-2 ${mobileMode ? 'w-[320px] h-[320px]' : 'w-[520px] h-[520px]'}`}
            style={{
              opacity: mobileMode ? 0.45 : 0.35,
              backgroundImage: `radial-gradient(circle, ${colors.accent}${mobileMode ? '75' : '65'} 0%, ${colors.secondary}${mobileMode ? '35' : '30'} 35%, transparent 75%)`,
              filter: mobileMode ? 'blur(35px)' : 'blur(50px)'
            }}
          />
        </>
      )}

      {/* 邊緣增強效果 */}
      <div 
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${colors.tertiary}25 0%, ${colors.tertiary}08 15%, transparent 20%, transparent 80%, ${colors.primary}08 85%, ${colors.primary}25 100%),
            linear-gradient(to bottom, ${colors.accent}20 0%, ${colors.accent}06 25%, transparent 30%, transparent 70%, ${colors.secondary}06 75%, ${colors.secondary}20 100%)`
        }}
      />

      {/* 中心輻射層 - 增加聚焦感 */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `radial-gradient(ellipse at center, ${colors.primary}35 0%, ${colors.secondary}15 40%, transparent 70%)`
        }}
      />

      {/* 新增強烈色彩層 - 濃郁色彩爆發 */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 10% 10%, ${colors.primary}50 0%, transparent 40%),
            radial-gradient(ellipse at 90% 90%, ${colors.secondary}45 0%, transparent 40%),
            radial-gradient(ellipse at 10% 90%, ${colors.accent}40 0%, transparent 40%),
            radial-gradient(ellipse at 90% 10%, ${colors.tertiary}35 0%, transparent 40%)`
        }}
      />


    </div>
  );
}