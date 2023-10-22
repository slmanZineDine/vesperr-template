import { useState } from "react";
import { navLinks } from "../../data/staticData";

const Navbar = () => {
   // ################### REACT HOOKS ###################
   const [toggleMenu, setToggleMenu] = useState(false);
   return (
      <>
         <div className={`menu flex ${toggleMenu ? "show-menu" : ""}`}>
            <ul className="links flex">
               {navLinks.map(({ title, link }, i) => (
                  <li key={i} className="link">
                     <a href={link}>{title}</a>
                  </li>
               ))}
            </ul>
            <button className="btn btn-secondary">Get Started</button>
         </div>

         <i
            className={`bi bi-${toggleMenu ? "x-lg icon-close" : "list icon"}`}
            onClick={() => setToggleMenu(!toggleMenu)}
         ></i>

         {toggleMenu && <div className="overlay"></div>}
      </>
   );
};

export default Navbar;
