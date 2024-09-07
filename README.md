# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- I've made a QR code generator which uses Firebase for authentication and real-time data storage. In this app, I've introduced a feature which allows user to make dynamic qr codes only when they're signed in and they are provided with limited tokens to create dynamic qr codes. This web-app is primarily made with React-js. The difficulties that I encountered were the conditional rendering, private routing for the pages, which demands the sign-up of the user, the state of tokens and the state management of the tokens, The web app is in its mvp stage and I am focussing on making new features, The codebase is scalable and qualifies the production norms

to use env files in vite+react app: we need to use import.meta.VITE_REACT_API_NAME ; VITE_REACT prefix is must for vite app
