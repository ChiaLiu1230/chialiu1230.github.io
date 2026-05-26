const CONFIG = {
  // ===== 個人資料 =====
  name: "Ella Liu",
  title: "全端工程師 | App & Web Developer",
  description: "專注於 iOS、Web 與跨平台應用開發，擅長將需求轉化為實際產品。",
  github: "https://github.com/ChiaLiu1230",
  email: "guccihome24485@gmail.com",
  location: "雙北地區",

  // ===== 關於我 =====
  about: [
    "我是一位全端工程師，具備 iOS、Android、Web 前後端及 Flutter 跨平台開發經驗。熟悉從需求分析、架構設計到實作部署的完整開發流程。",
    "在工作中，我注重程式碼品質與系統穩定性，善於與團隊協作解決技術問題。我相信好的軟體來自於清晰的需求定義與紮實的技術實作。"
  ],

  // ===== 技術棧 =====
  skills: [
    {
      icon: "web",
      category: "Frontend / Web",
      items: ["React / Next.js", "Vue.js", "TypeScript", "Tailwind CSS / Ant Design"]
    },
    {
      icon: "mobile",
      category: "Mobile App",
      items: ["Swift (iOS) / UIKit / SwiftUI", "Kotlin (Android)", "Flutter (跨平台)", "MVVM / TCA 架構"]
    },
    {
      icon: "backend",
      category: "Backend / API",
      items: ["Node.js / NestJS", "Python / Java", "PostgreSQL / MySQL", "Docker / RESTful API"]
    },
    {
      icon: "other",
      category: "其他",
      items: ["Git / GitHub", "LINE Bot 開發", "自動化測試", "需求分析 / 系統設計"]
    }
  ],

  // ===== 作品集 =====
  projects: [
    {
      name: "智聯後台管理系統",
      subtitle: "Nexus Admin",
      description: "中小企業後台管理系統，整合電商訂單、商品庫存、使用者權限管理功能。採用 RBAC 權限控制，支援多角色管理（Admin / Manager / Staff）。",
      features: [
        "使用者管理與 RBAC 權限控制",
        "商品 CRUD 與分類管理",
        "訂單管理與狀態流轉",
        "庫存自動扣減",
        "JWT 認證機制"
      ],
      tags: ["Next.js", "NestJS", "PostgreSQL", "Docker", "TypeScript"],
      images: ["nexus-admin-01.jpg", "nexus-admin-02.jpg"],
      icon: "admin"
    },
    {
      name: "智聯商城 Web",
      subtitle: "Nexus Web",
      description: "電商購物網站前台，提供消費者瀏覽商品、購物車、下單等完整購物流程。採用 Next.js App Router，響應式設計支援各種裝置。",
      features: [
        "商品瀏覽與分類篩選",
        "購物車功能（本地持久化）",
        "訂單建立與查詢",
        "會員登入 / 註冊",
        "響應式設計 (RWD)"
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "TanStack Query"],
      images: ["nexus-web-03.jpg", "nexus-web-01.jpg", "nexus-web-02.jpg"],
      icon: "shop"
    },
    {
      name: "教練個人品牌官網",
      subtitle: "Coach Web",
      description: "個人教練品牌官網，為都柏林健身教練 Victor Chen 打造，提供完整的服務介紹、健身知識文章與聯繫管道。支援五語系國際化，並內建後台管理系統供教練自行維護內容。",
      features: [
        "多語系支援（英文 / 西班牙文 / 愛爾蘭文 / 繁中 / 簡中）",
        "服務項目介紹（重量訓練、體態改造、武術搏擊）",
        "Fitness Tips 部落格（MDX 文章、後台編輯發布）",
        "聯繫表單整合 hCaptcha 防垃圾訊息",
        "後台管理系統（文章 CRUD、登入驗證）",
        "SEO 優化（結構化資料、Open Graph、Sitemap）",
        "Google Analytics 4 流量追蹤"
      ],
      tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "next-intl", "iron-session", "hCaptcha", "Vercel"],
      images: ["VC-coach-web-01.png", "VC-coach-web-02.png", "VC-coach-web-03.png", "VC-coach-web-04.png", "VC-coach-web-05.png"],
      imageRatio: "wide",
      icon: "web"
    },
    {
      name: "尼克車體包膜官網",
      subtitle: "NIC WRAP",
      description: "新北市新莊區專業汽機車包膜店的品牌形象官網，以高質感深色視覺呈現服務內容、施工案例與聯絡資訊。無框架純手寫實作，包含 Splash 開場動畫、深淺主題切換與拖曳輪播等互動效果。",
      features: [
        "Splash 開場動畫",
        "深色 / 亮色主題切換（含全螢幕過場動畫，偏好儲存至 LocalStorage）",
        "Hero 區塊：影片背景、社群連結、統計數字列",
        "施工案例 Gallery（汽車 / 機車篩選、拖曳輪播、方向鍵控制）",
        "顧客評價區塊（Google 評分 5.0、51 則）",
        "SEO 優化（JSON-LD AutoRepair Schema、Open Graph、Sitemap）",
        "聯絡資訊 + Google Maps 嵌入"
      ],
      tags: ["HTML5", "CSS3", "Vanilla JavaScript", "Google Fonts", "IntersectionObserver"],
      images: ["NIC-WRAP-web-1.png", "NIC-WRAP-web-2.png", "NIC-WRAP-web-3.png"],
      imageRatio: "wide",
      icon: "web"
    },
    {
      name: "AI Agent 自動部署平台",
      subtitle: "Claw Host",
      description: "SaaS 平台，讓使用者一鍵取得專屬的 OpenClaw + AI Skill Server 部署環境，透過容器化技術實現 AI Agent 的快速上線與管理。",
      features: [
        "AI Agent 自動化部署與管理",
        "OpenClaw 容器化部署",
        "多應用與 API 的協調管理",
        "資料庫 Schema 管理（Prisma ORM）"
      ],
      tags: ["Node.js", "TypeScript", "Prisma", "Docker", "pnpm", "Turborepo"],
      images: ["claw-host-01.png", "claw-host-02.png", "claw-host-03.png"],
      icon: "backend"
    },
    {
      name: "大型金融計算工具平台",
      subtitle: "Monetrix",
      description: "免費、零數據儲存的全球金融計算器聚合平台，涵蓋 35+ 個計算工具，橫跨個人理財、投資、稅務、商業四大領域，支援 25 種語言並針對全球市場本地化，以 SEO 為導向打造穩定的自然流量。",
      features: [
        "個人理財工具（13 個）：抵押貸款、信用卡還債、儲蓄目標等",
        "投資工具（10 個）：複利計算、FIRE 退休、ETF 費用對比等",
        "稅務計算器（8 個）：薪資到手金、資本利得稅、加密貨幣稅等",
        "商業工具（5 個）：損益平衡、電商利潤、SaaS 定價等",
        "25 種語言支援（含 RTL 阿拉伯文 / 波斯文）",
        "所有計算在客戶端執行，零伺服器數據儲存",
        "Google AdSense 整合（GDPR Cookie Consent v2 合規）",
        "完整 SEO：JSON-LD Schema、hreflang、動態 OG 圖片"
      ],
      tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4", "next-intl", "Recharts", "Google AdSense"],
      images: ["monetrix-01.png", "monetrix-02.png", "monetrix-03.png", "monetrix-04.png"],
      imageRatio: "wide",
      icon: "web"
    },
    {
      name: "開發者工具集合網站",
      subtitle: "Dev Toolnest",
      description: "面向開發者的工具集合網站，提供各類實用工具與資源，多語系支援，針對搜尋引擎優化，並實作完整的資安防護機制。",
      features: [
        "開發工具集合與展示",
        "多語系支援（next-intl）",
        "響應式設計（RWD 五種版型）",
        "SEO 優化",
        "完整資安防護標頭（CSP、XSS、CSRF）"
      ],
      tags: ["Next.js", "React 19", "TypeScript", "Tailwind CSS v4", "next-intl", "lucide-react"],
      images: ["dev-tool-01.png", "dev-tool-02.png", "dev-tool-03.png"],
      imageRatio: "wide",
      icon: "web"
    },
    {
      name: "AI 輔助 Web IDE",
      subtitle: "webWorkspace",
      description: "行動優先的 Web IDE，透過 Claude Code CLI 實現 AI 輔助開發，支援多專案管理、程式碼檢視與版本控制，可透過 VPN 在任何設備上存取。",
      features: [
        "聊天型 AI 協作（討論模式 / 即時執行模式）",
        "Claude Code CLI 整合",
        "多專案管理（類瀏覽器標籤切換）",
        "程式碼檢視與 Diff 視圖（CodeMirror 6）",
        "版本控制（提交歷史、分支切換、AI 輔助批量提交）",
        "終端模擬（xterm.js + node-pty）",
        "Docker 容器化部署"
      ],
      tags: ["Preact", "TypeScript", "Fastify", "WebSocket", "CodeMirror 6", "xterm.js", "Docker"],
      images: ["web-IDE-01.png", "web-IDE-02.png"],
      imageLayout: "duo-portrait",
      icon: "backend"
    }
  ],

  // ===== 系統架構（如果不需要可以設為 null） =====
  architecture: {
    title: "系統架構",
    description: "智聯系統採用前後端分離架構，後端提供統一 RESTful API，前台與後台共用同一資料庫",
    layers: [
      { name: "PostgreSQL", sublabel: "Database", type: "database" },
      { name: "NestJS Backend", sublabel: "RESTful API + JWT + RBAC", type: "backend" },
      { name: "Nexus Admin", sublabel: "管理後台 (Next.js)", type: "frontend" },
      { name: "Nexus Web", sublabel: "購物網站 (Next.js)", type: "frontend" }
    ]
  },

  // ===== 工作經歷 =====
  experiences: [
    {
      title: "自由接案 / 全端工程師",
      company: "Freelance",
      period: "2026/02 – 至今",
      details: [
        "獨立承接社交平台、商家官網與客製化系統開發案件，負責需求訪談、功能規劃、實作與交付",
        "協助商家進行官方 LINE 串接、LINE Bot 功能實作與自動化互動流程設計",
        "以 Next.js、TypeScript、Node.js 等技術打造前後端整合方案，並支援部署、維護、SEO 與響應式體驗優化"
      ]
    },
    {
      title: "QA 工程師",
      company: "雲端互動股份有限公司",
      period: "2025/09 – 2026/01",
      details: [
        "參與大型金融機構企業網銀開發案，擔任工程師，負責前端功能實作、測試支援與問題修正",
        "與設計、後端、產品團隊協作，提升系統穩定性與使用體驗",
        "依專案需求使用 Swift / Kotlin / Python 等技術支援開發與整合"
      ]
    },
    {
      title: "全端工程師",
      company: "馬在飛科技有限公司",
      period: "2025/03 – 2025/08",
      details: [
        "參與大型金融機構企業網銀開發案，擔任工程師，負責前後端功能開發與整合",
        "協助後端 API 串接、前端功能實作與跨團隊協作",
        "支援專案上線前測試、問題排查與修正",
        "依專案需求使用 Swift / Kotlin / Flutter / React 等技術"
      ]
    }
  ],

  // ===== 頁尾 =====
  footer: {
    year: "2025",
    name: "Ella Liu"
  }
};

if (typeof module !== 'undefined') module.exports = CONFIG;
