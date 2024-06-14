import styles from "./Order.module.css";
import { GrSubtractCircle } from "react-icons/gr";
import { FaRegTrashCan } from "react-icons/fa6";
export function Order() {
  return (
    <div className={styles.containerOrder}>
      <div>
        <h4>Resumen del pedido</h4>
      </div>
      <div className={styles.containerOrderChild}>
        <p>Hamburguesa clásica</p>
        <p>1</p>
        <p>$1000</p>
        <button>
          <GrSubtractCircle className={styles.icon} />
        </button>
        <button>
          <FaRegTrashCan className={styles.icon} />
        </button>
      </div>
      <div className={styles.containerOrderChild}>
        <p>Hamburguesa clásica</p>
        <p>1</p>
        <p>$1000</p>
        <button>
          <GrSubtractCircle className={styles.icon} />
        </button>
        <button>
          <FaRegTrashCan className={styles.icon} />
        </button>
      </div>
      <div className={styles.containerOrderChild}>
        <p>Hamburguesa clásica</p>
        <p>1</p>
        <p>$1000</p>
        <button>
          <GrSubtractCircle className={styles.icon} />
        </button>
        <button>
          <FaRegTrashCan className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
