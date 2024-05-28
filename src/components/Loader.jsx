import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="loader">
      <IoFastFoodOutline />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default Loader;
