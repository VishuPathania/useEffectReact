import React, { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [productId, setProductId] = useState('');
  const [sellingPrice, setSellingPrice] = useState('');
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');

  const handleAddClick = () => {
    onAddProduct({
      id: productId,
      sellingPrice,
      name: productName,
      category,
    });

    setProductId('');
    setSellingPrice('');
    setProductName('');
    setCategory('');
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      <label>
        Product ID:
        <input type="text" value={productId} onChange={(e) => setProductId(e.target.value)} />
      </label>
      <br />
      <label>
        Selling Price:
        <input
          type="number"
          value={sellingPrice}
          onChange={(e) => setSellingPrice(e.target.value)}
        />
      </label>
      <br />
      <label>
        Product Name:
        <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
      </label>
      <br />
      <label>
        Category:
        <select value={category} onChange={handleCategoryChange}>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Food">Food</option>
          <option value="Skincare">Skincare</option>
        </select>
      </label>
      <br />
      <button onClick={handleAddClick}>Add Product</button>
    </div>
  );
};

export default ProductForm;
