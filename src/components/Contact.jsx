import React from "react";
import { motion } from "framer-motion";
import burder2 from "../assets/burger2.png";

const Contact = () => {
  return (
    <section className="contact">
      <motion.form
        action=""
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="email" />
        <textarea cols={30} rows={10} placeholder="Message..."></textarea>
        <motion.button
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          type="submit"
        >
          Send
        </motion.button>
      </motion.form>

      <motion.div
        className="formBorder"
        initial={{ x: "+100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div>
          <img src={burder2} alt="" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
