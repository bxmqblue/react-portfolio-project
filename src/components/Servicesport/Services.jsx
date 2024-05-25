import React from "react";
import style from "./Services.module.css";
import { FaLaptop, FaPaintbrush, FaCode } from "react-icons/fa6";

function MyServices() {
  return (
    <div id="service" className={style.service_warpper}>
      <div className={style.service_con}>
        <div className={style.service_header}>
          <h3>My Services</h3>
        </div>
        <div className={style.service_box}>
          <div className={style.service_card}>
            <div className={style.service_info}>
              <div className={style.code}>
              <FaCode/>
              </div>
              <h4>Web Development</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident eum minus necessitatibus ullam enim dolores sint illum quaerat! Quos nobis itaque earum cupiditate alias nihil atque aspernatur ratione nemo dicta.</p>
            </div>
          </div>
          <div className={style.service_card}>
              <div className={style.service_info}>
                <div className={style.paint}>
                <FaPaintbrush/>
                </div>
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem eius consequuntur voluptatem veritatis sit ex commodi voluptates, repellat quidem, autem natus illum minima ullam tenetur repellendus cumque itaque. Ipsa, odio.</p>
              </div>
          </div>
          <div className={style.service_card}>
            <div className={style.service_info}>
              <div className={style.laptop}>
              <FaLaptop/>
              </div>
              <h4>Front-end Consulting</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium, modi dignissimos accusamus labore saepe nobis ea soluta sunt nesciunt harum earum est possimus corrupti vitae magni nisi, et, architecto eveniet!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyServices;
