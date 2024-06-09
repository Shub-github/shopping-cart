// here we are tracking the cart length by a slice (initialState)
// to fetch the initialState or data from slice we use "useSelector" hook

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  // jub cart ki value change hogi useeffect se amount change hoga

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div>
      {cart.length > 0 ? (
        <div>
          <div>
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p>
              <span>Total Item:{cart.length}</span>
            </p>
          </div>

          <div>
            <p>Total amount :${totalAmount}</p>
          </div>
        </div>
      ) : (
        <div>
          <h1>Cart Empty!!</h1>
          <NavLink to="/">Shop Now</NavLink>
        </div>
      )}
    </div>
  );
};

export default Cart;
