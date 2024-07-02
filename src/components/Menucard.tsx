import { FaCirclePlus } from "react-icons/fa6";
import styles from "./Menucard.module.css";
import { useEffect, useState } from "react";
import { ProductsApi } from "../services/APIService";

interface Products {
  id: number;
  name: string;
  price: number;
  type: string;
}

interface MenucardProps {
  select: string;
  addProduct: (product: Products) => void;
}

export function Menucard({ select, addProduct }: MenucardProps) {
  const [productsFilter, setpruductsfilter] = useState<Products[]>([]);

  useEffect(() => {
    const getProduct = async () => {
      const allProducts: Products[] = await ProductsApi();

      const filteredProducts = select
        ? allProducts.filter(
            (product) => product.type.toLowerCase() === select.toLowerCase()
          )
        : [];
      setpruductsfilter(filteredProducts);
    };

    getProduct();
  }, [select]);

  return (
    <div className={styles.containerCardMenuFather}>
      {productsFilter.map((product) => (
        <div key={product.id} className={styles.containerCardMenu}>
          <p className={styles.food}>{product.name}</p>
          <p className={styles.price}>${product.price}</p>
          <button onClick={() => addProduct(product)}>
            <FaCirclePlus className={styles.icon} />
          </button>
        </div>
      ))}
    </div>
  );
}
