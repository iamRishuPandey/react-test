import React from 'react';

function Product(props) {
  const { id, name, category } = props;

const deleteButtons = document.querySelectorAll('.delete-product');

deleteButtons.forEach(button => {
  button.addEventListener('click', e => {
    const product = e.target.parentNode;
    const productName = product.querySelector('.product-name').innerText;

    product.remove();

    let products = JSON.parse(localStorage.getItem('products'));
    products = products.filter(p => p.name !== productName);
    localStorage.setItem('products', JSON.stringify(products));
  });
});


const product = {
  name: productName,
  price: productPrice
};

let products = JSON.parse(localStorage.getItem('products')) || [];
products.push(product);
localStorage.setItem('products', JSON.stringify(products));


  return (
    <div>
    <div>
      <h2>{name}</h2>
      <p>Category: {category}</p>
      <p>ID: {id}</p>
    </div>
    <div class="product">
    <h3 class="product-name">Product Name</h3>
    <p class="product-price">$10.00</p>
    <button class="delete-product">Delete</button>
  </div>
  </div>
  
  );
}

export default Product;
