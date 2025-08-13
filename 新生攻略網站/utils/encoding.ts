// UTF-8編碼檢查和修復工具

export class EncodingManager {
  private static instance: EncodingManager;

  private constructor() {
    this.initializeEncoding();
  }

  public static getInstance(): EncodingManager {
    if (!EncodingManager.instance) {
      EncodingManager.instance = new EncodingManager();
    }
    return EncodingManager.instance;
  }

  // 初始化正確的編碼設置
  private initializeEncoding(): void {
    // 設置文檔語言
    if (typeof document !== 'undefined') {
      document.documentElement.lang = 'zh-TW';
      
      // 確保meta charset存在且正確
      this.ensureMetaCharset();
      
      // 設置其他重要的meta標籤
      this.setupMetaTags();
      
      // 檢查並修復常見的編碼問題
      this.checkForEncodingIssues();
    }
  }

  // 確保正確的charset meta標籤
  private ensureMetaCharset(): void {
    let charsetMeta = document.querySelector('meta[charset]');
    
    if (!charsetMeta) {
      charsetMeta = document.createElement('meta');
      charsetMeta.setAttribute('charset', 'UTF-8');
      // 插入到head的最前面
      document.head.insertBefore(charsetMeta, document.head.firstChild);
    } else {
      // 確保charset是UTF-8
      charsetMeta.setAttribute('charset', 'UTF-8');
    }
  }

  // 設置其他重要的meta標籤
  private setupMetaTags(): void {
    const metaTags = [
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1.0'
      },
      {
        httpEquiv: 'Content-Type',
        content: 'text/html; charset=UTF-8'
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ];

    metaTags.forEach(tag => {
      let existingMeta = document.querySelector(`meta[name="${tag.name}"]`) || 
                        document.querySelector(`meta[http-equiv="${tag.httpEquiv}"]`);
      
      if (!existingMeta) {
        const meta = document.createElement('meta');
        if (tag.name) meta.setAttribute('name', tag.name);
        if (tag.httpEquiv) meta.setAttribute('http-equiv', tag.httpEquiv);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });
  }

  // 檢查常見的編碼問題
  private checkForEncodingIssues(): void {
    // 檢查頁面標題是否有亂碼
    const title = document.title;
    if (this.hasEncodingIssues(title)) {
      console.warn('檢測到標題可能存在編碼問題:', title);
    }

    // 定期檢查頁面內容
    setTimeout(() => this.scanPageForEncodingIssues(), 1000);
  }

  // 檢測字符串是否包含編碼問題
  public hasEncodingIssues(text: string): boolean {
    // 常見的亂碼模式
    const corruptPatterns = [
      /�+/, // 替換字符
      /\uFFFD+/, // Unicode替換字符
      /[\x00-\x08\x0E-\x1F\x7F]/, // 控制字符
      /\?\?\?/, // 問號亂碼
      /[À-ÿ]{2,}(?![À-ÿ\s])/ // 連續的擴展ASCII字符（可能是UTF-8被錯誤解析）
    ];

    return corruptPatterns.some(pattern => pattern.test(text));
  }

  // 掃描頁面內容尋找編碼問題
  private scanPageForEncodingIssues(): void {
    const textNodes = this.getTextNodes(document.body);
    const issues: { element: Node; text: string }[] = [];

    textNodes.forEach(node => {
      if (node.textContent && this.hasEncodingIssues(node.textContent)) {
        issues.push({
          element: node,
          text: node.textContent
        });
      }
    });

    if (issues.length > 0) {
      console.warn(`發現 ${issues.length} 個可能的編碼問題:`, issues);
      // 可以在這裡添加自動修復邏輯
    }
  }

  // 獲取所有文本節點
  private getTextNodes(element: Node): Node[] {
    const textNodes: Node[] = [];
    const walker = document.createTreeWalker(
      element,
      NodeFilter.SHOW_TEXT,
      null
    );

    let node;
    while (node = walker.nextNode()) {
      if (node.textContent && node.textContent.trim()) {
        textNodes.push(node);
      }
    }

    return textNodes;
  }

  // 嘗試修復常見的編碼問題
  public fixEncodingIssues(text: string): string {
    let fixed = text;

    // 修復常見的UTF-8雙重編碼問題
    const commonFixes: { [key: string]: string } = {
      'Â ': ' ',
      'â€™': "'",
      'â€œ': '"',
      'â€\u009d': '"',
      'â€"': '—',
      'â€¦': '…',
      'Ã¡': 'á',
      'Ã©': 'é',
      'Ã­': 'í',
      'Ã³': 'ó',
      'Ãº': 'ú',
      'Ã±': 'ñ',
      'Ã¼': 'ü',
      '���': '', // 移除替換字符
    };

    Object.entries(commonFixes).forEach(([corrupted, correct]) => {
      fixed = fixed.replace(new RegExp(corrupted, 'g'), correct);
    });

    return fixed;
  }

  // 驗證文本是否為有效的UTF-8
  public isValidUTF8(text: string): boolean {
    try {
      // 嘗試編碼再解碼
      const encoded = encodeURIComponent(text);
      const decoded = decodeURIComponent(encoded);
      return decoded === text;
    } catch (e) {
      return false;
    }
  }

  // 確保字符串正確編碼
  public ensureProperEncoding(text: string): string {
    if (!this.isValidUTF8(text) || this.hasEncodingIssues(text)) {
      return this.fixEncodingIssues(text);
    }
    return text;
  }

  // 設置正確的字體顯示
  public setupFontRendering(): void {
    // 添加字體渲染優化CSS
    const style = document.createElement('style');
    style.textContent = `
      * {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
      }
      
      /* 確保中文字符正確顯示 */
      body, html {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", 
                     "PingFang SC", "Hiragino Sans GB", 
                     "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, 
                     sans-serif !important;
      }
      
      /* 防止字符間距問題 */
      .chinese-text {
        word-break: keep-all;
        word-wrap: break-word;
        white-space: normal;
      }
    `;
    document.head.appendChild(style);
  }

  // 檢查瀏覽器編碼支持
  public checkBrowserSupport(): {
    utf8: boolean;
    textEncoder: boolean;
    intl: boolean;
  } {
    return {
      utf8: 'TextEncoder' in window && 'TextDecoder' in window,
      textEncoder: 'TextEncoder' in window,
      intl: 'Intl' in window
    };
  }
}

// 導出單例實例
export const encodingManager = EncodingManager.getInstance();

// 便捷函數
export function initializeEncoding(): void {
  encodingManager.setupFontRendering();
}

export function checkText(text: string): boolean {
  return !encodingManager.hasEncodingIssues(text);
}

export function fixText(text: string): string {
  return encodingManager.ensureProperEncoding(text);
}

// 自動初始化
if (typeof window !== 'undefined') {
  // 等待DOM載入後初始化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeEncoding);
  } else {
    initializeEncoding();
  }
}