const CartIcon = (props) => {
  const { cartCount, setShowCart } = props;
  return (
    <div
      onClick={() => setShowCart(true)}
      className="relative mr-10 cursor-pointer"
    >
      <svg
        className="h-8 w-8 text-zinc-800"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {" "}
        <circle cx="9" cy="21" r="1" /> <circle cx="20" cy="21" r="1" />{" "}
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>

      {cartCount > 0 && (
        <div className="absolute size-[30px] rounded-full bg-blue-500 text-white -top-[10px] -right-[25px] border-4 border-white grid place-items-center text-xs font-bold">
          {cartCount}
        </div>
      )}
    </div>
  );
};
export default CartIcon;
