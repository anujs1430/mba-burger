import React from "react";
import MenuCard from "./MenuCard";
import burder1 from "../assets/burger1.png";
import burder2 from "../assets/burger2.png";
import burder3 from "../assets/burger3.png";

const Menu = () => {
  const addToCart = (ItemNum) => {
    console.log(ItemNum);
  };

  return (
    <section id="menu">
      <h1>MENU</h1>

      <div>
        <MenuCard
          ItemNum={1}
          burgerSrc={burder1}
          Price={200}
          title={"Cheese Burger"}
          handler={addToCart}
          delay={0.2}
        />

        <MenuCard
          ItemNum={2}
          burgerSrc={burder2}
          Price={300}
          title={"Chicken Burger"}
          handler={addToCart}
          delay={0.5}
        />

        <MenuCard
          ItemNum={3}
          burgerSrc={burder3}
          Price={400}
          title={"Egg Burger"}
          handler={addToCart}
          delay={0.9}
        />
      </div>
    </section>
  );
};

export default Menu;
