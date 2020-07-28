import React, {useState} from 'react';
import './App.css';
import FoodCart from './FoodCart';

function App() {
  const [cart,setCart] = useState([]);
  const[products, setProduct] = useState([
    {
      name: 'Pizza',
      cost: 200,
      quantity: 0
    },
    {
      name: 'Burger',
      cost: 100,
      quantity: 0
    },
    {
      name: 'Fried Chicken',
      cost: 150,
      quantity: 0
    },
    {
      name: 'Taco',
      cost: 120,
      quantity: 0
    }
  ]);

  const addToCart = (product) => {
    let newProducts = [...products];
    let itemInProducts = newProducts.find(
      (item) => product.name === item.name
    );
    if (itemInProducts) {
      itemInProducts.quantity++;
    } else {
      itemInProducts = {
        ...product,
        quantity: 0
      };
      newProducts.push(itemInProducts);
    }
    setCart([...cart, {...product}]);
  };

  const deleteFromCart = (productToRemove) => {
    setProduct(
      products.filter((product) => product !== productToRemove)
    )
  }

  const clearCart = () => {
    setProduct([]);
    setCart([]);
  };

  const getTotalSum= () => {
    return products.reduce((sum, { cost, quantity }) => sum + cost * quantity, 0);
  };

  return (
    <div className="App">
      <header className="Toolbar">
        <h1 className="Counter">Counter</h1>
        <div className="Logo">
          <FoodCart />
          {cart.length}
        </div>
      </header>
      <div className="products">
        {cart.length > 0 && (<button onClick={() => clearCart()}>CLEAR CART</button>)}
        {products.map((product) => (
          <div className="product">
            <label className="Label">{product.name}</label>
            <label className="Label">{product.cost} ₹</label>
            <label className={product.quantity > 0 ? 'background-blue' : 'background-yellow'} >{product.quantity} </label>
            <button 
              className="Increment" id="1"
              onClick={() => addToCart(product)}>
                INCREMENT
            </button>
            <button 
              className="Delete"
              onClick={() => deleteFromCart(product)}>
                DELETE
            </button>
          </div>
        ))}
        <div className="Total">Total Cost: {getTotalSum()}₹ </div>
      </div>
    </div>
  );
}

export default App;
