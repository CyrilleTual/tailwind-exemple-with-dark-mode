import React from 'react'
import NavBar from './navBar'

export default function Header() {
  return (
    <div>
      <NavBar />{" "}
      <div
        id="mask"
        className=" block md:hidden fixed  top-0  left-0 right-0 bottom-0 bg-slate-800 opacity-25 z-10  transition-all ease-in-out duration-700"
      ></div>
    </div>
  );
}
