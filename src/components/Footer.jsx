import React from "react";
import { AiFillYoutube, AiFillInstagram, AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>The Restaurant</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          nostrum?
        </p>
        <br />
        <em>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
          recusandae.
        </em>
        <strong>All Copyright @AnujSingh</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>
        <a href="#">
          <AiFillYoutube />
        </a>
        <a href="#">
          <AiFillInstagram />
        </a>
        <a href="#">
          <AiFillGithub />
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
