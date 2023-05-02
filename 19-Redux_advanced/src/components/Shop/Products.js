import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 6,
    title: "My First Book",
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    price: 5,
    title: "My Second Book",
    description: "The Second book i ever wrote",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((book) => {
          return (
            <ProductItem
              key={book.id}
              id={book.id}
              title={book.title}
              price={book.price}
              description={book.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;
