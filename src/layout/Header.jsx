import { useEffect, useState } from "react";
import { Logo, Navbar } from "../components";

const Header = () => {
   // ################### REACT HOOKS ###################
   const [isScrolling, setIsScrolling] = useState(false);
   useEffect(() => {
      window.onscroll = () =>
         window.scrollY > 40 ? setIsScrolling(true) : setIsScrolling(false);
   }, []);

   return (
      <header className={`header ${isScrolling ? "scroll-header" : ""}`}>
         <nav className="nav container flex-between">
            <Logo />
            <Navbar />
         </nav>
      </header>
   );
};

export default Header;
