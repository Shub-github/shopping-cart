import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div className="flex p-4 border border-gray-300 rounded-md shadow-sm">
      <div className="flex-shrink-0">
        <div className="h-20 w-20">
          <img src={item.image} alt="Product Image" />
        </div>
      </div>
      <div className="ml-4 flex flex-col justify-between">
        <div>
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <h1 className="text-gray-500">{item.description}</h1>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-xl font-bold text-green-500">{item.price}</p>
          <div
            onClick={removeFromCart}
            className="ml-4 cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-200"
          >
            <FcDeleteDatabase className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
