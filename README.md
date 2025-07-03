# 📝 Forms - React + Vite Project

This is a modern **React + Vite** frontend application designed for form handling and UI experimentation.

The app is built using the Vite bundler for fast development and optimized builds.  
It is **live and accessible** via GitHub Pages.

---

## 🌐 Live Demo

👉 [Visit the Live App](https://ritiksingh-deos.github.io/Forms/)

---

## 🚀 Features

- React functional components
- Fast Vite dev environment
- Modern JavaScript
- Clean form UI (can customize)
- GitHub Pages deployed (no backend)

---

## 🛠️ How to Run Locally

1. Clone the repository

```bash
git clone https://github.com/RITIKSINGH-DEOS/Forms.git
cd Forms
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm run dev
```

---

## 🚀 Deployment Guide (GitHub Pages via Vite)

1. Update `vite.config.js` with:

```js
export default defineConfig({
  plugins: [react()],
  base: "/Forms/"
})
```

2. Add this in `package.json` scripts:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "gh-pages -d dist"
}
```

3. Then run:

```bash
npm run build
npm run deploy
```

---

## ✍️ Author

Made with 💙 by [Ritik Singh](https://github.com/RITIKSINGH-DEOS)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
