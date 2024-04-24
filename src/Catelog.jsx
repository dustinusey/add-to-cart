import ProductCard from "./ProductCard";
const products = [
  {
    id: 0,
    productTitle: "Product 1",
    productSku: "123456",
    productImage: "",
    productDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt nostrum.",
    productPrice: "100.00",
  },
  {
    id: 1,
    productTitle: "Product 2",
    productSku: "789123",
    productImage: "",
    productDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt nostrum.",
    productPrice: "50.00",
  },
  {
    id: 2,
    productTitle: "Product 3",
    productSku: "523624",
    productImage: "",
    productDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur nesciunt nostrum.",
    productPrice: "25.00",
  },
];

const Catelog = (props) => {
  const { setShowCart, setCartCount } = props;
  return (
    <div className="w-full max-w-[1200px] m-auto flex gap-4 items-center p-5">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          productId={product.id}
          productTitle={product.productTitle}
          productSku={product.productSku}
          productImage={product.productImage}
          productDescription={product.productDescription}
          productPrice={product.productPrice}
          setShowCart={setShowCart}
          setCartCount={setCartCount}
        />
      ))}
    </div>
  );
};
export default Catelog;
