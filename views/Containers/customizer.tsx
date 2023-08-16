import React, { useState } from "react";
import { NextPage } from "next";

const Customizer: NextPage = () => {
  const [layoutType, setLayoutType] = useState("LTR");
  const [layoutMode, setLayoutMode] = useState("Light");
  const [colorStyle, setColorStyle] = useState(false);
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");

  const changeActive = (value) => {
    localStorage.getItem("color") && document.documentElement.classList.remove(localStorage.getItem("color"));
    localStorage.setItem("color", value);
    document.documentElement.classList.add(localStorage.getItem("color"));
    setValue(value);
    setActive(!active);
  };

  const changeRtl = () => {
    if (document.body?.classList.contains("rtl")) {
      document.body.classList.add("ltr");
      setLayoutType("LTR");
      document.body.classList.remove("rtl");
    } else {
      document.body.classList.add("rtl");
      setLayoutType("RTL");
      document.body.classList.remove("ltr");
    }
  };

  const changeDark = () => {
    if (document.body?.classList.contains("light")) {
      document.body.classList.add("dark");
      setLayoutMode("Dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      setLayoutMode("Light");
      document.body.classList.remove("dark");
    }
  };
  return (
    <>
      <div className="theme-pannel-main">
        <ul>
          <li id="ltr_btn">
            <a href="#" className="btn setting_btn" onClick={changeRtl}>
              <span className="rtl-txt">{layoutType}</span>
            </a>
          </li>
          <li className={`sidebar-btn dark-light-btn ${layoutMode === "light" ? "dark" : ""}`}>
            <a href="#" className="dark-light" onClick={changeDark}>
              <span className="theme-layout-version">{layoutMode}</span>
            </a>
          </li>
        </ul>
      </div>
      <div className={`color-picker ${colorStyle ? "r-0" : "color-style"}`}>
        <a href="#" className="handle title" onClick={() => setColorStyle(!colorStyle)}>
          <img src="/images/paint.png" alt="paint" />
        </a>
        <div>
          <h4>Choose color</h4>
          <ul className="colors">
            <li className={`color2 ${value === "color-1" ? "active" : ""} `} onClick={() => changeActive("color-1")}></li>
            <li className={`color1 ${value === "color-2" ? "active" : ""}`} onClick={() => changeActive("color-2")}></li>
            <li className={`color3 ${value === "color-3" ? "active" : ""}`} onClick={() => changeActive("color-3")}></li>
            <li className={`color4 ${value === "color-4" ? "active" : ""}`} onClick={() => changeActive("color-4")}></li>
            <li className={`color5 ${value === "color-5" ? "active" : ""}`} onClick={() => changeActive("color-5")}></li>
            <li className={`color6 ${value === "color-6" ? "active" : ""}`} onClick={() => changeActive("color-6")}></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Customizer;
