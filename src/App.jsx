import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import MyServices from "./components/Servicesport/Services";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

let id = 0;

let initial_user = [{
  fname: '',
  lname: '',
  email: '',
  message: '',
}]


function App() {
  const [curUser, setCurUser] = useState(() => {
    const localUser = localStorage.getItem("newUser")

    if (localUser === null) {
      return initial_user;
    }

    return JSON.parse(localUser)
  })

  useEffect(() => {
    localStorage.setItem("newUser", JSON.stringify(curUser));
  }, [curUser]);

  const User = (userInfo) => {
    const newUser = {
      ...userInfo,
      id: (id = id + 1),
    };

    setCurUser([...curUser, newUser])

  };

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <MyServices />
      <Contact User={User} />
      <Footer />
    </>
  );
}

export default App;
