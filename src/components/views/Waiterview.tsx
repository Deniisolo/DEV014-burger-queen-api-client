import React, { useState } from "react";
import styles from "./Waiterview.module.css";
import { Navbar } from "../Navbar";
import { Roleanduser } from "../Roleanduser";
import { Menuselect } from "../Menuselect";
import { Menucard } from "../Menucard";
import { Order } from "../Order";
import { Totalorden } from "../Totalorden";

interface Products {
  id: number;
  name: string;
  price: number;
  type: string;
}

interface OrderItem extends Products {
  quantity: number;
}

export const Waiterview: React.FC = () => {
  const [select, setselectOn] = useState<string>("");
  const [products, setproducts] = useState<OrderItem[]>([]);

  const addProduct = (product: Products) => {
    setproducts((prevProducts) => {
      const existingProduct = prevProducts.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevProducts.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevProducts, { ...product, quantity: 1 }];
      }
    });
  };

  const removeProduct = (productId: number) => {
    setproducts((prevProducts) =>
      prevProducts.filter((p) => p.id !== productId)
    );
  };

  const updateQuantity = (productId: number, quantity: number) => {
    setproducts((prevProducts) =>
      prevProducts.map((p) => (p.id === productId ? { ...p, quantity } : p))
    );
  };

  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
      </style>

      <header>
        <Navbar />
      </header>
      <main className={styles.main}>
        <Roleanduser />
        <Menuselect setselectOn={setselectOn} />
        <Menucard select={select} addProduct={addProduct} />
        <Order
          products={products}
          removeProduct={removeProduct}
          updateQuantity={updateQuantity}
        />
        <Totalorden />
      </main>
    </>
  );
};
