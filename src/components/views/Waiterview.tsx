import { Navbar } from "../Navbar";
import { Roleanduser } from "../Roleanduser";
import { Menuselect } from "../Menuselect";
import { Menucard } from "../Menucard";
import { Order } from "../Order";
import { Totalorden } from "../Totalorden";

export function Waiterview() {
  return (
    <header>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
      </style>

      <Navbar></Navbar>
      <Roleanduser></Roleanduser>
      <Menuselect></Menuselect>
      <Menucard></Menucard>
      <Order></Order>
      <Totalorden></Totalorden>
    </header>
  );
}
