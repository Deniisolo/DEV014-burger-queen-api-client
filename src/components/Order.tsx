// src/components/Order.tsx
import styles from "./Order.module.css";
import { GrSubtractCircle } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { PiChefHat } from "react-icons/pi";
import { GrHistory } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../services/APIService";

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
  const [clientName, setClientName] = useState<string>("");
  const [warningMessage, setWarningMessage] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    let totalOrder = 0;
    for (const totalProduct of products) {
      totalOrder += totalProduct.quantity * totalProduct.price;
    }
    setTotalOrder(totalOrder);
  }, [products]);

  const handleCreate = async () => {
    if (!clientName.trim()) {
      setWarningMessage("El nombre del cliente es obligatorio");
      return;
    }

    const productData = products.map((product) => ({
      qty: product.quantity,
      product: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: "",
        type: "",
        dateEntry: "",
      },
    }));

    try {
      await createOrder(clientName, productData);
      setWarningMessage("");
      navigate("/orderview");
    } catch (error) {
      setWarningMessage("Error al crear el pedido. Inténtalo de nuevo.");
    }
  };

  return (
    <div className={styles.containerOrder}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
      </style>
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
      <div className={styles.containerTotalOrder}>
        <p className={styles.totalOrder}> Total: ${totalOrder}</p>
        <input
          className={styles.inputName}
          type="text"
          placeholder="Nombre del cliente:"
          value={clientName}
          onChange={(e) => setClientName(e.target.value)}
        />
        {warningMessage && <p className={styles.warning}>{warningMessage}</p>}
        <button className={styles.buttonSendOrden} onClick={handleCreate}>
          <PiChefHat className={styles.iconSendButton} />
          Enviar a cocina
        </button>
        <button
          className={styles.buttonhistorialOrder}
          onClick={() => {
            navigate("/orderview");
          }}
        >
          <GrHistory className={styles.iconHistorialOrder} />
          Historial de pedidos
        </button>
      </div>
    </div>
  );
}
