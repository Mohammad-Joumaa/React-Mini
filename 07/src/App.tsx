// src/App.tsx
import React, { useState, useEffect } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  dealEnds: string;
}

const products: Product[] = [
  { id: 1, name: 'Product 1', price: 29.99, imageUrl: 'https://via.placeholder.com/150', category: 'Electronics', dealEnds: '2024-12-31' },
  { id: 2, name: 'Product 2', price: 49.99, imageUrl: 'https://via.placeholder.com/150', category: 'Books', dealEnds: '2024-12-31' },
  { id: 3, name: 'Product 3', price: 19.99, imageUrl: 'https://via.placeholder.com/150', category: 'Clothing', dealEnds: '2024-12-31' },
  // Add more products as needed
];

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>E-commerce Store</h1>
      </header>
      <main>
        <ProductList products={products} onAddToCart={addToCart} />
        <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
      </main>
    </div>
  );
};

export default App;
