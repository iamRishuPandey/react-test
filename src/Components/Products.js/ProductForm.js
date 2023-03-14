import React, { useState } from 'react';

function ProductForm(props) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [category, setCategory] = useState('');

  const handleIdChange = (event) => {
    setId(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSellingPriceChange = (event) => {
    setSellingPrice(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(id, name, sellingPrice, category);
    setId('');
    setName('');
    setSellingPrice('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Product ID:
        <input type="text" value={id} onChange={handleIdChange} />
      </label>

      <label>
        Product Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>

      <label>
        Selling Price:
        <input type="text" value={sellingPrice} onChange={handleSellingPriceChange} />
      </label>

      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="">-- Please Choose a Category --</option>
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="Skincare">Skincare</option>
        </select>
      </label>

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;
