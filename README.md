# E-commerce Platform

A modern, responsive e-commerce platform built with React, TypeScript, and Vite. This application provides a complete online shopping experience with product browsing, cart management, order tracking, and more.

## 🚀 Features

- **Product Browsing**: View products with filtering and sorting options
- **Shopping Cart**: Add/remove items, update quantities
- **Order Tracking**: Real-time order status updates
- **User Authentication**: Secure login and registration
- **Responsive Design**: Works on all device sizes
- **Modern UI**: Built with Material-UI and Tailwind CSS
- **State Management**: Zustand for global state management
- **API Integration**: Axios for API requests
- **Type Safety**: Full TypeScript support

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS, Styled Components, Material-UI
- **State Management**: Zustand
- **Routing**: React Router v7
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form
- **Icons**: React Icons
- **Maps**: Google Maps API
- **Build Tool**: Vite

## 📦 Prerequisites

- Node.js (v16 or later)
- npm or yarn

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd E-commerce-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add your environment variables:
   ```env
   VITE_API_URL=your_api_url_here
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 📁 Project Structure

```
src/
├── assets/            # Static assets (images, fonts, etc.)
├── Components/        # Reusable UI components
│   ├── Common/        # Common components (Header, Footer, etc.)
│   ├── Home/          # Home page components
│   └── ProductPage/   # Product page components
├── Constants/         # Application constants
├── features/          # Feature-based modules
│   ├── Auth/          # Authentication
│   └── cart/          # Shopping cart
├── hooks/             # Custom React hooks
├── Layout/            # Layout components
├── Pages/             # Page components
│   ├── AboutUs/       # About Us page
│   ├── Blogs/         # Blog posts
│   ├── Faq/           # FAQ page
│   ├── Home/          # Home page
│   ├── Product/       # Product listing
│   └── orders/        # Order tracking
├── Routes/            # Application routes
├── services/          # API services
├── store/             # State management
├── types/             # TypeScript type definitions
├── ui/                # UI components
└── utls/              # Utility functions
```

## 🧪 Available Scripts

- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build
- `lint`: Run ESLint

## 🌐 API Integration

The application uses the following API endpoints:
- Base URL: `https://api.escuelajs.co/api/v1/`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request




If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
