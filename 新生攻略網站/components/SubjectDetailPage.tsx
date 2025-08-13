import { motion } from 'motion/react';
import { ArrowLeft, BookOpen, Clock, Users, Star, CheckCircle2, AlertCircle, Lightbulb, Heart, Snowflake } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface SubjectDetailPageProps {
  subjectId: string;
  setActiveTab: (tab: string) => void;
}

export function SubjectDetailPage({ subjectId, setActiveTab }: SubjectDetailPageProps) {
  // 這裡之後可以根據subjectId載入不同的內容
  const subjectData = {
    'chinese': {
      name: '大學中文',
      description: '培養中文表達能力，提升文學素養與寫作技巧',
      credits: 2,
      hours: '每週2小時',
      teacher: '可選教師',
      teacherCount: 7,
      color: '#9caf9e',
      icon: '📚',
      teachers: [
        {
          name: '李慈恩',
          sweetness: 3.0,
          coolness: 2.0,
          tags: ['學院報告', '報告佔比70%', '老師很有趣很認真很負責', '6000字的報告', '每周都會詢問同學的進度', '不用買課本', '可以學到不少東西', '內容偏硬']
        },
        {
          name: '鄧怡菁',
          sweetness: 2.0,
          coolness: 2.0,
          tags: ['給分不甜', '自由奔放', '作業有點多', '報告要求嚴苛', '報告字數最少(據老師本人所說的?)']
        },

        {
          name: '余能城',
          sweetness: 4.0,
          coolness: 5.0,
          tags: ['三次作業(初稿、二稿、終稿)', '教授人非常nice、親切', '每堂課點名']
        },
        {
          name: '王秋今',
          sweetness: 4.0,
          coolness: 3.5,
          tags: ['給分甜', '教學活潑不死板', '人很好', '期中跟期末報告各一次', '期末報告3000-5000字', '有認真寫期末報告的話基本能拿A以上', '回答問題加總成績1分 上限10分']
        },
        {
          name: '郭俐君',
          sweetness: null,
          coolness: null,
          tags: ['新老師', '課堂表現 25%', '上台報告 15%(一次)', '平時作業 30%(兩次)', '期末報告 30%']
        },
        {
          name: '李琪琪',
          sweetness: null,
          coolness: null,
          tags: ['新老師']
        },
        {
          name: '游嘉琳',
          sweetness: null,
          coolness: null,
          tags: ['新老師', '文本導讀 10%', '期末報告 30%', '期中考 40%', '課堂討論 20%']
        }


      ]
    },
    'english': {
      name: '大學英文',
      description: '分級制度英語課程，依程度選修適合的課程等級',
      credits: 2,
      hours: '每週2小時',
      teacher: '可選教師',
      teacherCount: '4/3/4/6',
      color: '#a8b5c4',
      icon: '🌍',
      teachers: [
        // 中高級英文一
        {
          name: '蔣光煌',
          level: '中高級英文一',
          sweetness: 3.5,
          coolness: 3.5,
          tags: ['上課自由，可以看自己的書或手機', '不定時點名，沒點到扣分嚴重', '老師會唱歌，可以cue他唱歌', '有個人和團體的報告', '考一次期末但不難', '上課內容主要以課本為主，會抽人回答課本問題', '作業是寫作文跟改別人作文']
        },
        {
          name: '劉美慈',
          level: '中高級英文一',
          sweetness: 4.0,
          coolness: 4.0,
          tags: ['舉手回答問題就會加分', '課程難度普通，loading 沒有很重']
        },
        {
          name: '呂文仁',
          level: '中高級英文一',
          sweetness: 4.0,
          coolness: 4.0,
          tags: ['上課會點人回答問題', '上課滿輕鬆']
        },
        {
          name: '徐桂平',
          level: '中高級英文一',
          sweetness: 2.5,
          coolness: 2.0,
          tags: ['上課只能看課本，不能看手機、睡覺、課外讀物', '每周都有回家作業，loading 重，期末考多半從作業出題', '一定要買課本，但上課內容跟課本沒什麼關聯', '上課基本上只教基本時態文法']
        },
        // 中高級英文三-聽講
        {
          name: '黃嘉瑜',
          level: '中高級英文三-聽講',
          sweetness: 3.0,
          coolness: 2.5,
          tags: ['作業多', '老師人很好', '難拿到A+']
        },
        {
          name: '楊幸瑜',
          level: '中高級英文三-聽講',
          sweetness: 4.5,
          coolness: 4.0,
          tags: ['老師人很好', '給分甜']
        },
        {
          name: '金祖詠',
          level: '中高級英文三-聽講',
          sweetness: null,
          coolness: null,
          tags: ['上課偏涼，不太點名', '作業不少但也不難，只是耗時間']
        },
        // 中高級英文三-閱讀
        {
          name: '黃滿庭',
          level: '中高級英文三-閱讀',
          sweetness: 4.0,
          coolness: 3.5,
          tags: ['上課可以做自己的事,但不要太超過', '平常有單字小考很簡單!(下課前)', '通常都會晚5~10分鐘下課', '每次都點名，上課前點名']
        },
        {
          name: '林嘉瑜',
          level: '中高級英文三-閱讀',
          sweetness: 3.5,
          coolness: 3.0,
          tags: ['老師很和藹，喜歡玩小活動遊戲', '上她的課蠻free的~但要出席喔', '上課開始點名，遲到20分鐘算缺席，無故缺課三次不會及格', '定期有作業和小考', '平均分數一般般，但作業考試認真做分數就會高']
        },
        {
          name: '黃維楨',
          level: '中高級英文三-閱讀',
          sweetness: null,
          coolness: null,
          tags: ['網路上資料少']
        },
        {
          name: '劉文貞',
          level: '中高級英文三-閱讀',
          sweetness: 4.0,
          coolness: 3.0,
          tags: ['分數還ok、較少調分', '每堂課點名，上課回答可加分', '3次小考、作業還好但要準時交', '上課有趣']
        },
        // 進階英文
        {
          name: '郭詩芝',
          level: '進階英文',
          sweetness: null,
          coolness: null,
          tags: ['需要課本', '每堂課都需要上台說話', '有期末報告期中考和小考', '每週功課', '考試不難']
        },
        {
          name: '黃伊岑',
          level: '進階英文',
          sweetness: null,
          coolness: null,
          tags: ['上課會點名', '有課後作業', '基本上成績都給得不錯', '不要遲到']
        },
        {
          name: '詹智婷',
          level: '進階英文',
          sweetness: null,
          coolness: null,
          tags: ['對口說很有幫助', '老師人很好喜歡跟學生交朋友', '討厭遲到', '小班制', '重視課堂互動', '課堂參與和報告很重要', '有期末報告和口說考試']
        },
        {
          name: '馬紹芸',
          level: '進階英文',
          sweetness: 5.0,
          coolness: 2.0,
          tags: ['甜甜的', '出席率重要', '翹太多課會被當', '沒有期中考', '期末考聽力筆試和口試', '要上台報告']
        },
        {
          name: '周寶齡',
          level: '進階英文',
          sweetness: 5.0,
          coolness: 4.0,
          tags: ['很甜', '多多發言分數高', '可以加強英文口說能力', '老師人很好', '期中考前主要是看影片回答老師的問題', '也可以發表對這個影片的想法', '每堂課前老師會詢問有沒有人上台發表', '發表大概是介紹新聞概要、心得等', '考試的方式皆為聽力測驗', '課後需要E-mail心得給老師，字數不限。']
        },
        {
          name: '鄺粵敏',
          level: '進階英文',
          sweetness: 5.0,
          coolness: 4.0,
          tags: ['留學教師', '作業蠻多的', '被讚認真', '可以練口說', '有參與分數會高!']
        }
      ]
    },
    'calculus': {
      name: '微積分B',
      description: '工程數學基礎，學習微分積分的理論與應用',
      credits: 3,
      hours: '每週3+2小時',
      hoursNote: '註：2小時演習課',
      teacher: '可選教師',
      teacherCount: 3,
      color: '#d4b5b0',
      icon: '📐',
      teachers: [
        {
          name: '黃皓瑋',
          sweetness: 4.0,
          coolness: 4.5,
          tags: ['上課不點名', '英文授課（但基本上不影響！如果你還是學不好應該是數學太爛不是英文太爛）', '每週二晚上7：00 - 9：00 演習課（不點名）但每次小考（上學期一次考2題；下學期一次考1題 滿分20 大概都8：30考試）', '兩次期中考一次期末考（都是排在禮拜二）', '不調分（58.7分也不會調ㄡ）', '下學期有EMI可以加學期組總分（建議要要要！）', '人很好愛講笑話', '禮拜四只上一節課', '有些章節會跳過 沒去上課的話 基本上他沒勾題目的就是沒有上也不會考', '考前建議寫考古 他有時候會出跟考古很像的題目', '微積分不好的建議修他']
        },
        {
          name: '潘戍衍',
          sweetness: 3.0,
          coolness: 2.5,
          tags: ['貌似大一沒開課ㄌ', '上課會點名', '每週二晚上7：00 - 9：00 演習課（不點名）但每次小考（都從他用的課本出 一次3題滿分30 每題裡面會有1到2小題 都是7：00先考試 然後檢討當天的考卷）', '下學期考試偶爾會有考古題', '小考30%；期中考30%；期末考40%（大考都是禮拜二）', '會調分（貌似是分數越低調越多 分數高就不太會動）', '如果出差不小心放到課的話會用禮拜四第二節補 缺幾堂補幾堂 沒缺課的話就是禮拜四只上一節', '上下學期是真的會把整本課本教完（不會偷跳過）所以上很快！！', '兩次段考加起來110小考平均14基本上穩過']
        },
        {
          name: '張庭暉',
          sweetness: 4.5,
          coolness: 4.0,
          tags: ['好老師教得不錯', '每週小考', '期中期末各考一次', '之前都是教微積分A', '會調一點分', '考試會出很多習題內容 也會從他勾的題目出']
        }
      ]
    },
    'physics': {
      name: '普通物理B',
      description: '物理學基本原理，涵蓋力學、熱學、電磁學等',
      credits: 3,
      hours: '每週3小時',
      teacher: '可選教師',
      teacherCount: 7,
      color: '#b5a8c4',
      icon: '⚗️',
      teachers: [
        {
          name: '鄭宏泰',
          sweetness: 5.0,
          coolness: 5.0,
          tags: ['沒小考也不點名', '普物B最搶手老師(不給加簽)', '老師上課很認真', '會救人', '許多卷姐卷哥推爆', '線上練習題當小考成績(必須要寫)']
        },
        {
          name: '劉怡維',
          sweetness: 5.0,
          coolness: 4.0,
          tags: ['只開大一上學期 和王立邦對開', '一學期會有次數不等的小考 時間都是上課上到一定進度才會說下次上課要考試', '小考時間都從9：20開始考到9：50 題目都是課本勾的題目裡面選兩題', '沒有作業', '期中考2次 期末考1次 都是排在禮拜五考', '老師人很好 期末會大調分', '調分魔術師', '線上作業要寫會算分 截止日期基本上是期中期末考前一天']
        },
        {
          name: '王立邦',
          sweetness: 4.0,
          coolness: 4.0,
          tags: ['期中考2次 期末考1次 都是排在禮拜五考', '每次考試前一堂課都是小考（意即小考只有三次） 會在8：30考 題目是考古或者自己出題 難度不大且改得很鬆', '若發現助教一直沒有上傳課本題目的答案可以直接寫信給教授 他人很好都會回信', '如果物理程度沒有很好又想要GPA好看建議不要修他 因為下學期很多電機系資工系的會跑來修', '線上作業可寫可不寫 不會算分']
        },
        {
          name: '林志明',
          sweetness: 5.0,
          coolness: null,
          tags: ['會隨機點名(上學期當加分，下學期點名沒到扣分)', '調分魔術師(佛心)', '考試前固定會有一次線上小考，但下學期老師會多加一些小考', '老師上下學期的小考內容很不一樣，上學期固定是課本例題，下學期會是一整份考古', '會自己出中文版講義']
        },
        {
          name: '霍夫曼',
          sweetness: 4.0,
          coolness: 5.0,
          tags: ['英文授課', '口音很重', '沒小考也不點名', '調分調很多']
        },
        {
          name: '洪在明',
          sweetness: 2.0,
          coolness: 3.5,
          tags: ['英文授課', '上課不點名', '小考有難度', '期末會調分但不多', '會有課堂加分', '作業不難', '上課氛圍很好']
        },
        {
          name: '陳正中',
          sweetness: 1.0,
          coolness: 5.0,
          tags: ['期中2次 期末1次 都是星期五', '3次段考前當周的星期三22:00～23:00都有線上小考 3～4題的超簡單送分題 題目都是課本例題 線上小考不用錄影', '沒有作業', '不點名', '調分相對其他老師調很少 而且老師踩很死 只把三次段考平均調到70 其他完全不動', '老師上課非常認真 有互動板書寫好寫滿 但參與人數不多', '如果想要好看的GPA不推']
        }
      ]
    },
    'physics-lab': {
      name: '普通物理實驗',
      description: '透過實驗驗證物理理論，培養科學實驗能力',
      credits: 1,
      hours: '不定',
      teacher: '僅有一個選擇',
      teacherCount: 1,
      color: '#b0c4b1',
      icon: '🧪',
      teachers: [
        {
          name: '普物實驗課程',
          sweetness: 4.0,
          coolness: 0,
          tags: [
            '隊友很重要 慎選!',
            '體力與耐心的考驗',
            '輕鬆的實驗一兩個小時就完成，複雜的可能會耗個五小時',
            '課前預習可以做更快',
            '實驗前需準備預報',
            '實驗後需繳交結報',
            '上課前有小考',
            '分數偏甜',
            '分兩班',
            '上學期期末考為手寫（可帶A4小抄）',
            '下學期期末考為實操＋問答',
            '做不出來問助教'
          ]
        }
      ]
    },
    'economics': {
      name: '經濟學原理（一）',
      description: '經濟學基本概念，了解市場機制與經濟理論',
      credits: 3,
      hours: '每週3小時',
      teacher: '可選教師',
      teacherCount: 1,
      color: '#c4a8b5',
      icon: '📊',
      teachers: [
        {
          name: '唐震宏',
          sweetness: 4.5,
          coolness: 5.0,
          tags: ['教授人超級好 會積極回答學生的問題', '如果開學第一堂課要趕車可以問他會不會提早下課（6：20會提早成6：00）', '如果有事沒辦法到課的話可以問老師能不能錄影', '上課的投影片會傳到eeclass', '期中考 50%；期末考 50%', '老師會傳考古的雲端硬碟到eeclass', '完全沒作業']
        }
      ]
    },
    'programming': {
      name: '計算機程式語言',
      description: '程式設計基礎，學習邏輯思維與程式開發技能',
      credits: 3,
      hours: '每週3小時',
      teacher: '可選教師',
      teacherCount: 1,
      color: '#c4c1b8',
      icon: '💻',
      teachers: [
        {
          name: '洪一峯',
          sweetness: 3.0,
          coolness: 2.0,
          tags: ['上課蠻無聊的 講的內容很基礎 但建議去上課才知道他教到哪 學期末會無預警點名算出席成績（出席成績大家都一樣 是算那堂課的到課人數比例換算 滿分10分 如果100個人到90個人就是9分 依此類推）', '用 visual studio 2017', '每週都會有練習題 題數不等 建議做 因為小考會考類似題', '題目不會可以直接去問助教 他們人都很好', '每週都有實體演習課（時間上課的時候老師會和大家討論） 基本上是一週練習一週小考 會點名', '期中期末都是考3題手寫程式3題上機', '期末有可能會大趕課', '不要惹老師生氣 不然重修人數會上升', '上課多和老師互動他會很開心']
        }
      ]
    },
    'pe': {
      name: '大一體育',
      description: '體能訓練與運動技能培養，促進身心健康發展',
      credits: 0,
      hours: '每週2小時',
      teacher: '可選教師',
      teacherCount: 1,
      color: '#b8b5af',
      icon: '🏃',
      teachers: [
        {
          name: '簡敏惠',
          sweetness: 5.0,
          coolness: 5.0,
          tags: [
            '綽號：Angel',
            '按週次會有不同運動種類',
            '老師人很好會跟你聊天',
            '有時候會突然生氣，生氣的點通常很奇怪',
            '每堂課都有到就會過，缺席一定要請假',
            '上課不能一直在旁邊摸魚，不然會被關注',
            '會提早十分鐘左右下課'
          ]
        }
      ]
    },
    'engineering-intro': {
      name: '工程導論',
      description: '工程學科概論，由四位不同領域教授共同授課，無法自選教師',
      credits: 2,
      hours: '每週2小時',
      teacher: '四位教授共同授課',
      teacherCount: 4,
      color: '#9caf9e',
      icon: '🔧',
      teachers: [
        {
          name: '洪一峯',
          sweetness: 4.5,
          coolness: 3.0,
          department: '工工系教授',
          weeks: '3週課程',
          percentage: '25%',
          tags: ['每堂課都要交上課筆記', '字跡工整內容多尤佳', '上課會播一個有關最佳化的影片，期末考會考，記得不要偷打瞌睡！', '期末考：內容蠻簡單，基本上上課有聽就會']
        },
        {
          name: '許瑋麟',
          sweetness: null,
          coolness: null,
          department: '材料系教授',
          weeks: '3週課程',
          percentage: '25%',
          tags: ['新老師']
        },
        {
          name: '李明蒼',
          sweetness: null,
          coolness: 4.5,
          department: '動機系教授',
          weeks: '3週課程',
          percentage: '25%',
          tags: ['沒有期末考', '評分方式：迷你實作競賽(分組)', '合作將積木組成可以放入寶特瓶的成品，在時間內能夠放入越多寶特瓶的隊伍分數越高', '每組有三位同學使用Solidworks完成一個可以執行力學分析的模擬模型']
        },
        {
          name: '林育正',
          sweetness: null,
          coolness: 3.0,
          department: '化工系教授',
          weeks: '3週課程',
          percentage: '25%',
          tags: ['溫室氣體減量技術', '期末考：4題問答題，從老師上課的簡報出題']
        }
      ]
    },
    'factory-practice': {
      name: '工場實習',
      description: '實際操作工廠設備，培養製造業實務經驗',
      credits: 1,
      hours: '每週1+不定小時',
      hoursNote: '註：實習課時間不定',
      teacher: '可選教師',
      teacherCount: 1,
      color: '#a8b5c4',
      icon: '🏭',
      teachers: [
        {
          name: '梁育禎',
          sweetness: 3.0,
          coolness: 3.0,
          tags: ['每週都要寫實習心得報告', '先在教室裡上一堂課後再進工廠上實習課', '上課不時透漏期末考內容', '上課可以做自己的事']
        }
      ]
    },
    'engineering-drawing': {
      name: '工程圖學',
      description: '技術製圖基礎，學習工程圖面繪製與識讀',
      credits: 2,
      hours: '每週2小時',
      teacher: '可選教師',
      teacherCount: 1,
      color: '#d4b5b0',
      icon: '📏',
      teachers: [
        {
          name: '李建翰',
          sweetness: 3.0,
          coolness: 3.5,
          tags: ['期中考前，上課教完 ppt內容後實作', '期中考後，上課給題目直接實作，做完就可以下課', '期中考前，作業是整理繪圖步驟和重點，寫的詳細完整分數高', '期中考後，作業是匯出模型並標上正確的尺寸和格式', '期中考筆試，期末考實作(AutoCAD)，期末考可以開之前的作業內容', '很多助教，不會可以直接舉手問', '作業好好寫基本上考試就沒問題', '該老師已休學']
        }
      ]
    }
  };

  const subject = subjectData[subjectId as keyof typeof subjectData];

  if (!subject) {
    return (
      <motion.div 
        key="subjectdetail-notfound"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="min-h-screen pt-20 pb-16 flex items-center justify-center"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4" style={{ color: '#e8e6e3' }}>科目不存在</h1>
          <button
            onClick={() => setActiveTab('courses')}
            className="px-6 py-2 glass-elegant rounded-lg"
            style={{ color: '#e8e6e3' }}
          >
            返回科目列表
          </button>
        </div>
      </motion.div>
    );
  }

  const morandiGlassCardStyle = {
    background: `linear-gradient(135deg, 
      rgba(156, 175, 158, 0.06) 0%,
      rgba(184, 181, 175, 0.04) 50%,
      rgba(168, 181, 196, 0.06) 100%)`,
    border: '1px solid rgba(180, 180, 180, 0.12)',
    boxShadow: `
      0 12px 24px rgba(0, 0, 0, 0.3),
      inset 0 1px 2px rgba(255, 255, 255, 0.15),
      0 0 0 1px rgba(255, 255, 255, 0.05)`,
    backdropFilter: 'blur(16px) saturate(130%)'
  };

  return (
    <motion.div 
      key={`subjectdetail-${subjectId}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="min-h-screen pt-20 pb-16"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <button
            onClick={() => setActiveTab('courses')}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 relative overflow-hidden"
            style={morandiGlassCardStyle}
          >
            <div className="noise-texture absolute inset-0 opacity-30"></div>
            <div className="relative z-10 flex items-center space-x-2" style={{ color: '#c4c1b8' }}>
              <ArrowLeft size={16} />
              <span>返回科目列表</span>
            </div>
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="text-6xl mb-4">{subject.icon}</div>
          <h1 
            className="text-4xl lg:text-5xl font-bold tracking-tight mb-4"
            style={{
              background: `linear-gradient(45deg, #e8e6e3, #c4c1b8)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(2px 2px 4px rgba(0,0,0,0.3))'
            }}
          >
            {subject.name}
          </h1>
          <p className="text-xl max-w-2xl mx-auto leading-relaxed" style={{ color: '#c4c1b8' }}>
            {subject.description}
          </p>
        </motion.div>

        {/* English Level Info (only for english subject) */}
        {subjectId === 'english' && (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-8"
          >
            <Card 
              className="relative overflow-hidden border-0"
              style={morandiGlassCardStyle}
            >
              <div className="noise-texture absolute inset-0 opacity-30"></div>
              <CardContent className="p-6 relative z-10">
                <div className="text-center">
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: subject.color }}
                  >
                    📚 英文分級制度說明
                  </h3>
                  <p className="text-sm mb-4" style={{ color: '#c4c1b8' }}>
                    清華大學英文課程採分級制度，請先了解分級方案後選擇適合的課程
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href="https://nthu-english.site.nthu.edu.tw/p/405-1532-283826,c18294.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${subject.color}25, ${subject.color}15)`,
                        border: `1px solid ${subject.color}30`,
                        color: '#e8e6e3'
                      }}
                    >
                      🔗 分級制度詳情
                    </a>
                    <a
                      href="https://nthu-english.site.nthu.edu.tw/p/412-1532-22095.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                      style={{
                        background: `linear-gradient(135deg, ${subject.color}25, ${subject.color}15)`,
                        border: `1px solid ${subject.color}30`,
                        color: '#e8e6e3'
                      }}
                    >
                      📋 修課方案
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Course Info */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <Card 
            className="relative overflow-hidden border-0"
            style={morandiGlassCardStyle}
          >
            <div className="noise-texture absolute inset-0 opacity-30"></div>
            <CardContent className="p-8 relative z-10">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen size={20} style={{ color: subject.color }} />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: subject.color }}>{subject.credits}</div>
                  <div className="text-sm" style={{ color: '#c4c1b8' }}>學分</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Clock size={20} style={{ color: subject.color }} />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: subject.color }}>{subject.hours}</div>
                  {subject.hoursNote && (
                    <div className="text-xs mt-1 opacity-75" style={{ color: subject.color }}>
                      {subject.hoursNote}
                    </div>
                  )}
                  <div className="text-sm" style={{ color: '#c4c1b8' }}>上課時間</div>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <Users size={20} style={{ color: subject.color }} />
                  </div>
                  <div className="text-2xl font-bold" style={{ color: subject.color }}>{subject.teacherCount}</div>
                  <div className="text-sm" style={{ color: '#c4c1b8' }}>
                    {subjectId === 'english' ? '可選教師 (分級)' : subjectId === 'engineering-intro' ? '共同授課' : '可選教師'}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Teachers Section */}
        {subject.teachers ? (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <div className="text-center mb-8">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{
                  background: `linear-gradient(45deg, #e8e6e3, #c4c1b8)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                授課教師介紹
              </h2>
              <p style={{ color: '#c4c1b8' }}>
                {subjectId === 'engineering-intro' 
                  ? '了解每位授課教師的教學風格與評分方式' 
                  : '選擇最適合你的老師，了解他們的教學風格與特色'
                }
              </p>
            </div>
            
            <div className="space-y-8">
              {subjectId === 'engineering-intro' ? (
                // 工程導論特殊顯示
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="mb-8"
                  >
                    <Card 
                      className="relative overflow-hidden border-0"
                      style={morandiGlassCardStyle}
                    >
                      <div className="noise-texture absolute inset-0 opacity-30"></div>
                      <CardContent className="p-6 relative z-10 text-center">
                        <h3 
                          className="text-xl font-bold mb-3"
                          style={{ color: subject.color }}
                        >
                          🏫 共同授課模式說明
                        </h3>
                        <p className="text-sm mb-4" style={{ color: '#c4c1b8' }}>
                          工程導論由四位不同工程領域的教授輪流授課，每位老師授課3週，各佔學期總成績的25%
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                          {subject.teachers.map((teacher, index) => (
                            <div key={teacher.name} className="space-y-2">
                              <div 
                                className="text-lg font-bold"
                                style={{ color: subject.color }}
                              >
                                {teacher.name}
                              </div>
                              <div className="text-xs" style={{ color: '#b8b5af' }}>
                                {teacher.department}
                              </div>
                              <div className="text-xs" style={{ color: subject.color }}>
                                {teacher.percentage}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                  
                  <div className="grid gap-6">
                    {subject.teachers.map((teacher, teacherIndex) => (
                      <motion.div
                        key={teacher.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 + teacherIndex * 0.1 }}
                      >
                        <Card 
                          className="relative overflow-hidden border-0"
                          style={morandiGlassCardStyle}
                        >
                          <div className="noise-texture absolute inset-0 opacity-30"></div>
                          <CardContent className="p-6 relative z-10">
                            <div className="flex flex-col md:flex-row md:items-start gap-6">
                              {/* Teacher Info */}
                              <div className="md:w-1/3">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 
                                    className="text-xl font-bold"
                                    style={{ color: subject.color }}
                                  >
                                    {teacher.name}
                                  </h4>
                                  <Badge 
                                    variant="outline"
                                    className="text-xs"
                                    style={{
                                      borderColor: subject.color,
                                      color: subject.color,
                                      backgroundColor: `${subject.color}10`
                                    }}
                                  >
                                    {teacher.percentage}
                                  </Badge>
                                </div>
                                
                                <div className="text-sm mb-3" style={{ color: '#c4c1b8' }}>
                                  {teacher.department} • {teacher.weeks}
                                </div>
                                
                                {/* Rating Section */}
                                <div className="space-y-3">
                                  <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-2">
                                      <Heart size={16} style={{ color: '#d4b5b0' }} />
                                      <span className="text-sm" style={{ color: '#c4c1b8' }}>甜度</span>
                                    </div>
                                    <div className="flex-1">
                                      {teacher.sweetness !== null ? (
                                        <div className="flex items-center space-x-2">
                                          <div className="flex space-x-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                              <div
                                                key={star}
                                                className="w-3 h-3 rounded-full"
                                                style={{
                                                  backgroundColor: star <= teacher.sweetness 
                                                    ? '#d4b5b0' 
                                                    : 'rgba(212, 181, 176, 0.2)'
                                                }}
                                              />
                                            ))}
                                          </div>
                                          <span 
                                            className="text-sm font-semibold"
                                            style={{ color: '#d4b5b0' }}
                                          >
                                            {teacher.sweetness}/5.0
                                          </span>
                                        </div>
                                      ) : (
                                        <span className="text-sm" style={{ color: '#b8b5af' }}>
                                          ???/5.0
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center space-x-3">
                                    <div className="flex items-center space-x-2">
                                      <Snowflake size={16} style={{ color: '#a8b5c4' }} />
                                      <span className="text-sm" style={{ color: '#c4c1b8' }}>涼度</span>
                                    </div>
                                    <div className="flex-1">
                                      {teacher.coolness !== null ? (
                                        <div className="flex items-center space-x-2">
                                          <div className="flex space-x-1">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                              <div
                                                key={star}
                                                className="w-3 h-3 rounded-full"
                                                style={{
                                                  backgroundColor: star <= teacher.coolness 
                                                    ? '#a8b5c4' 
                                                    : 'rgba(168, 181, 196, 0.2)'
                                                }}
                                              />
                                            ))}
                                          </div>
                                          <span 
                                            className="text-sm font-semibold"
                                            style={{ color: '#a8b5c4' }}
                                          >
                                            {teacher.coolness}/5.0
                                          </span>
                                        </div>
                                      ) : (
                                        <span className="text-sm" style={{ color: '#b8b5af' }}>
                                          ???/5.0
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Tags */}
                              <div className="md:w-2/3">
                                <h5 
                                  className="text-lg font-semibold mb-3"
                                  style={{ color: '#e8e6e3' }}
                                >
                                  教學特色
                                </h5>
                                <div className="flex flex-wrap gap-3 items-start">
                                  {teacher.tags.map((tag, tagIndex) => (
                                    <Badge
                                      key={tagIndex}
                                      variant="secondary"
                                      className="text-sm px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 leading-relaxed"
                                      style={{
                                        background: `linear-gradient(135deg, ${subject.color}15, ${subject.color}10)`,
                                        border: `1px solid ${subject.color}25`,
                                        color: '#e8e6e3',
                                        whiteSpace: 'normal',
                                        wordBreak: 'break-word',
                                        lineHeight: '1.5',
                                        minHeight: 'auto',
                                        height: 'auto'
                                      }}
                                    >
                                      #{tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ) : subjectId === 'english' ? (
                // 英文課程按分級分組顯示
                (() => {
                  const groupedTeachers = subject.teachers.reduce((groups, teacher) => {
                    const level = teacher.level || '其他';
                    if (!groups[level]) groups[level] = [];
                    groups[level].push(teacher);
                    return groups;
                  }, {});
                  
                  const levelOrder = ['中高級英文一', '中高級英文三-聽講', '中高級英文三-閱讀', '進階英文'];
                  
                  return levelOrder.map((level, levelIndex) => {
                    if (!groupedTeachers[level]) return null;
                    
                    return (
                      <div key={level} className="space-y-4">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + levelIndex * 0.1 }}
                          className="flex items-center space-x-3 mb-4"
                        >
                          <div
                            className="w-1 h-8 rounded-full"
                            style={{ backgroundColor: subject.color }}
                          />
                          <h3
                            className="text-2xl font-bold"
                            style={{
                              background: `linear-gradient(45deg, ${subject.color}, #e8e6e3)`,
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: 'transparent',
                              backgroundClip: 'text'
                            }}
                          >
                            {level}
                          </h3>
                        </motion.div>
                        
                        <div className="grid gap-6">
                          {groupedTeachers[level].map((teacher, teacherIndex) => (
                            <motion.div
                              key={teacher.name}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.7 + levelIndex * 0.1 + teacherIndex * 0.05 }}
                            >
                              <Card 
                                className="relative overflow-hidden border-0"
                                style={morandiGlassCardStyle}
                              >
                                <div className="noise-texture absolute inset-0 opacity-30"></div>
                                <CardContent className="p-6 relative z-10">
                                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                                    {/* Teacher Info */}
                                    <div className="md:w-1/3">
                                      <h4 
                                        className="text-xl font-bold mb-2"
                                        style={{ 
                                          color: '#e8e6e3',
                                          textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                                        }}
                                      >
                                        {teacher.name}
                                      </h4>
                                      
                                      {/* Rating Section */}
                                      <div className="space-y-3">
                                        <div className="flex items-center space-x-3">
                                          <div className="flex items-center space-x-2">
                                            <Heart size={16} style={{ color: '#d4b5b0' }} />
                                            <span className="text-sm" style={{ color: '#c4c1b8' }}>甜度</span>
                                          </div>
                                          <div className="flex-1">
                                            {teacher.sweetness !== null ? (
                                              <div className="flex items-center space-x-2">
                                                <div className="flex space-x-1">
                                                  {[1, 2, 3, 4, 5].map((star) => (
                                                    <div
                                                      key={star}
                                                      className="w-3 h-3 rounded-full"
                                                      style={{
                                                        backgroundColor: star <= teacher.sweetness 
                                                          ? '#d4b5b0' 
                                                          : 'rgba(212, 181, 176, 0.2)'
                                                      }}
                                                    />
                                                  ))}
                                                </div>
                                                <span 
                                                  className="text-sm font-semibold"
                                                  style={{ color: '#d4b5b0' }}
                                                >
                                                  {teacher.sweetness}/5.0
                                                </span>
                                              </div>
                                            ) : (
                                              <span className="text-sm" style={{ color: '#b8b5af' }}>
                                                ???/5.0
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                        
                                        <div className="flex items-center space-x-3">
                                          <div className="flex items-center space-x-2">
                                            <Snowflake size={16} style={{ color: '#a8b5c4' }} />
                                            <span className="text-sm" style={{ color: '#c4c1b8' }}>涼度</span>
                                          </div>
                                          <div className="flex-1">
                                            {teacher.coolness !== null ? (
                                              <div className="flex items-center space-x-2">
                                                <div className="flex space-x-1">
                                                  {[1, 2, 3, 4, 5].map((star) => (
                                                    <div
                                                      key={star}
                                                      className="w-3 h-3 rounded-full"
                                                      style={{
                                                        backgroundColor: star <= teacher.coolness 
                                                          ? '#a8b5c4' 
                                                          : 'rgba(168, 181, 196, 0.2)'
                                                      }}
                                                    />
                                                  ))}
                                                </div>
                                                <span 
                                                  className="text-sm font-semibold"
                                                  style={{ color: '#a8b5c4' }}
                                                >
                                                  {teacher.coolness}/5.0
                                                </span>
                                              </div>
                                            ) : (
                                              <span className="text-sm" style={{ color: '#b8b5af' }}>
                                                ???/5.0
                                              </span>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    
                                    {/* Tags Section */}
                                    <div className="md:w-2/3">
                                      <h5 
                                        className="text-lg font-semibold mb-3"
                                        style={{ color: '#e8e6e3' }}
                                      >
                                        教學特色
                                      </h5>
                                      <div className="flex flex-wrap gap-3 items-start">
                                        {teacher.tags.map((tag, tagIndex) => (
                                          <Badge
                                            key={tagIndex}
                                            variant="secondary"
                                            className="text-sm px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 leading-relaxed"
                                            style={{
                                              background: `linear-gradient(135deg, ${subject.color}15, ${subject.color}10)`,
                                              border: `1px solid ${subject.color}25`,
                                              color: '#e8e6e3',
                                              whiteSpace: 'normal',
                                              wordBreak: 'break-word',
                                              lineHeight: '1.5',
                                              minHeight: 'auto',
                                              height: 'auto'
                                            }}
                                          >
                                            #{tag}
                                          </Badge>
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    );
                  });
                })()
              ) : (
                // 其他課程的原始顯示方式
                subject.teachers.map((teacher, index) => (
                  <motion.div
                    key={teacher.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Card 
                      className="relative overflow-hidden border-0"
                      style={morandiGlassCardStyle}
                    >
                      <div className="noise-texture absolute inset-0 opacity-30"></div>
                      <CardContent className="p-6 relative z-10">
                        <div className="flex flex-col md:flex-row md:items-start gap-6">
                          {/* Teacher Info */}
                          <div className="md:w-1/3">
                            <h3 
                              className="text-2xl font-bold mb-2"
                              style={{ 
                                color: '#e8e6e3',
                                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                              }}
                            >
                              {teacher.name}
                            </h3>
                            {teacher.level && (
                              <div className="mb-4">
                                <Badge
                                  className="text-xs px-3 py-1 rounded-full"
                                  style={{
                                    background: `linear-gradient(135deg, ${subject.color}20, ${subject.color}15)`,
                                    border: `1px solid ${subject.color}30`,
                                    color: subject.color
                                  }}
                                >
                                  {teacher.level}
                                </Badge>
                              </div>
                            )}
                            
                            {/* Rating Section */}
                            <div className="space-y-3">
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-2">
                                  <Heart size={16} style={{ color: '#d4b5b0' }} />
                                  <span className="text-sm" style={{ color: '#c4c1b8' }}>甜度</span>
                                </div>
                                <div className="flex-1">
                                  {teacher.sweetness !== null ? (
                                    <div className="flex items-center space-x-2">
                                      <div className="flex space-x-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                          <div
                                            key={star}
                                            className="w-3 h-3 rounded-full"
                                            style={{
                                              backgroundColor: star <= teacher.sweetness 
                                                ? '#d4b5b0' 
                                                : 'rgba(212, 181, 176, 0.2)'
                                            }}
                                          />
                                        ))}
                                      </div>
                                      <span 
                                        className="text-sm font-semibold"
                                        style={{ color: '#d4b5b0' }}
                                      >
                                        {teacher.sweetness}/5.0
                                      </span>
                                    </div>
                                  ) : (
                                    <span className="text-sm" style={{ color: '#b8b5af' }}>
                                      ???/5.0
                                    </span>
                                  )}
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-2">
                                  <Snowflake size={16} style={{ color: '#a8b5c4' }} />
                                  <span className="text-sm" style={{ color: '#c4c1b8' }}>涼度</span>
                                </div>
                                <div className="flex-1">
                                  {teacher.coolness !== null ? (
                                    <div className="flex items-center space-x-2">
                                      <div className="flex space-x-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                          <div
                                            key={star}
                                            className="w-3 h-3 rounded-full"
                                            style={{
                                              backgroundColor: star <= teacher.coolness 
                                                ? '#a8b5c4' 
                                                : 'rgba(168, 181, 196, 0.2)'
                                            }}
                                          />
                                        ))}
                                      </div>
                                      <span 
                                        className="text-sm font-semibold"
                                        style={{ color: '#a8b5c4' }}
                                      >
                                        {teacher.coolness}/5.0
                                      </span>
                                    </div>
                                  ) : (
                                    <span className="text-sm" style={{ color: '#b8b5af' }}>
                                      ???/5.0
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          {/* Tags Section */}
                          <div className="md:w-2/3">
                            <h4 
                              className="text-lg font-semibold mb-3"
                              style={{ color: '#e8e6e3' }}
                            >
                              教學特色
                            </h4>
                            <div className="flex flex-wrap gap-3 items-start">
                              {teacher.tags.map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="secondary"
                                  className="text-sm px-3 py-2 rounded-lg transition-all duration-300 hover:scale-105 leading-relaxed"
                                  style={{
                                    background: `linear-gradient(135deg, ${subject.color}15, ${subject.color}10)`,
                                    border: `1px solid ${subject.color}25`,
                                    color: '#e8e6e3',
                                    whiteSpace: 'normal',
                                    wordBreak: 'break-word',
                                    lineHeight: '1.5',
                                    minHeight: 'auto',
                                    height: 'auto'
                                  }}
                                >
                                  #{tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              )}
            </div>
          </motion.section>
        ) : (
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <Card 
              className="relative overflow-hidden border-0"
              style={morandiGlassCardStyle}
            >
              <div className="noise-texture absolute inset-0 opacity-30"></div>
              <CardHeader className="relative z-10">
                <CardTitle 
                  className="flex items-center space-x-2"
                  style={{ color: '#e8e6e3' }}
                >
                  <Lightbulb size={24} style={{ color: subject.color }} />
                  <span>課程詳細內容</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <div 
                  className="text-center py-12"
                  style={{ color: '#b8b5af' }}
                >
                  <AlertCircle size={48} className="mx-auto mb-4 opacity-50" />
                  <p className="text-lg mb-2">課程內容正在準備中</p>
                  <p className="text-sm">詳細的課程資訊、學習重點、考試技巧等內容即將更新</p>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        )}

        {/* Back to List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => setActiveTab('courses')}
            className="px-8 py-3 rounded-full font-medium transition-all duration-300 relative overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${subject.color}30, ${subject.color}20)`,
              border: `1px solid ${subject.color}40`,
              color: '#e8e6e3',
              boxShadow: `0 4px 16px ${subject.color}20`
            }}
          >
            <div className="noise-texture absolute inset-0 opacity-30"></div>
            <span className="relative z-10">瀏覽其他科目</span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}