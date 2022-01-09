import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'b1',
    title: 'Think and Grow Rich',
    price: 123,
    description: 'motivational'
  },
  {
    id: 'b2',
    title: 'Kizen',
    price: 523,
    description: 'productivity enhancer'
  },
  {
    id: 'b3',
    title: 'The monk sold his farari',
    price: 123,
    description: 'motivational'
  }
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite books</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key = {product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
        />
        ))}
      </ul>
    </section>
  );
};

export default Products;
