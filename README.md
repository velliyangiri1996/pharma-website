# Pharmaceutical Distribution Website

A comprehensive React-based website for pharmaceutical distribution companies, built with modern web technologies.

## Features

- **Product Catalog**: Browse pharmaceutical products by category
- **Dealer Network**: Register and manage dealer partnerships
- **Services**: Showcase distribution services
- **Contact System**: Multi-channel contact options
- **Responsive Design**: Mobile-friendly interface
- **E-commerce**: Shopping cart functionality
- **Admin Panel**: Content management system

## Tech Stack

- **Frontend**: React 18, React Router DOM 6
- **Styling**: Bootstrap 5, SCSS, Custom CSS
- **State Management**: React Context API
- **Forms**: React Hook Form with Yup validation
- **API**: Axios for HTTP requests
- **Icons**: React Icons
- **Notifications**: React Toastify
- **Carousel**: Swiper.js
- **SEO**: React Helmet Async

## Project Structure

```
pharma-distribution-website/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── images/
│       ├── about/
│       ├── company-logos/
│       └── products/
├── src/
│   ├── components/
│   │   ├── about/
│   │   │   ├── CompanyHistory.jsx
│   │   │   └── TeamSection.jsx
│   │   ├── common/
│   │   │   ├── Breadcrumb.jsx
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── ToastNotification.jsx
│   │   ├── dealer/
│   │   │   └── DealerCard.jsx
│   │   ├── home/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ProductsShowcase.jsx
│   │   │   ├── ServicesSection.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── layout/
│   │   │   ├── Footer.jsx
│   │   │   ├── Footer.scss
│   │   │   ├── Header.jsx
│   │   │   ├── Header.scss
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   └── products/
│   │       ├── CategoryFilter.jsx
│   │       ├── ProductCard.jsx
│   │       └── ProductModal.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   ├── companyData.js
│   │   ├── productsData.js
│   │   └── servicesData.js
│   ├── hooks/
│   │   ├── useForm.js
│   │   └── useProducts.js
│   ├── pages/
│   │   ├── AboutPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── DealersPage.jsx
│   │   ├── HomePage.jsx
│   │   ├── ProductsPage.jsx
│   │   └── ServicesPage.jsx
│   ├── styles/
│   │   ├── main.scss
│   │   ├── variables.scss
│   │   ├── components/
│   │   └── pages/
│   ├── utils/
│   │   ├── api.js
│   │   ├── helpers.js
│   │   └── validators.js
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── routes.js
├── build/
│   ├── asset-manifest.json
│   ├── index.html
│   ├── manifest.json
│   ├── images/
│   │   ├── about/
│   │   ├── company-logos/
│   │   └── products/
│   └── static/
│       ├── css/
│       │   └── main.f82d2978.css
│       ├── js/
│       │   ├── main.b9705049.js
│       │   └── main.b9705049.js.LICENSE.txt
│       └── media/
├── package.json
└── README.md
```

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd pharma-distribution-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

- Navigate through the website using the navbar.
- Browse products by category on the Products page.
- Add items to cart for e-commerce functionality.
- Contact via the contact form or dealer registration.

## Build

To build the project for production:

```bash
npm run build
```

## Contributing

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the Giri & Santhiya.
