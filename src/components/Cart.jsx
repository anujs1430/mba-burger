import React from "react";
import burger1 from "../assets/burger1.png";
import burger2 from "../assets/burger2.png";
import burger3 from "../assets/burger3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cart = () => {
  const increment = (item) => {
    console.log(item);
  };
  const decrement = (item) => {
    console.log(item);
  };

  return (
    <section className="cart">
      <main>
        <CartItems
          title={"CHEESE BURGER"}
          img={burger1}
          value={0}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
          delay={0}
        />
        <CartItems
          title={"CHICKEN BURGER"}
          img={burger2}
          value={0}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
          delay={0.4}
        />
        <CartItems
          title={"EGG BURGER"}
          img={burger3}
          value={0}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
          delay={0.8}
        />

        <motion.article
          initial={{ x: "+100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <h4>Sub Total</h4>
            <p>₹ {2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹ {2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹ {200}</p>
          </div>
          <div>
            <h4>Total</h4>
            <p>₹ {2250 + 2000 * 0.18 + 200}</p>
          </div>

          <Link to={"/shipping"}>CheckOut</Link>
        </motion.article>
      </main>
    </section>
  );
};

const CartItems = ({ value, title, img, increment, decrement, delay }) => {
  return (
    <motion.div
      className="cartItems"
      initial={{ x: "-100%", opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay }}
    >
      <div>
        <h4>{title}</h4>
        <img src={img} alt="item" />
      </div>

      <div>
        <button onClick={decrement}>-</button>
        <input type="number" readOnly value={value} />
        <button onClick={increment}>+</button>
      </div>
    </motion.div>
  );
};

export default Cart;
