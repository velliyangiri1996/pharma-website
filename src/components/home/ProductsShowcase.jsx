import React from 'react';
import { productsData } from '../../data/productsData';
import ProductCard from '../products/ProductCard';

const ProductsShowcase = () => {
  // Show first 4 products as featured
  const featuredProducts = productsData.slice(0, 4);

  return (
    <section className="products-showcase py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">Quality pharmaceutical products from trusted manufacturers</p>
        </div>
        <div className="row g-4">
          {featuredProducts.map(product => (
            <div className="col-lg-3 col-md-6" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="/products" className="btn btn-primary">View All Products</a>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
