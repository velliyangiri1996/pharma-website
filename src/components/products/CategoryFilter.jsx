import React, { useEffect } from 'react';
import $ from 'jquery';

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  useEffect(() => {
    // jQuery for category filter animation
    $('.category-btn').on('click', function() {
      $('.category-btn').removeClass('active');
      $(this).addClass('active');
    });
  }, []);

  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category.id}
          className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
          onClick={() => onCategoryChange(category.id)}
          data-category={category.id}
        >
          {category.name}
          {category.count && (
            <span className="category-count">({category.count})</span>
          )}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;