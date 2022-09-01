import React, { useState } from "react";
import { Link } from "react-router-dom";
import S from "./Navbar.module.css";
import * as FaIcons from "react-icons/fa";
import * as AiFaIcons from "react-icons/ai";
import { SidebarData } from "../Sidebar/Sidebar";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className={S.navbar}>
        <Link>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={S.sidebar ? "nav-menu active" : "nav-menu"}></nav>
      <ul className={S.nav_menu_items}>
        <li className={S.navbar_toogle}>
          <Link>
            <AiFaIcons.AiOutlineClose />
          </Link>
        </li>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={S.cName}>
              <Link to={item.path}>
                {item.icon}
                <spam>{item.title}</spam>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Navbar;
