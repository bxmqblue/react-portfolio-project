import React from 'react'
import style from './Skills.module.css'
import { FaSquareJs, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa6";

function Skills() {
  return (
    <div id='skills' className={style.skill_warpper}>
      <div className={style.skill_con}>
        <div className={style.skill_set}>
            <h3>My Skill Set</h3>
        </div>
        <div className={style.skill_logo}>
            <a href="#"><FaHtml5/></a>
            <a href="#"><FaCss3Alt/></a>
            <a href="#"><FaSquareJs/></a>
            <a href="#"><FaReact/></a>
        </div>
      </div>
    </div>
  )
}

export default Skills
