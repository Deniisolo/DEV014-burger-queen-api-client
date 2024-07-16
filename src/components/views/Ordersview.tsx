import "./Ordersview.module.css";
import { Navbar } from "../Navbar";
import { OrdersApi } from "../../services/APIService";

export interface Orders {
  id: number;
  userId: number;
  client: string;
  products: [];
  status: string;
  dataEntry: string;
}
interface ordersViewProps {
  getAllOrders: (Order: Orders) => void;
}
export function Ordersview({ getAllOrders }: ordersViewProps) {
  const getOrders = async () => {
    const allOrdes: Orders[] = await OrdersApi();
    return allOrdes;
  };
  getOrders();

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <h3>Historial de pedidos</h3>
      </main>
    </>
  );
}
