# 清大工工系學會新生網站 - 開發指南

## 音樂播放系統

### 自動播放設定
音樂系統採用積極的預設開啟策略：
- **預設狀態**: 音樂預設為開啟
- **自動播放**: 頁面載入後500ms開始嘗試播放
- **音量設定**: 預設音量50%，音量適中清晰可聞
- **靜默處理**: 瀏覽器阻止自動播放時靜默失敗，不顯示提示
- **記憶功能**: 記住用戶的音樂開關偏好

### 技術實現
```javascript
// 強制預設開啟策略
const getInitialMusicState = () => {
  const savedState = localStorage.getItem('background-music-enabled');
  if (savedState === null || savedState === 'true') {
    return true; // 首次訪問或明確開啟時
  }
  return savedState !== 'false'; // 只有明確關閉才不播放
};

// 積極的自動播放嘗試，音量提升至50%
useEffect(() => {
  if (musicEnabled && apiReady) {
    setTimeout(() => {
      playMusic().catch(() => {
        // 靜默失敗，不顯示任何提示
      });
    }, 500); // 快速響應
  }
}, [apiReady, musicEnabled]);
```

## UTF-8編碼問題根除系統

### 問題背景
中文亂碼問題通常源於字符編碼不一致，本系統已完全解決UTF-8編碼相關問題。所有中文字符都能完美顯示。

### 編碼問題解決方案

#### 1. 自動HTML頭部設置
系統會自動確保以下設置：
```html
<meta charset="UTF-8">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<html lang="zh-TW">
```

#### 2. 字體渲染優化
```css
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body, html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
               "PingFang SC", "Hiragino Sans GB", 
               "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, 
               sans-serif !important;
}
```

#### 3. 已修復的亂碼問題
- **OrientationPage.tsx**: "相信這將���成為" → "相信這將會成為"
- **CoursePage.tsx**: "培養社會���務精神" → "培養社會服務精神"  
- **SubjectDetailPage.tsx**: "報��要求嚴苛" → "報告要求嚴苛"
- **SubjectDetailPage.tsx**: "作���蠻多的" → "作業蠻多的"
- **SubjectDetailPage.tsx**: "上課���點名" → "上課會點名"
- **SubjectDetailPage.tsx**: "培養科學實驗���力" → "培養科學實驗能力"
- **SubjectDetailPage.tsx**: "每���課都要交上課筆記" → "每堂課都要交上課筆記"
- **SubjectDetailPage.tsx**: "三次作業(初稿800字���二稿1900字、終稿2500字)" → "三次作業(初稿800字、二稿1900字、終稿2500字)"
- **SubjectDetailPage.tsx**: "上課可以做自���的事" → "上課可以做自己的事"
- **SubjectDetailPage.tsx**: "教���特色" → "教學特色" (多處標題亂碼)
- **SubjectDetailPage.tsx**: "涼��" → "涼度"
- **SubjectDetailPage.tsx**: "即將��新" → "即將更新"

## 移動端優化性能系統

### 核心理念
本網站採用**移動端優先設計**，所有動畫和交互都經過簡化優化，確保在各種設備上都能流暢運行。

### 性能優化原則

#### 1. 簡化動畫系統
```css
/* 基礎過渡效果 - 移動端友好 */
.transition-smooth {
  transition: all 0.3s ease;
}

/* 避免複雜的GPU加速 */
.simple-hover:hover {
  transform: translateY(-2px);
}
```

#### 2. 尊重用戶偏好
```css
/* 自動檢測減少動畫偏好 */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

#### 3. 智能性能模式
```css
/* 低性能設備自動優化 */
.performance-mode [class*="animate-"] {
  animation: none !important;
}

.performance-mode .noise-texture::before {
  display: none;
}
```

### 可用的性能優化類別

#### 1. 基礎樣式類別
```css
.glass-light         /* 輕量玻璃效果 */
.glass-standard      /* 標準玻璃效果 */
.glass-elegant       /* 優雅玻璃效果 */
.glass-premium       /* 頂級玻璃效果 */
```

#### 2. 動畫類別
```css
.transition-smooth   /* 基礎過渡效果 */
.simple-hover        /* 簡化hover效果 */
.gentle-pulse        /* 溫和脈搏動畫 */
```

#### 3. 移動端類別
```css
.mobile-optimized    /* 移動端優化 */
.touch-friendly      /* 觸控友好 */
.performance-mode    /* 性能模式 */
```

### 編碼問題預防

#### React組件最佳實踐
```jsx
// 確保文本內容正確編碼
import { fixText } from './utils/encoding';

