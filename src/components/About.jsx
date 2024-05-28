import React from "react";
import { RiFindReplaceLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const founder =
  "https://media.istockphoto.com/id/475060896/photo/goofy-young-man.jpg?s=612x612&w=0&k=20&c=pw3dLyNlRbsWuC2W8nikBuZ86Lar2O4mr_-4LmEXrfI=";

const About = () => {
  return (
    <section className="about">
      <main>
        <motion.h1
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          About Us
        </motion.h1>

        <motion.article
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h4>The Restaurant App</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            explicabo modi, amet cum facilis consequuntur ducimus ipsam officiis
            recusandae. Pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus
            in voluptate expedita rem voluptatibus quibusdam distinctio libero
            dolorum, quia facilis laudantium alias nam illo commodi modi
            reiciendis repudiandae, officiis possimus! Placeat officia ducimus
            ex, quia asperiores est odit sapiente neque.
          </p>

          <Link to={"/"}>
            <RiFindReplaceLine />
          </Link>
        </motion.article>

        <motion.div
          initial={{ y: "+100%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Founder</h2>
          <article>
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <img src={founder} alt="Founder" />
              <h3>Anuj Singh</h3>
            </motion.div>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
              quam culpa incidunt cupiditate animi aperiam eaque id voluptates
              accusantium illum.
            </p>
          </article>
        </motion.div>
      </main>
    </section>
  );
};

export default About;
