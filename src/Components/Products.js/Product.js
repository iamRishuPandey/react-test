import React from 'react';

function Product(props) {
  const { id, name, category } = props;



const product = {
  name: productName,
  price: productPrice
};

let products = JSON.parse(localStorage.getItem('products')) || [];
products.push(product);
localStorage.setItem('products', JSON.stringify(products));


  return (
    <div>
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>ID: {id}</p>
    </div>
  
  );
}

export default Product;
