import styles from "./Order.module.css";
import { GrSubtractCircle } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from "react";

export function Order({ products }) {
  return (
    <div className={styles.containerOrder}>
      <div>
        <h4>Resumen del pedido</h4>
      </div>
      {products.map((product, index) => (
        <div key={index} className={styles.containerOrderChild}>
          <p>{product.name}</p>
          <p>1</p>
          <p>{product.price}</p>
          <button>
            <GrSubtractCircle className={styles.icon} />
          </button>
          <button>
            <FaRegTrashCan className={styles.icon} />
          </button>
        </div>
      ))}
    </div>
  );
}
