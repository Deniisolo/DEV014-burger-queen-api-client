import styles from "./Order.module.css";
import { GrSubtractCircle } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";

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
  return (
    <div className={styles.containerOrder}>
      <div>
        <h4>Resumen del pedido</h4>
      </div>
      {products.map((product) => (
        <div key={product.id} className={styles.containerOrderChild}>
          <p>{product.name}</p>
          <p>{product.quantity}</p> {/* Mostrar la cantidad de productos */}
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
    </div>
  );
}
