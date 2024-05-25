import React, { useState } from "react";
import style from "./Contact.module.css";
import { FaPhone, FaRegEnvelope } from "react-icons/fa6";


function Contact(props) {
    const [userName, setUserName] = useState("")
    const [userSurname, setUserSurname] = useState("")
    const [userEmail, setUserEmail] = useState("")    
    const [userMes, setUserMes] = useState("")
    

    const submitHandler = (event) => {
      event.preventDefault()

      const userInfo = {
        fname: userName,
        lname: userSurname,
        mail: userEmail,
        message: userMes,
      }

      props.User(userInfo)

      setUserName("")
      setUserSurname("")
      setUserEmail("")
      setUserMes("")

    }

    
  return (
    <div id="contact" className={style.contact_warpper}>
      <div className={style.contact_con}>
        <div className={style.contact_info}>
          <h3>Get in touch</h3>
          <p className={style.contact_decs}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            <br /> Provident ducimus, modi facilis totam exercitationem pariatur
            <br /> deserunt officiis quaerat nesciunt necessitatibus <br />
            temporibus harum. Praesentium laborum accusamus.
          </p>
          <p className={style.contact_address}>
            123 Main Street <br />
            Bangkok, Thailand
          </p>
          <p className={style.contact_phone}>
            <span>
              <FaPhone />
            </span>
            (+66) 95 545 4343
          </p>
          <p className={style.contact_mail}>
            <span>
              <FaRegEnvelope />
            </span>
            bombloveza40@gmail.com
          </p>
        </div>
        <div className={style.contact_form}>
          <form onSubmit={submitHandler}>
            <div className={style.input_group}>
              <div>
                <label htmlFor="first name">First Name</label>
                <input type="text" placeholder="Peerapol" value={userName} onChange={(e) => setUserName(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="last name">Last Name</label>
                <input type="text" placeholder="Khempetch" value={userSurname} onChange={(e) => setUserSurname(e.target.value)} />
              </div>
            </div>
            <label htmlFor="email address">Email Address</label>
            <input type="email" placeholder="bombloveza40@gmail.com" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
            <label htmlFor="message">Your message</label>
            <textarea name="" id="" placeholder="Type here" value={userMes} onChange={(e) => setUserMes(e.target.value)}></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
