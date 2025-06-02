import { useState } from "react";
import { NavLinks_Left, NavLinks_Rigth } from "../Content/Data";
import logo from "../assets/Images/logo.png";
import { Menu, X } from "lucide-react";

const NavBar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const toggle = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <nav className="sticky top-0 backdrop-blur-md bg-neutral-950/40 z-50 border-b border-neutral-800/70">
            <div className="w-full px-10 py-2 flex justify-between items-center">

                {/* left NavBar */}
                <ul className="hidden lg:flex justify-end">
                    {NavLinks_Left.map((item, index) => (
                        <li key={index}>
                            <a className="mx-20 text-md text-neutral-300 hover: hover:text-orange-500" href={item.href}>{item.title}</a>
                        </li>
                    ))}
                </ul>


                {/* Logo */}
                <div className="flex flex-col items-center">
                    <img className="w-20 sm:w-30 lg:w-50 py-2" src={logo} alt="Kalrav Interior" />
                </div>

                {/* Right Navbar */}
                <ul className="hidden lg:flex justify-end">
                    {NavLinks_Rigth.map((item, index) => (
                        <li key={index}>
                            <a className="mx-20 text-md text-neutral-300 hover:hover:text-orange-500" href={item.href}>{item.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Menu Btn */}
                <div className="lg:hidden text-neutral-300">
                    <button onClick={toggle}>
                        {openMenu ? <X /> : <Menu />}
                    </button>
                </div>
            </div>


            {/* side menu code */}
            <div className="lg:hidden">
                {openMenu &&
                    <div className="fixed w-full bg-neutral-800 text-center p-5 space-y-5">
                        <ul className="space-y-5">
                            {NavLinks_Left.map((item, index) => (
                                <li key={index}>
                                    <a onClick={toggle} className="px-10 text-md text-neutral-300 hover: hover:text-orange-500" href={item.href}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                        <ul className="space-y-5">
                            {NavLinks_Rigth.map((item, index) => (
                                <li key={index}>
                                    <a onClick={toggle} className="px-10 text-md text-neutral-300 hover:hover:text-orange-500" href={item.href}>{item.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                }
            </div>
        </nav>

    )
}

export default NavBar