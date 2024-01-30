import React from "react";
import ToggleTheme from "./toggle-theme";

export default function NavBar() {
  return (
    <nav className="  z-20 p-5 flex flex-col  items-start md:flex-row md:items-center justify-between relative ">
      <div className="flex min-w-full items-center justify-between md:min-w-fit">
        <p>Ici logo </p>
      </div>
      <ul
        id="navigation"
        className="  absolute md:static   top-[100px] md:top-0 md:flex flex-col items-center  content-center  md:flex-row   transition-all ease-in-out duration-700 maskNav md:opacity-100 "
      >
        <li className="navBar-item dark:text-black" >Home</li>
        <li className="navBar-item dark:text-black">Services</li>
        <li className="navBar-item dark:text-black">Blog</li>
        <li className="navBar-item dark:text-black">Gallery</li>
        <li className="navBar-item dark:text-black">About</li>
        <li className="navBar-item dark:text-black">Login</li>
        <ToggleTheme/>
      </ul>
    </nav>
  );
}
