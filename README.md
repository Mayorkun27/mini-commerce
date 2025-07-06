# Mini-Commerce

A modern, responsive e-commerce application built with Next.js 14, TypeScript, and Tailwind CSS. This project demonstrates a complete shopping experience with product browsing, cart management, and checkout functionality.

## 🚀 Features

- **Product Catalog**: Browse through a curated selection of products with detailed information
- **Product Details**: View individual product pages with comprehensive descriptions and images
- **Shopping Cart**: Add, remove, and update quantities of products with persistent storage
- **Checkout Process**: Complete order flow with form validation and order confirmation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **State Management**: Efficient cart state management with Zustand and local storage persistence
- **Loading States**: Smooth loading animations and skeleton screens
- **Error Handling**: Comprehensive error handling with user-friendly messages

## 🛠 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Data Fetching**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Icons**: [Heroicons](https://heroicons.com/)
- **Image Optimization**: Next.js Image component
- **Testing**: [Jest](https://jestjs.io/) with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## 📦 Installation

1. **Clone the repository**
   ```bash git clone https://github.com/yourusername/mini-commerce.git```
   
   cd mini-commerce

3. **Install dependencies**
   
   npm install
   # or
   yarn install
   # or
   pnpm install
   

4. **Run the development server**
   
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Project Structure

src/
├── app/                        # App Router pages and layouts
│   ├── cart/                   # Shopping cart page
│   ├── checkout/               # Checkout flow pages
│   │   └── success/            # Order success page
│   ├── product/[slug]/         # Dynamic product pages
│   ├── store/                  # Zustand store configurations
│   ├── globals.css             # Global styles
│   ├── layout.tsx              # Root layout
│   └── page.tsx                # Home page
├── components/                 # Reusable UI components
│   ├── __tests__/              # Component tests
│   ├── CartItemCard.tsx        # Cart item display component
│   ├── CheckoutItemCard.tsx    # Checkout item summary
│   ├── header.tsx              # Navigation header
│   ├── layout-wrapper.tsx      # Layout wrapper component
│   └── product-card.tsx        # Product display card
├── data/                       # Static data files
│   └── products.json           # Product catalog data
├── lib/                        # Utility functions and configurations
│   ├── products.ts             # Product data fetching logic
│   └── react-query-provider.tsx # React Query setup
└── types/                      # TypeScript type definitions
    └── index.ts                # Shared type definitions


## 🎯 Key Features Explained

### Product Management
- **Product Catalog**: Displays products in a responsive grid layout
- **Product Details**: Individual product pages with SEO optimization
- **Image Optimization**: Uses Next.js Image component for optimal loading
- **Category Filtering**: Products organized by categories

### Shopping Cart
- **Add to Cart**: Add products with quantity management
- **Persistent Storage**: Cart data persists across browser sessions
- **Quantity Controls**: Increase/decrease quantities with intuitive UI
- **Remove Items**: Easy item removal with confirmation
- **Price Calculations**: Real-time total price calculations

### Checkout Process
- **Form Validation**: Comprehensive form validation for user data
- **Order Processing**: Simulated order processing with loading states
- **Order Confirmation**: Detailed order confirmation with order ID
- **Receipt Generation**: Printable receipt functionality

### User Experience
- **Responsive Design**: Mobile-first approach with breakpoint optimizations
- **Loading States**: Skeleton screens and loading animations
- **Error Handling**: User-friendly error messages and recovery options
- **Navigation**: Intuitive navigation with active state indicators

## 🧪 Testing

The project includes comprehensive tests for components and functionality:

# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage

### Test Coverage
- **Component Tests**: Unit tests for all major components
- **Cart Functionality**: Tests for cart operations and state management
- **User Interactions**: Tests for user interactions and event handling

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Build

# Create production build
npm run build

# Start production server
npm start


## 📱 Responsive Design

The application is fully responsive with optimized layouts for:
- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1440px and up

## 🔧 Configuration

### Environment Variables
Create a .env.local file for environment-specific configurations:

NEXT_PUBLIC_APP_URL=http://localhost:3000

### Tailwind CSS
Custom styles and components are defined in src/app/globals.css:
- Custom animations (fade-in)
- Input field styling
- Responsive breakpoints

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic code splitting with Next.js App Router
- **Bundle Analysis**: Optimized bundle sizes
- **Lazy Loading**: Components and images load on demand
- **Caching**: React Query for efficient data caching

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (git checkout -b feature/amazing-feature)
3. Commit your changes (git commit -m 'Add amazing feature')
4. Push to the branch (git push origin feature/amazing-feature)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔮 Future Enhancements

- **User Authentication**: User login and registration
- **Payment Integration**: Real payment processing with Stripe
- **Product Search**: Advanced search and filtering capabilities
- **User Reviews**: Product rating and review system
- **Wishlist**: Save products for later functionality
- **Order History**: User order tracking and history
- **Admin Panel**: Product management interface
- **API Integration**: Connect to external product APIs
- **PWA Features**: Offline functionality and push notifications

## 🐛 Highlights 

- Product images are sourced from Unsplash (external dependency)
- Checkout process is simulated (no real payment processing)

## 📞 Support

For support, please open an issue in the GitHub repository or contact the development team.

---

**Built with ❤️ using Next.js and TypeScript**
