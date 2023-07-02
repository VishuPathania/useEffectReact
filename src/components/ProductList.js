import React from 'react';

const ProductList = ({ category, products, onDeleteProduct }) => {
  const categoryProducts = products[category];

  if (!categoryProducts || Object.keys(categoryProducts).length === 0) {
    return <p>No products in this category lets add Some  !!!</p>;
  }

  const handleDelete = (productId) => {
    onDeleteProduct(category, productId);
  };

  return (
    <ul>
      {Object.keys(categoryProducts).map((productId) => (
        <li key={productId}>
          {categoryProducts[productId].name} - ${categoryProducts[productId].sellingPrice}
          <button onClick={() => handleDelete(productId)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
