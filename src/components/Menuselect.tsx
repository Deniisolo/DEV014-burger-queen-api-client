import styles from "./Menuselect.module.css";

export function Menuselect() {
  const handleMenuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMenu = event.target.value;
    console.log("Menu seleccionado:", selectedMenu);
  };

  return (
    <select className={styles.select} name="menu" onChange={handleMenuChange}>
      <option className={styles.option} value="">
        MENU
      </option>
      <option value="breakfast">Desayuno</option>
      <option value="lunch">Almuerzo</option>
    </select>
  );
}
