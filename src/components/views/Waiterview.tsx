import React, { useState } from "react";
import { Navbar } from "../Navbar";
import { Roleanduser } from "../Roleanduser";
import { Menuselect } from "../Menuselect";
import { Menucard } from "../Menucard";
import { Order } from "../Order";
import { Totalorden } from "../Totalorden";

interface orderitem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const Waiterview: React.FC = () => {
  const [select, setselectOn] = useState<string>("");
  const [resume, setResume] = useState<orderitem[]>([]);
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
      </style>

      <header>
        <Navbar />
      </header>
      <main>
        <Roleanduser />
        <Menuselect setselectOn={setselectOn} />
        <Menucard select={select} setResume={setResume} />
        <Order />
        <Totalorden />
      </main>
    </>
  );
};
