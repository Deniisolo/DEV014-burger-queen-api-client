import styles from "./Menuselect.module.css";
export function Menuselect() {
  return (
    <select className={styles.select} name="menu" id="">
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
      </style>
      <option className={styles.option} value="">
        MENU
      </option>
      <option value="">1</option>
      <option value="">2</option>
    </select>
  );
}
