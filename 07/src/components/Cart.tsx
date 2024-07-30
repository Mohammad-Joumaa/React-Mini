import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  dealEnds: string;
}

interface CartProps {
  cartItems: Product[];
  onRemoveFromCart: (id: number) => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onRemoveFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map(item => (
              <li key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>Category: {item.category}</p>
                  <p>Deal ends on: {new Date(item.dealEnds).toLocaleDateString()}</p>
                  <p>${item.price}</p>
                  <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
