import AddToCartBtn from "./AddToCartBtn";

const ProductCard = (props) => {
  const {
    productId,
    productSku,
    productTitle,
    productImage,
    productDescription,
    productPrice,
    setShowCart,
    setCartCount,
  } = props;
  return (
    <div className="bg-white rounded-md p-3 w-full min-w-[200px] m-auto">
      {/* image container */}
      <div className="bg-zinc-300 rounded-md h-[100px] w-full"></div>

      {/* product title & price */}
      <div className="flex justify-between items-center p-1 my-3">
        <p className="font-bold">{productTitle}</p>
        <p>${productPrice}</p>
      </div>

      {/* product description */}
      <p>{productDescription}</p>

      {/* add to cart btn */}
      <AddToCartBtn setCartCount={setCartCount} setShowCart={setShowCart} />
    </div>
  );
};
export default ProductCard;
