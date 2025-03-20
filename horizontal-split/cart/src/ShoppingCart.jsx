import React from 'react';

function ShoppingCart() {
  const [items] = React.useState([
    { id: 1, name: 'Product 1', quantity: 2 },
  ]);

  return (
    <div style={{ flex: 1, padding: '20px' }}>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} x {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;