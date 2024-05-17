import React from "react";
import { motion } from "framer-motion";

const founder =
  "https://media.istockphoto.com/id/475060896/photo/goofy-young-man.jpg?s=612x612&w=0&k=20&c=pw3dLyNlRbsWuC2W8nikBuZ86Lar2O4mr_-4LmEXrfI=";

const Founder = ({ name }) => {
  const option = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: "0",
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <div>
        <motion.img
          {...option}
          transition={{ duration: 0.5 }}
          src={founder}
          alt="Founder"
          width={400}
        />

        <motion.h3 {...option} transition={{ duration: 0.7, delay: 0.5 }}>
          {name}
        </motion.h3>
        <motion.p {...option} transition={{ duration: 0.7, delay: 0.5 }}>
          Lorem ipsum dolor. Cupiditate eum earum non cum, temporibus soluta
          voluptatem quaerat,
          <br />
          ab tempora quidem facere temporibus ea laboriosam possimus dolorem.
        </motion.p>
      </div>
    </section>
  );
};

export default Founder;
