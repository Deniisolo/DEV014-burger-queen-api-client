import { FaCirclePlus } from "react-icons/fa6";
import styles from "./Menucard.module.css";
export function Menucard() {
  return (
    <div className={styles.containerCardMenuFather}>
      <div className={styles.containerCardMenu}>
        <p className={styles.food}>Hamburguesa clásica</p>
        <p className={styles.price}> $1000</p>
        <button>
          <FaCirclePlus className={styles.icon} />
        </button>
      </div>
      <div className={styles.containerCardMenu}>
        <p className={styles.food}>Hamburguesa clásica</p>
        <p className={styles.price}> $1000</p>
        <button>
          <FaCirclePlus className={styles.icon} />
        </button>
      </div>
      <div className={styles.containerCardMenu}>
        <p className={styles.food}>Hamburguesa clásica</p>
        <p className={styles.price}> $1000</p>
        <button>
          <FaCirclePlus className={styles.icon} />
        </button>
      </div>
      <div className={styles.containerCardMenu}>
        <p className={styles.food}>Hamburguesa clásica</p>
        <p className={styles.price}> $1000</p>
        <button>
          <FaCirclePlus className={styles.icon} />
        </button>
      </div>
      <div className={styles.containerCardMenu}>
        <p className={styles.food}>Hamburguesa clásica</p>
        <p className={styles.price}> $1000</p>
        <button>
          <FaCirclePlus className={styles.icon} />
        </button>
      </div>
    </div>
  );
}
