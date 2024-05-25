import React from 'react'
import style from './Hero.module.css'
import { FaInstagram, FaGithub, FaFacebookF } from "react-icons/fa6";
import image from "./Illustration.png"

function Hero() {
  return (
    <div className={style.hero_warpper}>
      <div className={style.hero_con}>
        <div className={style.hero_info}>
            <h4>create your site like a pro</h4>
            <h1>Hi, I'm <span>Bomb</span></h1>
            <h3>Front-end Developer</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Laudantium ea dicta voluptatum ab unde aliquid iusto tenetur <br/>consequuntur? Delectus quia.</p>
            <ul className={style.hero_socials}>
                <li><a href="https://github.com/bxmqblue" target='_blank'><FaGithub/></a></li>
                <li><a href="https://www.instagram.com/bxmqblue/?hl=en" target='_blank'><FaInstagram/></a></li>
                <li><a href="#"><FaFacebookF/></a></li>
            </ul>
        </div>
        <div className={style.hero_img}>
            <img src={image}/>
        </div>
      </div>
    </div>
  )
}

export default Hero
