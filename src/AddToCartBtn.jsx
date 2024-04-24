import { useState } from "react";
const AddToCartBtn = (props) => {
  const { setShowCart, setCartCount } = props;
  const [isLoading, setIsLoading] = useState(false);
  return (
    <button
      onClick={() => {
        setIsLoading(true);
        setTimeout(() => {
          setShowCart(true);
          setIsLoading(false);
        }, 1000),
          setCartCount((prevCount) => prevCount + 1);
      }}
      className="w-full p-3 rounded-md bg-blue-500 text-white font-bold mt-5 hover:bg-blue-600 duration-200"
    >
      {isLoading ? "Adding..." : "Add to Cart"}
    </button>
  );
};
export default AddToCartBtn;
