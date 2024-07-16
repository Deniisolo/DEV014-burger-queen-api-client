import "./Ordersview.module.css";
import { Navbar } from "../Navbar";
import { OrdersApi } from "../../services/APIService";
import { useEffect } from "react";
import { useState } from "react";

export interface Orders {
  id: number;
  userId: number;
  client: string;
  products: [];
  status: string;
  dataEntry: string;
}
export function Ordersview() {
  const [orders, setOrders] = useState<Orders[]>([]);
  useEffect(() => {
    const getOrders = async () => {
      const allOrdes: Orders[] = await OrdersApi();
      console.log(allOrdes);
      setOrders(allOrdes);
    };
    getOrders();
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h3>Historial de pedidos</h3>
        {orders.map((order) => (
          <div key={order.id}>
            <p>{order.client}</p>
            {/* //me falta poder mostrar los datos de lo productos */}
            <p>{order.status}</p>
            <p>{order.dataEntry}</p>
          </div>
        ))}
      </main>
    </>
  );
}
