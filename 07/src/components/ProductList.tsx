import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  dealEnds: string;
}

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Deal ends on: {new Date(product.dealEnds).toLocaleDateString()}</p>
          <p>${product.price}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
