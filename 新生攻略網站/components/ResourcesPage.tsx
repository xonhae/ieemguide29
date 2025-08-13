import { motion } from 'motion/react';
import { ExternalLink, BookOpen, Calculator, Globe, Laptop, Coffee, Star, ArrowUpRight, Award, Instagram } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

export function ResourcesPage() {
  const categories = [
    {
      icon: Instagram,
      title: '校園資訊',
      description: '掌握清大最新動態與學生活動資訊',
      color: 'text-pink-500',
      bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-950/20 dark:to-purple-950/20',
      borderColor: 'border-pink-200 dark:border-pink-800',
      resources: [
        {
          name: '清大沐報',
          description: '清華大學學生媒體，報導校園新聞與學生生活',
          url: 'https://www.instagram.com/nthu_mubao/',
          rating: 5,
          category: '校園媒體',
          tags: ['校園新聞', '學生生活', '活動報導'],
          featured: true
        },
        {
          name: '清大學生會',
          description: '代表全體學生權益，舉辦各類活動與服務',
          url: 'https://www.instagram.com/nthu_sa/',
          rating: 5,
          category: '學生組織',
          tags: ['學生權益', '校園活動', '服務資訊'],
          featured: true
        },
        {
          name: '清大學生議會',
          description: '學生自治最高立法機關，監督學生會運作',
          url: 'https://www.instagram.com/nthu.sc/',
          rating: 4,
          category: '學生自治',
          tags: ['立法監督', '學生自治', '權益保障'],
          featured: false
        }
      ]
    },
    {
      icon: Laptop,
      title: '程式開發',
      description: '開發環境與實用工具推薦',
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-800',
      resources: [
        {
          name: 'Visual Studio 2017',
          description: '系上指定使用的整合開發環境，建議安裝',
          url: 'https://visualstudio.microsoft.com/vs/older-downloads/',
          rating: 5,
          category: '系上指定軟體',
          tags: ['建議安裝', '整合開發', '官方指定'],
          featured: true
        },
        {
          name: 'GitHub',
          description: '全球最大的程式碼託管平台，版本控制與協作開發',
          url: 'https://github.com',
          rating: 5,
          category: '版本控制',
          tags: ['開源專案', '協作開發', '作品展示'],
          featured: true
        },
        {
          name: 'Cursor',
          description: 'AI輔助程式開發工具，提升編程效率',
          url: 'https://cursor.sh',
          rating: 4,
          category: 'AI輔助開發',
          tags: ['AI助手', '智能編程', '效率工具'],
          featured: false
        }
      ]
    },
    {
      icon: Calculator,
      title: '學習工具',
      description: '提高學習效率的數位化工具',
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
      resources: [
        {
          name: 'Notion',
          description: '集筆記、任務管理、協作於一體的全能工作空間',
          url: 'https://www.notion.so',
          rating: 5,
          category: '筆記管理',
          tags: ['全能工具', '團隊協作', '模板豐富'],
          featured: true
        },
        {
          name: 'GoodNotes',
          description: '優秀的數位筆記應用，支援手寫筆記和PDF標註',
          url: 'https://www.goodnotes.com',
          rating: 5,
          category: '數位筆記',
          tags: ['手寫筆記', 'PDF標註', '多平台同步'],
          featured: true
        },
        {
          name: 'Canva',
          description: '簡單易用的線上設計平台，適合製作簡報、海報等視覺作品',
          url: 'https://www.canva.com',
          rating: 5,
          category: '設計工具',
          tags: ['圖形設計', '簡報製作', '模板豐富'],
          featured: false
        }
      ]
    },
    {
      icon: Coffee,
      title: '學術研究',
      description: '台灣學術資源與論文資料庫',
      color: 'text-orange-500',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-800',
      resources: [
        {
          name: '國家圖書館',
          description: '國家級圖書館，提供豐富的學術資源與數位典藏',
          url: 'https://www.ncl.edu.tw',
          rating: 5,
          category: '國家資源',
          tags: ['數位典藏', '學術資源', '官方機構'],
          featured: true
        },
        {
          name: '台灣碩博士論文知識加值系統',
          description: '收錄台灣各大學碩博士論文的完整資料庫',
          url: 'https://ndltd.ncl.edu.tw',
          rating: 5,
          category: '論文資料庫',
          tags: ['碩博士論文', '學位論文', '研究資料'],
          featured: true
        },
        {
          name: '華藝線上圖書館',
          description: '華文世界最大的學術資料庫，提供期刊、論文等資源',
          url: 'https://www.airitilibrary.com',
          rating: 4,
          category: '學術資料庫',
          tags: ['中文期刊', '學術論文', '研究資源'],
          featured: false
        }
      ]
    },
    {
      icon: BookOpen,
      title: '學術學習',
      description: '提升學習效率的優質教育平台',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-800',
      resources: [
        {
          name: 'Khan Academy',
          description: '全球知名的免費線上教育平台，提供完整的學習體系',
          url: 'https://www.khanacademy.org',
          rating: 5,
          category: '綜合學習',
          tags: ['免費', '中文介面', '互動練習'],
          featured: true
        },
        {
          name: 'Coursera',
          description: '與世界頂尖大學合作，提供專業認證課程',
          url: 'https://www.coursera.org',
          rating: 5,
          category: '專業課程',
          tags: ['大學合作', '證書認證', '職業導向'],
          featured: true
        },
        {
          name: 'edX',
          description: 'MIT和哈佛創辦，高品質的開放式線上課程',
          url: 'https://www.edx.org',
          rating: 4,
          category: '頂尖教育',
          tags: ['名校課程', '免費旁聽', '多語言'],
          featured: false
        }
      ]
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={i < rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground/30'}
      />
    ));
  };

  const totalResources = categories.reduce((sum, category) => sum + category.resources.length, 0);
  const featuredCount = categories.reduce((sum, category) => 
    sum + category.resources.filter(r => r.featured).length, 0
  );

  return (
    <motion.div 
      key="resourcespage-container"
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
            <Globe size={18} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
            <span 
              className="font-medium text-white"
              style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
            >
              推薦網站
            </span>
          </div>
          <h1 
            className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white"
            style={{
              textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)'
            }}
          >
            精選學習資源
          </h1>
          <p 
            className="text-xl max-w-3xl mx-auto leading-relaxed mb-8 text-white/90"
            style={{
              textShadow: '0 2px 6px rgba(0,0,0,0.7)'
            }}
          >
            精心挑選的優質學習網站，助你在大學階段高效學習，全面提升
          </p>
          
          {/* Stats */}
          <div className="flex items-center justify-center space-x-8">
            <div className="text-center">
              <div 
                className="text-2xl font-bold" 
                style={{ 
                  color: '#9370DB',
                  textShadow: '0 2px 6px rgba(0,0,0,0.6)'
                }}
              >
                {totalResources}+
              </div>
              <div 
                className="text-sm text-white/80"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
              >
                實用網站
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-2xl font-bold" 
                style={{ 
                  color: '#9370DB',
                  textShadow: '0 2px 6px rgba(0,0,0,0.6)'
                }}
              >
                {featuredCount}
              </div>
              <div 
                className="text-sm text-white/80"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
              >
                精選推薦
              </div>
            </div>
            <div className="text-center">
              <div 
                className="text-2xl font-bold" 
                style={{ 
                  color: '#9370DB',
                  textShadow: '0 2px 6px rgba(0,0,0,0.6)'
                }}
              >
                5
              </div>
              <div 
                className="text-sm text-white/80"
                style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
              >
                主要類別
              </div>
            </div>
          </div>
        </motion.div>

        {/* Categories */}
        <div className="space-y-20">
          {categories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.section
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: categoryIndex * 0.2 }}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4">
                  <div className="p-4 rounded-2xl glass-light">
                    <Icon style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} size={28} />
                  </div>
                  <div>
                    <h2 
                      className="text-3xl font-bold text-white"
                      style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}
                    >
                      {category.title}
                    </h2>
                    <p 
                      className="text-lg text-white/90"
                      style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
                    >
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Resources Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.resources.map((resource, resourceIndex) => (
                    <motion.div
                      key={resource.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: categoryIndex * 0.2 + resourceIndex * 0.1 }}
                    >
                      <Card className="group hover:shadow-xl transition-all duration-300 border-0 glass-light h-full relative overflow-hidden cursor-pointer hover:scale-[1.02]">
                        {resource.featured && (
                          <div className="absolute top-4 right-4 z-10">
                            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                              <Award size={12} className="mr-1" />
                              精選
                            </Badge>
                          </div>
                        )}
                        
                        <CardHeader className="space-y-4">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2">
                              <CardTitle 
                                className="text-lg transition-colors text-white"
                                style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
                              >
                                {resource.name}
                              </CardTitle>
                              <div className="flex items-center space-x-2">
                                <div className="flex items-center space-x-1">
                                  {renderStars(resource.rating)}
                                </div>
                                <Badge 
                                  variant="outline" 
                                  className="text-xs glass-light border-0 text-white"
                                  style={{ 
                                    textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                                    background: 'rgba(255,255,255,0.1)'
                                  }}
                                >
                                  {resource.category}
                                </Badge>
                              </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                              <ArrowUpRight style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} size={20} />
                            </div>
                          </div>
                        </CardHeader>
                        
                        <CardContent className="space-y-4">
                          <p 
                            className="text-sm leading-relaxed text-white/90"
                            style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
                          >
                            {resource.description}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {resource.tags.map((tag) => (
                              <Badge 
                                key={tag} 
                                variant="secondary" 
                                className="text-xs glass-light border-0 text-white"
                                style={{ 
                                  textShadow: '0 1px 3px rgba(0,0,0,0.8)',
                                  background: 'rgba(255,255,255,0.1)'
                                }}
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          {resource.name === 'Visual Studio 2017' ? (
                            <div className="flex items-center justify-between p-3 glass-light rounded-lg">
                              <div className="flex items-center space-x-2">
                                <Globe size={16} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
                                <span 
                                  className="font-medium" 
                                  style={{ 
                                    color: '#9370DB',
                                    textShadow: '0 1px 4px rgba(0,0,0,0.8)'
                                  }}
                                >
                                  請使用校內VPN免費安裝
                                </span>
                              </div>
                            </div>
                          ) : (
                            <a
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 glass-light rounded-lg hover:scale-105 transition-all duration-300 group-hover:translate-x-1 transform cursor-pointer"
                              title={`前往 ${resource.name}`}
                            >
                              <div className="flex items-center space-x-2">
                                {category.title === '校園資訊' ? (
                                  <Instagram size={16} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
                                ) : (
                                  <Globe size={16} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
                                )}
                                <span 
                                  className="font-medium"
                                  style={{ 
                                    color: '#9370DB',
                                    textShadow: '0 1px 4px rgba(0,0,0,0.8)'
                                  }}
                                >
                                  {category.title === '校園資訊' ? '前往Instagram' : '前往網站'}
                                </span>
                              </div>
                              <ExternalLink size={14} style={{ color: 'white', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

      </div>
    </motion.div>
  );
}