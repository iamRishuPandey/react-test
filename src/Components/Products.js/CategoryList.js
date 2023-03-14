import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

function CategoryList(props) {
  const { categories } = props;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmitForm = (id, name, sellingPrice, category) => {
    const newProduct = {
      id,
      name,
      sellingPrice,
      category,
    };
    setProducts([...products, newProduct]);
  };

  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <h3>Add a New Product</h3>
      <ProductForm onSubmit={handleSubmitForm} />

      <hr />

      <h3>Products by Category</h3>

      <div>
        <label>Choose a category:</label>
        <select value={selectedCategory} onChange={handleSelectCategory}>
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <ProductList products={filteredProducts} />
    </div>
  );
}

export default CategoryList;
