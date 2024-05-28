import React from "react";
import { motion } from "framer-motion";
import Founder from "./Founder";
import Menu from "./Menu";
import bg from "../assets/bg.svg";

const Home = () => {
  const option = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <section className="home">
        <div>
          <motion.h1 {...option} transition={{ duration: 0.7 }}>
            The Restaurant
          </motion.h1>
          <motion.p {...option} transition={{ duration: 0.7 }}>
            The Greate Indian Tast
          </motion.p>
        </div>

        <motion.a
          {...option}
          transition={{ duration: 0.5, delay: 0.6 }}
          href="#menu"
        >
          explore Menu
        </motion.a>

        <div className="img-div">
          <motion.img
            className="hide-sm"
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            src="https://img.freepik.com/free-psd/view-delicious-fast-food_23-2150691799.jpg?t=st=1715078778~exp=1715082378~hmac=0aeef25c6616ac038873120b8a49e716aec682edf3cee2b0ff0a650dc950278b&w=740"
            alt="bg-img"
          />
          <motion.img
            className="lg-d-none"
            initial={{ y: "-100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            alt="bg-img"
            src={bg}
          />
        </div>
      </section>
      <Founder name="Anuj Singh" />

      <Menu />
    </>
  );
};

export default Home;
