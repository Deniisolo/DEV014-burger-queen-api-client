import { FaCirclePlus } from "react-icons/fa6";
import styles from "./Menucard.module.css";
import { useEffect, useState } from "react";
import { ProductsApi } from "../services/APIService";

interface orderitem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export function Menucard(props: {
  select: string;
  setproducts: (callback: (prevProducts: orderitem[]) => orderitem[]) => void;
}) {
  const [productsFilter, setpruductsfilter] = useState<any[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const allProducts = await ProductsApi();

      const filteredProducts = props.select
        ? allProducts.filter(
            (product) =>
              product.type.toLowerCase() === props.select.toLowerCase()
          )
        : [];
      setpruductsfilter(filteredProducts);
    };

    getProduct();
  }, [props.select]);

  return (
    <div className={styles.containerCardMenuFather}>
      {productsFilter.map((product) => (
        <div key={product.id} className={styles.containerCardMenu}>
          <p className={styles.food}>{product.name}</p>
          <p className={styles.price}>${product.price}</p>
          <button
            onClick={() => {
              props.setproducts((prevProducts) => [...prevProducts, product]);
            }}
          >
            <FaCirclePlus className={styles.icon} />
          </button>
        </div>
      ))}
    </div>
  );
}
