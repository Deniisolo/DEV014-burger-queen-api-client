import styles from "./Order.module.css";
import { GrSubtractCircle } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";

interface OrderItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface OrderProps {
  products: OrderItem[];
  removeProduct: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
}

export function Order({ products, removeProduct, updateQuantity }: OrderProps) {
  const [totalOrder, setTotalOrder] = useState<number>();

  useEffect(() => {
    let totalOrder = 0;
    for (const totalProduct of products) {
      totalOrder += totalProduct.quantity * totalProduct.price;
    }
    setTotalOrder(totalOrder);
  });
  return (
    <div className={styles.containerOrder}>
      <div>
        <h4>Resumen del pedido</h4>
      </div>
      {products.map((product) => (
        <div key={product.id} className={styles.containerOrderChild}>
          <p>{product.name}</p>
          <p>{product.quantity}</p>
          <p>${product.price}</p>
          <button
            onClick={() => updateQuantity(product.id, product.quantity - 1)}
            disabled={product.quantity === 1}
          >
            <GrSubtractCircle className={styles.icon} />
          </button>
          <button onClick={() => removeProduct(product.id)}>
            <FaRegTrashCan className={styles.icon} />
          </button>
        </div>
      ))}
      <div>
        <p> total: ${totalOrder}</p>
      </div>
    </div>
  );
}