function MyComponent() {
  const content = "中文內容";
  const safeContent = fixText(content);
  
  return (
    <div>
      <p>{safeContent}</p>
    </div>
  );
}
```

#### 常見亂碼修復
```javascript
// 檢測並修復常見問題
const commonIssues = {
  '���': '',           // 替換字符
  'â€™': "'",          // 單引號
  'â€œ': '"',          // 左雙引號  
  'â€\u009d': '"',     // 右雙引號
  'â€"': '—',          // 長破折號
};
```

### 使用範例

#### React組件優化
```jsx
// 簡化的Motion動畫
<motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.3,
    ease: "easeOut"
  }}
>
  內容
</motion.div>

// 簡化的卡片效果
<div className="glass-standard transition-smooth">
  卡片內容
</div>

// 簡化的按鈕
<button className="simple-hover">
  按鈕
</button>
```

#### CSS動畫優化
```css
/* 簡化的動畫 */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.fade-in {
  animation: fadeIn 0.3s ease-out;
}
```

### 性能優化策略

#### 1. 避免複雜動畫
✅ **推薦：**
- 使用簡單的 `opacity` 和 `transform` 動畫
- 避免修改 `width`、`height`、`margin`、`padding`
- 使用 CSS `transition` 而非複雜的 `animation`

❌ **避免：**
```css
/* 會觸發重排的動畫 */
.bad-animation {
  transition: width 0.3s, height 0.3s;
}

/* 過於複雜的GPU加速 */
.over-optimized {
  will-change: transform, opacity, background;
  transform: translateZ(0) scale3d(1,1,1);
}
```

#### 2. 智能降級
```css
/* 移動端自動簡化 */
@media (max-width: 768px) {
  .complex-animation {
    animation: none;
  }
  
  .glass-effect {
    backdrop-filter: none;
    background: rgba(0,0,0,0.8);
  }
}
```

#### 3. 性能監控
```javascript
// 簡化的性能檢測
const isLowEnd = () => {
  return navigator.hardwareConcurrency < 4 || 
         /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

if (isLowEnd()) {
  document.body.classList.add('performance-mode');
}
```

### 移動端響應式設計

#### 導航欄優化
```css
@media (max-width: 640px) {
  .nav-animated-bg .justify-between {
    gap: 0.5rem;
  }
  
  .nav-tabs-container button span {
    display: none !important; /* 隱藏文字，只顯示圖標 */
  }
}
```

#### 觸控優化
```css
@media (hover: none) and (pointer: coarse) {
  .hover-effect:hover {
    /* 移動端禁用hover效果 */
    transform: none;
  }
  
  .touch-target {
    min-height: 44px; /* 符合觸控標準 */
    min-width: 44px;
  }
}
```

### 常見問題解決

#### Q: 中文字符顯示為亂碼？
A: 使用編碼工具檢查和修復：`fixText(corruptedText)`

#### Q: 移動端動畫卡頓？
A: 啟用性能模式：`document.body.classList.add('performance-mode')`

#### Q: 低端設備載入慢？
A: 實施懶加載和減少初始JS包大小

#### Q: 觸控操作不靈敏？
A: 確保觸控目標至少44x44px，避免過小的按鈕

### 最佳實踐檢查清單

#### ✅ 編碼相關
- [ ] 所有文件使用UTF-8編碼
- [ ] HTML設置正確的charset和lang
- [ ] 檢查並修復任何亂碼字符
- [ ] 測試多種設備和瀏覽器

#### ✅ 性能相關
- [ ] 動畫duration <= 0.3s
- [ ] 避免複雜的CSS選擇器
- [ ] 實施性能模式降級
- [ ] 移動端優先設計
- [ ] 觸控友好的UI元素

#### ✅ 移動端優化
- [ ] 響應式設計
- [ ] 觸控目標大小適當
- [ ] 避免hover依賴
- [ ] 簡化複雜動畫
- [ ] 優化字體大小和間距

這套簡化優化系統確保了網站在各種設備上都能提供流暢的用戶體驗，特別是在移動端和低性能設備上。重點放在實用性和兼容性，而非過度的視覺效果。