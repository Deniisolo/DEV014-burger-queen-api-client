import { MdOutlineTableRestaurant } from "react-icons/md";
import styles from "./Roleanduser.module.css";
export function Roleanduser() {
  return (
    <section className={styles.section}>
      <section className={styles.sectionOne}>
        <MdOutlineTableRestaurant className={styles.icon} />
        <h3 className={styles.h3}>Mesero</h3>
      </section>
    </section>
  );
}
