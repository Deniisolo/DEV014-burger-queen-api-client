import styles from "./Menuselect.module.css";
import React from "react";

interface MenuselectProps {
  setselectOn: (value: string) => void;
}

export const Menuselect: React.FC<MenuselectProps> = ({ setselectOn }) => {
  const handleMenuChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMenu = event.target.value;
    setselectOn(selectedMenu);
  };

  return (
    <select className={styles.select} name="menu" onChange={handleMenuChange}>
      <option className={styles.option} value="">
        MENU
      </option>
      <option value="beverages">Beverages</option>
      <option value="breakfast">Breakfast</option>
      <option value="lunch">Lunch</option>
      <option value="combos">Combos</option>
      <option value="sides">Sides</option>
    </select>
  );
};
