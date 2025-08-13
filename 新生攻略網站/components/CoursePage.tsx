import { motion } from 'motion/react';
import { BookOpen, Calculator, Globe, FlaskConical, Dumbbell, Cpu, FileText, Users, Wrench, Ruler, Languages, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface CoursePageProps {
  setActiveTab?: (tab: string) => void;
}

const subjects = [
  {
    id: 'chinese',
    name: '大學中文',
    credits: 2,
    icon: Languages,
    description: '培養中文閱讀、寫作與表達能力',
    semester: '上',
    color: '#9caf9e'
  },
  {
    id: 'english',
    name: '大學英文',
    credits: 2,
    icon: Globe,
    description: '提升英語聽說讀寫綜合能力',
    semester: '上＆下',
    color: '#a8b5c4'
  },
  {
    id: 'calculus',
    name: '微積分B',
    credits: 3,
    icon: Calculator,
    description: '工程數學基礎，極限、導數、積分',
    semester: '上＆下',
    color: '#d4b5b0'
  },
  {
    id: 'physics',
    name: '普通物理B',
    credits: 3,
    icon: BookOpen,
    description: '力學、熱學、電磁學基礎概念',
    semester: '上＆下',
    color: '#b5a8c4'
  },
  {
    id: 'physics-lab',
    name: '普通物理實驗',
    credits: 1,
    icon: FlaskConical,
    description: '物理原理實驗驗證與操作',
    semester: '上＆下',
    color: '#b0c4b1'
  },
  {
    id: 'economics',
    name: '經濟學原理（一）',
    credits: 3,
    icon: Users,
    description: '個體經濟學基礎理論與應用',
    semester: '上',
    color: '#c4a8b5'
  },
  {
    id: 'programming',
    name: '計算機程式語言',
    credits: 3,
    icon: Cpu,
    description: '程式設計基礎與邏輯思維',
    semester: '上',
    color: '#c4c1b8'
  },
  {
    id: 'pe',
    name: '大一體育',
    credits: 0,
    icon: Dumbbell,
    description: '體適能訓練與運動技能培養',
    semester: '上',
    color: '#b8b5af'
  },
  {
    id: 'engineering-intro',
    name: '工程導論',
    credits: 2,
    icon: FileText,
    description: '工學院四系的基礎領域介紹',
    semester: '上',
    color: '#9caf9e'
  },
  {
    id: 'factory-practice',
    name: '工場實習',
    credits: 1,
    icon: Wrench,
    description: '製造工程實務操作與安全',
    semester: '上／下',
    color: '#a8b5c4'
  },
  {
    id: 'engineering-drawing',
    name: '工程圖學',
    credits: 2,
    icon: Ruler,
    description: '工程製圖標準與CAD應用',
    semester: '未知',
    color: '#d4b5b0'
  },
  {
    id: 'service-learning',
    name: '服務學習',
    credits: 0,
    icon: Heart,
    description: '培養社會服務精神與公民責任',
    semester: '上or下',
    color: '#c4857a',
    deprecated: true
  }
];

export function CoursePage({ setActiveTab }: CoursePageProps) {
  const handleSubjectClick = (subjectId: string) => {
    if (setActiveTab) {
      setActiveTab(`subject-${subjectId}`);
    }
  };

  return (
    <motion.div 
      key="coursepage-container"
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
              <BookOpen size={18} style={{ filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.4))' }} />
              <span 
                className="font-medium text-white"
                style={{ textShadow: '0 2px 6px rgba(0,0,0,0.8)' }}
              >
                選課指南
              </span>
            </div>
          </div>
          <h1 
            className="text-4xl lg:text-5xl font-bold tracking-tight text-white"
            style={{
              textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.6)'
            }}
          >
            大一必修課程
          </h1>
        </motion.div>

        {/* Learning Plan Recommendations */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <Card className="glass-standard border-0">
            <CardContent className="p-12 text-center">
              <h2 
                className="text-3xl font-bold mb-4 text-white"
                style={{
                  textShadow: '0 2px 8px rgba(0,0,0,0.8)'
                }}
              >
                大一學習規劃建議
              </h2>
              <div className="max-w-4xl mx-auto mb-12">
                <div className="space-y-3 text-center">
                  <p 
                    className="text-lg leading-7 text-white"
                    style={{
                      textShadow: '0 2px 6px rgba(0,0,0,0.7)'
                    }}
                  >
                    點擊任一科目深入了解課程內容、學習重點、考試技巧，以及學長姐的寶貴經驗分享
                  </p>
                  <p 
                    className="leading-6 text-white/90"
                    style={{
                      textShadow: '0 1px 4px rgba(0,0,0,0.7)'
                    }}
                  >
                    合理規劃時間分配，掌握每科特色，讓你的大一學習更加順利！
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-12 max-w-xl mx-auto">
                <div className="text-center">
                  <div 
                    className="text-2xl font-bold" 
                    style={{ 
                      color: '#a8b5c4',
                      textShadow: '0 2px 6px rgba(0,0,0,0.6)'
                    }}
                  >
                    11
                  </div>
                  <div 
                    className="text-sm text-white/80"
                    style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
                  >
                    必修科目
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-2xl font-bold" 
                    style={{ 
                      color: '#d4b5b0',
                      textShadow: '0 2px 6px rgba(0,0,0,0.6)'
                    }}
                  >
                    21
                  </div>
                  <div 
                    className="text-sm text-white/80"
                    style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
                  >
                    總學分數
                  </div>
                </div>
                <div className="text-center">
                  <div 
                    className="text-2xl font-bold" 
                    style={{ 
                      color: '#9caf9e',
                      textShadow: '0 2px 6px rgba(0,0,0,0.6)'
                    }}
                  >
                    6
                  </div>
                  <div 
                    className="text-sm text-white/80"
                    style={{ textShadow: '0 1px 4px rgba(0,0,0,0.7)' }}
                  >
                    學科類別
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Subjects Grid */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {subjects.map((subject, index) => {
              const Icon = subject.icon;
              
              return (
                <motion.div
                  key={subject.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  <Card 
                    className={`h-full border-0 group glass-light transition-all duration-300 ${
                      subject.deprecated 
                        ? 'opacity-75 cursor-not-allowed' 
                        : 'hover:scale-105 hover:-translate-y-0.5 cursor-pointer subject-card hover:shadow-2xl'
                    }`}
                    style={{
                      boxShadow: `0 8px 32px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(${parseInt(subject.color.slice(1, 3), 16)}, ${parseInt(subject.color.slice(3, 5), 16)}, ${parseInt(subject.color.slice(5, 7), 16)}, 0.2)`,
                      '--shadow-color': `${parseInt(subject.color.slice(1, 3), 16)}, ${parseInt(subject.color.slice(3, 5), 16)}, ${parseInt(subject.color.slice(5, 7), 16)}`,
                      ...(subject.deprecated && {
                        filter: 'grayscale(30%)'
                      })
                    } as React.CSSProperties}
                    onClick={subject.deprecated ? undefined : () => handleSubjectClick(subject.id)}
                  >
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div 
                          className={`p-3 rounded-xl transition-transform duration-200 glass-light ${
                            subject.deprecated ? '' : 'group-hover:scale-110'
                          }`}
                          style={{
                            background: `${subject.color}30`,
                            border: `1px solid ${subject.color}40`
                          }}
                        >
                          <Icon 
                            size={24}
                            style={{ 
                              color: 'white',
                              filter: `drop-shadow(0 2px 4px rgba(0,0,0,0.4)) drop-shadow(0 1px 2px ${subject.color}50)`
                            }}
                          />
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className="text-xs glass-light border-0 text-white"
                            style={{
                              background: `${subject.color}20`,
                              color: subject.color,
                              textShadow: '0 1px 3px rgba(0,0,0,0.8)'
                            }}
                          >
                            {subject.credits} 學分
                          </Badge>
                        </div>
                      </div>
                      
                      <CardTitle 
                        className="text-2xl font-bold mb-4 leading-tight transition-colors duration-200 text-white"
                        style={{ 
                          textShadow: '0 2px 6px rgba(0,0,0,0.8)',
                          ...(subject.deprecated && { opacity: 0.8 })
                        }}
                      >
                        {subject.name}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent className="pt-2 pb-4">
                      <p 
                        className={`text-sm leading-relaxed mb-4 text-white/90 ${
                          subject.deprecated ? 'opacity-60' : ''
                        }`} 
                        style={{
                          textShadow: '0 1px 4px rgba(0,0,0,0.7)'
                        }}
                      >
                        {subject.description}
                      </p>
                      {subject.id !== 'service-learning' && (
                        <div 
                          className="text-xs px-2 py-1 rounded-md inline-block glass-light"
                          style={{
                            background: `${subject.color}20`,
                            border: `1px solid ${subject.color}30`,
                            color: subject.color,
                            textShadow: '0 1px 3px rgba(0,0,0,0.6)'
                          }}
                        >
                          {subject.semester}
                        </div>
                      )}
                      {subject.deprecated && (
                        <div className="mt-2">
                          <div 
                            className="text-xs px-2 py-1 rounded-md inline-block glass-light"
                            style={{
                              background: 'rgba(196, 133, 122, 0.2)',
                              border: '1px solid rgba(196, 133, 122, 0.3)',
                              color: '#c4857a',
                              textShadow: '0 1px 3px rgba(0,0,0,0.6)'
                            }}
                          >
                            ⚠️ 畢業門檻已廢除
                          </div>
                        </div>
                      )}
                    </CardContent>

                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

      </div>
    </motion.div>
  );
}