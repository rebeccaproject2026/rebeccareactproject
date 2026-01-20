# Rebecca Seed Company - React Application

A modern React.js conversion of the Rebecca Seed Company website, built with React 18, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern React 18** with functional components and hooks
- **Tailwind CSS** for responsive design and styling
- **Framer Motion** for smooth animations and transitions
- **React Router** for client-side routing
- **Responsive Design** - works on all devices
- **Interactive Components** - hero slider, product filters, contact forms
- **Performance Optimized** - fast loading and smooth interactions

## 📁 Project Structure

```
rebecca-react-app/
├── public/
│   └── assets/          # Images and static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── HeroSlider.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Products.jsx
│   │   ├── Contact.jsx
│   │   └── ProductDetail.jsx
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## 🛠️ Installation & Setup

1. **Clone or navigate to the project directory:**
   ```bash
   cd rebecca-react-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🎨 Key Components

### Header Component
- Responsive navigation with mobile menu
- Top info bar with contact details
- Products dropdown menu
- Social media links

### Hero Slider
- Animated image slider with 3 slides
- Smooth transitions with Framer Motion
- Auto-play functionality
- Navigation arrows and indicators

### Product Components
- Product grid with filtering
- Product detail pages
- Image galleries
- Feature lists and specifications

### Contact Form
- Controlled form inputs
- Form validation
- Success/error messaging
- Contact information display

## 🎯 Pages

1. **Home** (`/`) - Hero slider, company info, top products, features
2. **About** (`/about-us`) - Company history, team stats, mission/vision
3. **Products** (`/products`) - Product grid with category filtering
4. **Product Detail** (`/product/:slug`) - Individual product information
5. **Contact** (`/contact-us`) - Contact form and company details

## 🎨 Styling

The project uses Tailwind CSS with custom configurations:

- **Primary Color**: `#4CAF50` (Green)
- **Secondary Color**: `#8BC34A` (Light Green)
- **Accent Color**: `#FFC107` (Amber)

Custom CSS classes are defined in `src/index.css` for common components like buttons, cards, and sections.

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## ✨ Animations

Framer Motion is used for:
- Page transitions
- Scroll-triggered animations
- Hero slider transitions
- Hover effects
- Loading states

## 🔧 Customization

### Adding New Products
Edit the products array in `src/pages/Home.jsx` and `src/pages/Products.jsx`:

```javascript
const products = [
  {
    id: 9,
    name: 'New Product',
    image: '/assets/images/new-product.png',
    description: 'Product description',
    category: 'vegetables', // or 'flowers'
    slug: 'new-product'
  }
]
```

### Modifying Colors
Update `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
      accent: '#your-color',
    }
  }
}
```

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx`

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy to Netlify/Vercel
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📄 License

This project is converted from the original Rebecca PHP application and maintains the same design and functionality in a modern React implementation.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: unicoder16@gmail.com
- Phone: (+1) 507-465-6522
