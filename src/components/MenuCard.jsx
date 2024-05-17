import { motion } from "framer-motion";
import React from "react";

const MenuCard = ({ ItemNum, burgerSrc, Price, title, handler, delay }) => {
  return (
    <motion.div
      className="menuCard"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: "0%", opacity: 1 }}
      transition={{ duration: 0.2, delay }}
    >
      <div>Item {ItemNum}</div>
      <main>
        <img src={burgerSrc} alt="" />
        <h5>₹ {Price}</h5>
        <p>{title}</p>
        <button onClick={() => handler(ItemNum)}>Buy Now</button>
      </main>
    </motion.div>
  );
};

export default MenuCard;
