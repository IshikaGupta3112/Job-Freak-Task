import "./Sidebar.css";
import homeLogo from "./assets/home.svg";
import contactLogo from "./assets/conatct.svg";
import guideLogo from "./assets/guide.svg";
import infoLogo from "./assets/info.svg";
import hamburger from "./assets/hamburger.svg";
import cross from "./assets/cross.svg";
import Home from "./Home";
import Contact from "./Contact";
import Guide from "./Guide";
import Info from "./Info";
import { useState } from "react";
import { useEffect } from "react";

function Sidebar() {
  const [i, setI] = useState(false);
  const [j, setJ] = useState(false);
  const [k, setK] = useState(false);
  const [l, setL] = useState(false);
  const [title, setTitle] = useState("Home");

  useEffect(() => {
    setTitle("Info");
    setInfo(true);
    setHome(false);
    setContact(false);
    setGuide(false);
  }, [j]);
  useEffect(() => {
    setTitle("Guide");
    setGuide(true);
    setHome(false);
    setContact(false);
    setInfo(false);
  }, [k]);
  useEffect(() => {
    setTitle("Contact");
    setContact(true);
    setHome(false);
    setInfo(false);
    setGuide(false);
  }, [l]);
  useEffect(() => {
    setTitle("Home");
    setHome(true);
    setContact(false);
    setInfo(false);
    setGuide(false);
  }, [i]);

  const [home, setHome] = useState(true);
  const [info, setInfo] = useState(false);
  const [guide, setGuide] = useState(false);
  const [contact, setContact] = useState(false);

function showmenu(){
    document.getElementById('sideDiv').style.width="75vw";
}

  return (
    <>
      <div id="navdiv">
        <div id="menuDiv"><h2>Job Freak</h2></div>
        <div id='titleDiv'><h4>{title}</h4></div>
        <img src={hamburger} id='menu' onClick={showmenu}></img>
      </div>
      <div id="flexDiv">
        <div id="sidebarDiv">
          <ul>
            <li onClick={() => setI(!i)}>
              <img src={homeLogo}></img>Home
            </li>
            <li onClick={() => setJ(!j)}>
              <img src={infoLogo}></img>Information
            </li>
            <li onClick={() => setK(!k)}>
              <img src={guideLogo}></img>Guide
            </li>
            <li onClick={() => setL(!l)}>
              <img src={contactLogo}></img>Contact
            </li>
          </ul>
        </div>
        <div id="renderComponent">
          {home ? <Home /> : null}
          {contact ? <Contact /> : null}
          {guide ? <Guide /> : null}
          {info ? <Info /> : null}
        </div>
      </div>
    </>
  );
}

export default Sidebar;
