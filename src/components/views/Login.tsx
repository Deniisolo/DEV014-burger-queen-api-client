import { Cardlogin } from "../Cardlogin";
import { Loginform } from "../Loginform";
import styles from "./Login.module.css";
export function Login() {
  return (
    <main className={styles.main}>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
      </style>
      <Cardlogin></Cardlogin>
      <Loginform></Loginform>
    </main>
  );
}
