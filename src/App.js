import React from 'react';
import CategoryList from './Components/Products.js/CategoryList';

function App() {
  const categories = ['Electronics', 'Food', 'Skincare'];

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
}

export default App;
