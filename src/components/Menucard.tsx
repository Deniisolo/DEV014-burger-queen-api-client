import { FaCirclePlus } from "react-icons/fa6";
import styles from "./Menucard.module.css";
import { useEffect, useState } from "react";
import { ProductsApi } from "../services/APIService";

export function Menucard(props: { select: string }) {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const allProducts = await ProductsApi();

      const filteredProducts = props.select
        ? allProducts.filter(
            (product) =>
              product.type.toLowerCase() === props.select.toLowerCase()
          )
        : [];
      setProducts(filteredProducts);
    };

    getProduct();
  }, [props.select]);

  return (
    <div className={styles.containerCardMenuFather}>
      {products.map((product) => (
        <div key={product.id} className={styles.containerCardMenu}>
          <p className={styles.food}>{product.name}</p>
          <p className={styles.price}>${product.price}</p>
          <button>
            <FaCirclePlus className={styles.icon} />
          </button>
        </div>
      ))}
    </div>
  );
}
