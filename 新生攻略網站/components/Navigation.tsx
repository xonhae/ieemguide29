import { Home, BookOpen, Users, Globe, Sparkles, ExternalLink } from 'lucide-react';
import { BackgroundMusic } from './BackgroundMusic';

interface NavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const tabs = [
    { id: 'home', label: '首頁', icon: Home },
    { id: 'courses', label: '選課指南', icon: BookOpen },
    { id: 'orientation', label: '迎新宿營', icon: Users },
    { id: 'resources', label: '推薦網站', icon: Globe },
    { 
      id: 'freshman-guide', 
      label: '新生懶人包', 
      icon: Sparkles,
      isExternal: true,
      url: 'https://nthu-fresh.notion.site/71158c2cbd0b462fabc15cd24ea4bc37'
    },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 nav-animated-bg">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* 左側：Logo + 標題 */}
          <div
            className="flex items-center space-x-1 sm:space-x-3 flex-shrink-0 cursor-pointer"
            style={{ minWidth: 'fit-content', maxWidth: '140px', overflow: 'hidden' }}
            onClick={() => setActiveTab('home')}
          >
            <div className="relative">
              {/* 簡潔的工² Logo */}
              <div className="w-7 h-7 sm:w-9 sm:h-9 relative flex items-center justify-center">
                {/* 簡潔背景 */}
                <div 
                  className="absolute inset-0 rounded-lg sm:rounded-xl"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                />
                
                {/* 工² 文字設計 - 無陰影版本 */}
                <div className="relative z-10 flex items-center justify-center">
                  <span 
                    className="text-white font-black select-none"
                    style={{
                      fontSize: 'clamp(11px, 3vw, 16px)',
                      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                      fontWeight: '900',
                      letterSpacing: '-0.03em'
                    }}
                  >
                    工
                    <sup 
                      style={{ 
                        fontSize: '0.65em',
                        position: 'relative',
                        top: '-0.35em',
                        left: '0.08em',
                        fontWeight: '800'
                      }}
                    >
                      2
                    </sup>
                  </span>
                </div>
              </div>
            </div>
            <div className="block min-w-0 flex-1">
              <h1 
                className="text-white font-semibold tracking-tight text-xs sm:text-base whitespace-nowrap overflow-hidden text-ellipsis"
              >
                清大工工系學會
              </h1>
            </div>
          </div>

          {/* 右側：導航選單 + 音樂播放器 */}
          <div className="flex items-center space-x-2 sm:space-x-3 ml-auto">
            {/* 導航選單 */}
            <div className="flex items-center space-x-1 rounded-full p-1 relative overflow-hidden nav-tabs-container w-fit">
            {/* 深色背景確保對比度 */}
            <div className="absolute inset-0 bg-black/50 rounded-full"></div>
            {/* 動態背景層 */}
            <div className="absolute inset-0 bg-gradient-to-r from-morandi-sage/20 via-morandi-dust-blue/15 to-morandi-soft-pink/20 animate-gradient-flow rounded-full"></div>
            <div className="absolute inset-0 backdrop-blur-md bg-black/30 rounded-full"></div>
            {/* 流動光澤效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent animate-[shimmer_8s_ease-in-out_infinite] rounded-full"></div>
            
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = !tab.isExternal && activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (tab.isExternal) {
                      window.open(tab.url, '_blank');
                    } else {
                      setActiveTab(tab.id);
                    }
                  }}
                  className={`relative z-10 px-1.5 sm:px-4 py-2 rounded-full transition-all duration-300 flex items-center space-x-1 sm:space-x-2 text-white ${
                    isActive
                      ? 'bg-gradient-to-r from-morandi-dust-blue to-morandi-sage'
                      : 'hover:bg-white/30'
                  }`}
                  style={{ 
                    fontWeight: '500'
                  }}
                >
                  <Icon size={16} />
                  <span className="hidden sm:inline text-sm font-medium">{tab.label}</span>
                  {tab.isExternal && (
                    <ExternalLink size={12} className="opacity-60" />
                  )}
                </button>
              );
            })}
            </div>
            
            {/* 音樂播放器 */}
            <div className="flex-shrink-0 music-player-container">
              <BackgroundMusic />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}