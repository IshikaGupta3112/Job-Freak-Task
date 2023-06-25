import "./Main.css";
import homeLogo from "../assets/home.svg";
import contactLogo from "../assets/conatct.svg";
import guideLogo from "../assets/guide.svg";
import infoLogo from "../assets/info.svg";
import hamburger from "../assets/hamburger.svg";
import cross from "../assets/cross.svg";
import Home from "./Home";
import Contact from "./Contact";
import Guide from "./Guide";
import Info from "./Info";
import { useState } from "react";
import { useEffect } from "react";

function Main() {
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
    document.getElementById('infoLi').style.backgroundColor="rgb(69, 183, 228 , 0.1)";
    document.getElementById('homeLi').style.backgroundColor="white";
    document.getElementById('contactLi').style.backgroundColor="white";
    document.getElementById('guideLi').style.backgroundColor="white";
  }, [j]);
  useEffect(() => {
    setTitle("Guide");
    setGuide(true);
    setHome(false);
    setContact(false);
    setInfo(false);
    document.getElementById('guideLi').style.backgroundColor="rgb(69, 183, 228 , 0.1)";
    document.getElementById('homeLi').style.backgroundColor="white";
    document.getElementById('contactLi').style.backgroundColor="white";
    document.getElementById('infoLi').style.backgroundColor="white";
  }, [k]);
  useEffect(() => {
    setTitle("Contact");
    setContact(true);
    setHome(false);
    setInfo(false);
    setGuide(false);
    document.getElementById('contactLi').style.backgroundColor="rgb(69, 183, 228 , 0.1)";
    document.getElementById('homeLi').style.backgroundColor="white";
    document.getElementById('guideLi').style.backgroundColor="white";
    document.getElementById('infoLi').style.backgroundColor="white";
  }, [l]);
  useEffect(() => {
    setTitle("Home");
    setHome(true);
    setContact(false);
    setInfo(false);
    setGuide(false);
    document.getElementById('homeLi').style.backgroundColor="rgb(69, 183, 228 , 0.1)";
    document.getElementById('contactLi').style.backgroundColor="white";
    document.getElementById('guideLi').style.backgroundColor="white";
    document.getElementById('infoLi').style.backgroundColor="white";
  }, [i]);

  const [home, setHome] = useState(true);
  const [info, setInfo] = useState(false);
  const [guide, setGuide] = useState(false);
  const [contact, setContact] = useState(false);

function showmenu(){
    document.getElementById('sideDiv').style.width="80vw";
}
function closemenu(){
  document.getElementById('sideDiv').style.width="0vw";
}

  return (
    <>
    <div id='sideDiv'><img src={cross} id='crossimg' onClick={closemenu}></img>
    <ul>
      <li onClick={()=>setI(!i)}>Home</li>
      <li onClick={() => setJ(!j)}>Information</li>
      <li onClick={() => setK(!k)}>Guide</li>
      <li onClick={() => setL(!l)}>Contact</li>
    </ul>
    </div>
      <div id="navdiv">
<h2>Job Freak</h2>
        <img src={hamburger} id='menu' onClick={showmenu}></img>
      </div>
      <div id="flexDiv">
        <div id="sidebarDiv">
          <ul>
          <li onClick={() => setI(!i) } id='homeLi'>
              <img src={homeLogo}></img>Home
            </li>
            <li onClick={() => setJ(!j)} id='infoLi'>
              <img src={infoLogo}></img>Information
            </li>
            <li onClick={() => setK(!k)} id='guideLi'>
              <img src={guideLogo}></img>Guide
            </li>
            <li onClick={() => setL(!l)} id='contactLi'>
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

export default Main;
