import { Navbar } from "../Navbar";
import styles from "./Chefview.module.css";
import { OrdersApi } from "../../services/APIService";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  type: string;
  dateEntry: string;
}

interface OrderProduct {
  qty: number;
  product: Product;
}

interface Orders {
  id: number;
  userId: number;
  client: string;
  products: OrderProduct[];
  status: string;
  dataEntry?: string;
}

export function Chefview() {
  const [orders, setOrders] = useState<Orders[]>([]);

  useEffect(() => {
    const getOrders = async () => {
      const allOrders = await OrdersApi();
      setOrders(allOrders);
    };
    getOrders();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className={styles.container}>
        <h3>Pedidos</h3>
        {orders.map((order) => {
          const formattedDate = order.dataEntry
            ? order.dataEntry.replace(" ", "T")
            : "";

          return (
            <div key={order.id} className={styles.orderCard}>
              <div className={styles.productList}>
                <h4>Productos:</h4>
                {order.products.map((item, index) => (
                  <div key={index} className={styles.product}>
                    <p className={styles.productName}>
                      Producto: {item.product.name}
                    </p>
                    <p>Cantidad: {item.qty}</p>
                    <p className={styles.productPrice}>
                      Precio: ${item.product.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className={styles.orderInfo}>
                <p>Cliente: {order.client}</p>
                <p>Estado: {order.status}</p>
                <p>
                  Fecha de creación:{" "}
                  {formattedDate
                    ? new Date(formattedDate).toLocaleString()
                    : "Fecha no disponible"}
                </p>
                <button className={styles.button}> Pedido listo </button>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
}
