# Limani Supply - Ship Chandling Website

A modern, responsive ship chandling e-commerce platform built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui. Features both a public product catalog and a private member dashboard.

## 🚀 Features

### Public Catalog
- Browse ship chandling products by categories:
  - Rigging & Ropes
  - Safety Equipment
  - Navigation Tools
  - Maintenance Supplies
  - Provisions
- Product search and filtering
- Responsive design for all devices
- Nautical-themed UI with Navy Blue (#00234B) color scheme

### Member Dashboard
- User authentication and account management
- Order tracking and history
- Saved favorites and wishlist
- Account settings and preferences
- Loyalty points and member benefits

## 🎨 Design System

### Color Palette
- **Nautical Blue**: `#00234B` (primary)
- **Ocean Blues**: Supporting shades from `#003366` to `#ccebff`
- **Dock Colors**: Wood (#8b5a3c), Metal (#6b7280), Rope (#92400e)

### Typography
- **Serif**: Merriweather (headings, branding)
- **Sans-serif**: Roboto (body text, UI elements)

## 📁 Project Structure

```
src/
├── app/
│   ├── (public)/              # Public pages (catalog, home, etc.)
│   │   ├── layout.tsx         # Public layout with navigation
│   │   ├── page.tsx           # Home page
│   │   ├── catalog/           # Product catalog pages
│   │   └── ...
│   ├── (dashboard)/           # Protected member dashboard
│   │   ├── layout.tsx         # Dashboard layout with sidebar
│   │   ├── page.tsx           # Dashboard overview
│   │   ├── orders/            # Order management
│   │   ├── account/           # Account settings
│   │   └── ...
│   ├── api/                   # API routes
│   └── layout.tsx             # Root layout
├── components/
│   ├── navigation/            # Navigation components
│   │   ├── main-nav.tsx       # Main header navigation
│   │   └── footer.tsx         # Footer
│   ├── catalog/               # Catalog-related components
│   │   ├── product-card.tsx
│   │   ├── product-filter.tsx
│   │   └── ...
│   ├── dashboard/             # Dashboard components
│   │   ├── order-list.tsx
│   │   ├── stats-card.tsx
│   │   └── ...
│   └── ui/                    # shadcn/ui components (after setup)
├── types/                     # TypeScript interfaces
│   └── index.ts               # Product, Order, User types
├── lib/                       # Utility functions
│   ├── api.ts                 # API client
│   ├── utils.ts               # Helper functions
│   └── ...
├── hooks/                     # Custom React hooks
├── styles/
│   └── globals.css            # Global styles
└── public/                    # Static assets
    └── images/

```

## 🛠️ Tech Stack

- **Framework**: Next.js 15.x (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.x
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Merriweather & Roboto (Google Fonts)
- **State Management**: React Hooks (setup for Context/Redux as needed)
- **Package Manager**: npm

## 📋 Prerequisites

- Node.js 18.17 or later
- npm 9+

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📦 Install shadcn/ui Components

To add shadcn/ui components, use:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
npx shadcn-ui@latest add input
npx shadcn-ui@latest add select
# ... and others as needed
```

Components will be installed in `src/components/ui/`

## 🔑 Key Configuration Files

- **`next.config.js`**: Next.js configuration
- **`tailwind.config.ts`**: Tailwind CSS with custom nautical color palette
- **`tsconfig.json`**: TypeScript configuration with path aliases
- **`.eslintrc.json`**: ESLint rules
- **`package.json`**: Dependencies and scripts

## 🎯 Next Steps

1. **Install shadcn/ui components** for common UI elements (buttons, cards, etc.)
2. **Set up authentication** (NextAuth.js or similar)
3. **Create API routes** for product catalog and orders
4. **Add database** (PostgreSQL, MongoDB, etc.)
5. **Implement product filtering** and search functionality
6. **Add shopping cart** and checkout functionality
7. **Deploy** to Vercel or your hosting platform

## 🗂️ Component Creation Guide

### Creating a New Page

```typescript
// src/app/(public)/catalog/page.tsx
export default function CatalogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif font-bold text-nautical-900">
        Product Catalog
      </h1>
      {/* Content */}
    </div>
  )
}
```

### Creating a New Component

```typescript
// src/components/catalog/product-card.tsx
'use client'

import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md border border-nautical-100">
      {/* Card content */}
    </div>
  )
}
```

## 🎨 Tailwind CSS Custom Classes

The project includes custom classes for common patterns:

```html
<!-- Nautical gradient backgrounds -->
<div class="bg-gradient-to-r from-nautical-900 to-nautical-800"></div>

<!-- Ocean color shades -->
<div class="text-ocean-500 hover:text-ocean-600"></div>

<!-- Animations -->
<div class="animate-wave"></div>
<div class="animate-fade-in"></div>
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy with one click

### Docker

```bash
docker build -t limani-supply .
docker run -p 3000:3000 limani-supply
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Lucide React Icons](https://lucide.dev)

## 📝 License

This project is proprietary to Limani Supply.

## 👨‍💼 Support

For questions or support, contact: info@limanisupply.com

---

Built with ⚓ for the maritime industry
