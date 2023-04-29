import { useState } from "react";
import Image from "next/image";
import logo from "/public/logo.png";
import Link from "next/link";
import en from "/public/en.png";
import it from "/public/it.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section id="navbar" className="bg-gray-900 max-h-85px] text-white ">
      <navbar className="bg-black grid grid-cols-6 p-3">
        <div id="left" className="col-span-1 flex items-center justify-center">
          <Image src={it} className="w-5 md:w-8" />
        </div>

        <div
          id="logo"
          className="col-span-4 md:col-span-3 md:pl-36 flex items-center justify-center"
        >
          <Image className="w-[200px] " src={logo} />
        </div>
        <div className="md:hidden flex items-center justify-center pt-1">
          <button
            onClick={handleClick}
            id="burger"
            type="button"
            className={
              isOpen
                ? "open z-40 block hamburger md:hidden focus:outline-none"
                : "z-40 block hamburger md:hidden focus:outline-none"
            }
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-mid"></span>
            <span className="hamburger-bot"></span>
          </button>
        </div>
        <div
          id="right"
          className="col-span-1 md:col-span-2 flex items-center justify-center"
        >
          <div
            id="links"
            className="hidden h-10 md:flex md:items-center md:space-x-4"
          >
            <div className="group">
              <Link href="#creations">Collezioni</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-yellow-600"></div>
            </div>
            <div className="group">
              <Link href="#features">Chi Siamo</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-yellow-600"></div>
            </div>
            <div className="group">
              <Link href="#footer">Contatti</Link>
              <div className="mx-2 group-hover:border-b group-hover:border-yellow-600"></div>
            </div>
          </div>
        </div>
      </navbar>
      <div id="menu" className={isOpen ? "responsive" : "hidden"}>
        <div
          className={`${
            isOpen ? "underline" : ""
          } text-slate-900 decoration-yellow-600 underline-offset-4 font-extrabold`}
        >
          <Link href="#creations"> Collezioni</Link>
        </div>
        <div
          className={`${
            isOpen ? "underline" : ""
          } pt-8 text-slate-900 decoration-yellow-600 underline-offset-4 font-extrabold`}
        >
          <Link href="#features">Chi siamo</Link>
        </div>
        <div
          className={`${
            isOpen ? "underline" : ""
          } pt-8 text-slate-900 decoration-yellow-600 underline-offset-4 font-extrabold`}
        >
          <Link href="#sedi">Le Nostre Sedi</Link>
        </div>
        <div
          className={`${
            isOpen ? "underline" : ""
          } pt-8 text-slate-900 decoration-yellow-600 underline-offset-4 font-extrabold`}
        >
          <Link href="#footer">Contatti</Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
