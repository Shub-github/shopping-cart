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
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="bg-gray-100 p-4 rounded-md">
            <div className="text-lg font-semibold">Your Cart</div>
            <div className="text-sm text-gray-600">Summary</div>
            <p className="mt-2">
              <span>Total Items: {cart.length}</span>
            </p>
          </div>

          <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-lg font-semibold">
              Total amount:{" "}
              <span className="text-green-500">${totalAmount}</span>
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col h-screen justify-center items-center">
          <h1 className="text-2xl font-bold mb-4">Cart Empty!!</h1>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border rounded">
            <NavLink to="/">Shop Now</NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
