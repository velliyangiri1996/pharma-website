import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductCard from '../components/products/ProductCard';
import CategoryFilter from '../components/products/CategoryFilter';
import { productsData } from '../data/productsData';

const ProductsPage = () => {
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Removed jQuery animations to prevent vibrating effects
  }, []);

  useEffect(() => {
    let filtered = productsData;
    
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => 
        product.category === selectedCategory || 
        product.subCategory === selectedCategory
      );
    }
    
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm]);

  const categories = [
    { id: 'all', name: 'All Products', count: productsData.length },
    { id: 'oncology', name: 'Oncology', count: productsData.filter(p => p.category === 'oncology').length },
    { id: 'vaccines', name: 'Vaccines', count: productsData.filter(p => p.category === 'vaccines').length },
    { id: 'cardiology', name: 'Cardiology', count: productsData.filter(p => p.category === 'cardiology').length },
    { id: 'neurology', name: 'Neurology', count: productsData.filter(p => p.category === 'neurology').length },
    { id: 'dermatology', name: 'Dermatology', count: productsData.filter(p => p.category === 'dermatology').length },
    { id: 'critical-care', name: 'Critical Care', count: productsData.filter(p => p.category === 'critical-care').length }
  ];

  return (
    <>
      <Helmet>
        <title>Pharmaceutical Products | Medicine Distributor</title>
        <meta name="description" content="Browse our extensive range of pharmaceutical products, medicines, and medical supplies." />
      </Helmet>

      {/* Hero Section */}
      <section className="page-hero products-hero">
        <div className="container">
          <h1>Our Pharmaceutical Products</h1>
          <p>Authorized distributor for quality medicines and medical supplies</p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="products-filter-section py-4 bg-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <CategoryFilter 
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
            <div className="col-lg-4">
              <div className="search-box">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-grid-section py-5">
        <div className="container">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-5">
              <h3>No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              <div className="row g-4">
                {filteredProducts.map((product) => (
                  <div className="col-xl-3 col-lg-4 col-md-6" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-5">
                <button className="btn btn-primary" id="loadMore">
                  Load More Products
                </button>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 bg-primary text-white">
        <div className="container text-center">
          <h2>Need Bulk Order or Special Medicines?</h2>
          <p className="mb-4">Contact us for bulk orders, special requirements, or medicines not listed</p>
          <a href="/contact" className="btn btn-light btn-lg">Contact Our Sales Team</a>
        </div>
      </section>
    </>
  );
};

export default ProductsPage;