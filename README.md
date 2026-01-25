# Portfolio - Ella Liu

個人作品集網站，展示技術棧、作品集與工作經歷。

## 預覽

用瀏覽器直接開啟 `index.html`，或使用 VS Code Live Server 擴充套件。

## 部署到 GitHub Pages

### 1. 建立 Repository

1. 登入 [GitHub](https://github.com)
2. 點擊 `+` → `New repository`
3. Repository name：`chialiu1230.github.io`
4. 選擇 `Public`，不勾選任何初始化選項
5. 點擊 `Create repository`

### 2. 上傳檔案

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ChiaLiu1230/chialiu1230.github.io.git
git push -u origin main
```

### 3. 啟用 GitHub Pages

1. 進入 repository → `Settings` → `Pages`
2. Source 選擇 `Deploy from a branch`
3. Branch 選擇 `main` / `/ (root)`
4. 點擊 `Save`

部署完成後：https://chialiu1230.github.io

## 檔案結構

```
portfolio/
├── index.html      # 網站主頁
├── styles.css      # 樣式檔案
├── script.js       # JavaScript 互動
└── README.md       # 說明文件
```

## 技術

- HTML5
- CSS3 (RWD)
- Vanilla JavaScript
- Google Fonts (Inter, Noto Sans TC)

## 相關專案

- [Nexus Admin](https://github.com/ChiaLiu1230/nexus-admin) - 後台管理系統
- [Nexus Web](https://github.com/ChiaLiu1230/nexus-web) - 電商購物網站
