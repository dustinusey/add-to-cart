import CartIcon from "./Icons/CartIcon";

const Navbar = (props) => {
  const { cartCount, setShowCart } = props;
  return (
    <div className="p-4 bg-white">
      <div className="w-full max-w-[1200px] m-auto flex justify-between items-center">
        My Store
        <CartIcon setShowCart={setShowCart} cartCount={cartCount} />
      </div>
    </div>
  );
};
export default Navbar;
