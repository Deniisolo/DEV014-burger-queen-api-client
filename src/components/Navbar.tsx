import styles from "./Navbar.module.css";
import { GiQueenCrown } from "react-icons/gi";

export function Navbar() {
  return (
    <nav className={styles.navBar}>
      <section className={styles.navBarOne}>
        <GiQueenCrown className={styles.icon} />
        <h1 className={styles.tittle}> Burger Queen</h1>
      </section>
      <section className={styles.navBarTwo}>
        <h3>Sistema de pedidos</h3>
      </section>
    </nav>
  );
}
