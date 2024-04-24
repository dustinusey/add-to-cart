const CartItems = (props) => {
  const { image, name, price } = props;
  return (
    <div className="bg-white p-3 rounded-md my-5 flex items-center">
      {/* image */}
      <div className="w-full max-w-[75px] h-[50px] mr-5 bg-zinc-200 rounded-md"></div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
};
export default CartItems;
