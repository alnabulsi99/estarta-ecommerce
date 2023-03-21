import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.css";
import ProductCard from "../../components/ProductCard";
import { fetchProducts } from "../../redux/prodcuts/actions";

export default function Products() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productsReducer);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className={styles.ProductsContainer}>
      {products?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
