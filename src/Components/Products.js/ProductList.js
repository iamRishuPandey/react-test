import React from 'react';

function ProductList(props) {
  const { products } = props;

  return (
    <div>
      {products.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.id} | {product.name} | {product.sellingPrice} | {product.category}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProductList;
