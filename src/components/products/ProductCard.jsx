import React from 'react';
import { FaShoppingCart, FaHeart, FaRupeeSign, FaPrescription, FaTemperatureLow } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useCart } from '../../context/CartContext';

const ProductCard = React.memo(({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={product.image || '/images/products/default.jpg'} 
          alt={product.name}
          className="product-image"
          onError={(e) => {
            e.target.src = '/images/products/default.jpg';
          }}
        />
        
        {product.stock === 'Limited Stock' && (
          <span className="stock-badge limited">Limited Stock</span>
        )}
        {product.requiresPrescription && (
          <span className="prescription-badge">
            <FaPrescription /> Rx Required
          </span>
        )}
        {product.features?.includes('Cold chain required') && (
          <span className="cold-chain-badge">
            <FaTemperatureLow /> Cold Chain
          </span>
        )}
      </div>

      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h4 className="product-title">{product.name}</h4>
        <p className="product-manufacturer">{product.manufacturer}</p>
        
        <div className="product-dosage">
          <span className="badge bg-secondary">{product.dosage}</span>
        </div>
        
        <p className="product-description">{product.description}</p>
        
        <div className="product-features">
          {product.features?.slice(0, 2).map((feature, index) => (
            <span key={index} className="feature-tag">{feature}</span>
          ))}
        </div>
        
        <div className="product-price">
          <FaRupeeSign />
          <span className="price">{product.price.toLocaleString()}</span>
          <span className="price-unit">/unit</span>
        </div>
        
        <div className="stock-status">
          <span className={`badge ${product.stock === 'In Stock' ? 'bg-success' : 'bg-warning'}`}>
            {product.stock}
          </span>
        </div>
      </div>

      <div className="product-actions">
        <button 
          className="btn btn-primary add-to-cart-btn"
          onClick={handleAddToCart}
          disabled={product.stock === 'Out of Stock'}
        >
          <FaShoppingCart /> Add to Cart
        </button>
        
        <button className="btn btn-outline-secondary wishlist-btn">
          <FaHeart />
        </button>
        
        <button className="btn btn-outline-info quote-btn">
          Get Quote
        </button>
      </div>
    </div>
  );
});

export default ProductCard;