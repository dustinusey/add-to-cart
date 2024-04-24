import CartItem from "./CartItem";

const Cart = (props) => {
  const { setShowCart, cart, setCart } = props;
  return (
    <div
      onClick={() => setShowCart(false)}
      className="w-full h-screen overflow-hidden bg-black bg-opacity-50 absolute top-0 right-0 overlay-ani"
    >
      {/* actual cart */}
      <div className="relative h-screen w-full">
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="w-full max-w-[400px] absolute top-0 right-0 h-full bg-zinc-200 p-5 cart-ani opacity-0"
        >
          {/* cart header */}
          <p className="text-4xl font-extrabold text-zinc-800">Your Cart</p>
          <ul>
            {cart.map((item) => (
              <CartItem name={item.name} price={item.price} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Cart;
