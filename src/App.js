import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

const App = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const handleAddProduct = (product) => {
    setProducts((prevProducts) => {
      const categoryProducts = { ...prevProducts[product.category] };
      categoryProducts[product.id] = product;

      const updatedProducts = {
        ...prevProducts,
        [product.category]: categoryProducts,
      };

      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const handleDeleteProduct = (category, productId) => {
    setProducts((prevProducts) => {
      const categoryProducts = { ...prevProducts[category] };
      delete categoryProducts[productId];

      const updatedProducts = {
        ...prevProducts,
        [category]: categoryProducts,
      };

      localStorage.setItem('products', JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  return (
    <div>
      <Header />
      <ProductForm onAddProduct={handleAddProduct} />
      <h2>Product List</h2>
      <div>
        <h3>Electronics</h3>
        <ProductList
          category="Electronics"
          products={products}
          onDeleteProduct={handleDeleteProduct}
        />
      </div>
      <div>
        <h3>Food</h3>
        <ProductList
          category="Food"
          products={products}
          onDeleteProduct={handleDeleteProduct}
        />
      </div>
      <div>
        <h3>Skincare</h3>
        <ProductList
          category="Skincare"
          products={products}
          onDeleteProduct={handleDeleteProduct}
        />
      </div>
    </div>
  );
};

export default App;
