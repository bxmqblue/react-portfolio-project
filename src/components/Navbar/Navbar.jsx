import React, { useState } from "react";
import style from "./Navbar.module.css";
import { FaBars, FaX } from "react-icons/fa6";

function Navbar() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleHandler = () => {
    setIsToggle(!isToggle);
  };

  return (
    <nav>
      <div className={style.container}>
        <div className={style.nav_con}>
          <div className={style.logo}>
            <a href="#">
              bxm<span>Q</span>blue
            </a>
          </div>

          <ul className={style.nav_link}>
            <li className={style.link}>
              <a href="#skills">Skills</a>
            </li>
            <li className={style.link}>
              <a href="#service">Services</a>
            </li>
            <li className={style.link}>
              <a href="#">Portfolio</a>
            </li>
            <li className={style.link}>
              <a href="#contact">Contact</a>
            </li>
          </ul>

          <div className={style.button}>
            <a href="#">Hire Me</a>
          </div>

          {/* Mobile Menu */}
          {isToggle ? (<FaX className={style.bars} onClick={toggleHandler}/>) : (<FaBars className={style.bars} onClick={toggleHandler} />)}
          {isToggle ? (
            <>
            <ul className={style.mobile_nav}>
                <li className={style.mobile_link}><a href="#">Skills</a></li>
                <li className={style.mobile_link}><a href="#">Services</a></li>
                <li className={style.mobile_link}><a href="#">Portfolio</a></li>
                <li className={style.mobile_link}><a href="#">Contact</a></li>
            </ul>
            <div className={style.mobile_button}>
                <a href="#">Hire Me</a>
            </div>
            </>
          ) : null }
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
