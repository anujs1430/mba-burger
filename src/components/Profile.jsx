import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";

const funderImg =
  "https://media.istockphoto.com/id/475060896/photo/goofy-young-man.jpg?s=612x612&w=0&k=20&c=pw3dLyNlRbsWuC2W8nikBuZ86Lar2O4mr_-4LmEXrfI=";

const Profile = () => {
  const option = {
    initial: {
      y: "-100%",
      opacity: 0,
    },

    animate: {
      y: 0,
      opacity: 1,
    },

    transition: {
      duration: 0.5,
    },
  };

  return (
    <section className="profile">
      <main>
        <motion.img src={funderImg} {...option} alt="user" />
        <motion.h5 {...option}>Anuj Singh</motion.h5>

        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Link className="b-radius-none bg-dark" to={"/admin/dashboard"}>
            Dashboard &nbsp;
            <MdDashboard />
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: "+100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <Link to={"/myorders"}>Orders</Link>
        </motion.div>
        <motion.button
          initial={{ x: "+100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          Log Out
        </motion.button>
      </main>
    </section>
  );
};

export default Profile;
