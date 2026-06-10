import { useState } from "react";
import {useTheme} from "../../context/useTheme";
import {Moon,Sun, Menu, X} from "lucide-react";

const Navbar = () => {
    const {theme, toggleTheme}= useTheme();
    const [menuOpen, setMenuOpen]= useState(false);

    const navLinks = [
        { label: "Home", target: "hero", type: "scroll" },
        { label: "Work", target: "projects", type: "scroll" },
        { label: "Skills", target: "skills", type: "scroll" },
        { label: "Testimonials", target: "recommendation", type: "scroll" },
        { label: "Contact", target: "contact", type: "scroll" },
        {
            label: "Articles",
            target: "https://brian-blogs-articles.vercel.app/",
            type: "external",
        },
    ];

    

    return (
        <nav className="bg-white dark:bg-gray-900 dark:text-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="flex justify-between items-center max-w-7xl mx-auto p-6">
                <h1 className="text-xl font-bold">
                    BRI<span className="text-blue-500">AN</span>
                    
                </h1>  

                {/*Desktop Navigation */}
                <div className=" hidden md:flex items-center gap-6">
                  {navLinks.map(({ label, target, type }) =>
                    // used to navigate to external links 
                        type === "external" ? (
                            <a
                            key={label}
                            href={target}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-blue-500"
                            >
                            {label}
                            </a>
                    // used to navigate to sections within the page
                        ) : (
                            <a
                            key={label}
                            href={`#${target}`}
                            className="transition hover:text-blue-500"
                            >
                            {label}
                            </a>
                        )
                    )}  
                  {/*Light/Dark <pde toggle Button*/}

                  <button 
                  onClick={toggleTheme}
                  className="text-blue-500 hover:bg-blue-500 hover:text-white border-0"
                  >
                    
                    {theme === "dark"? <Sun size={20} /> : <Moon size={20}/>}
                  </button>

                </div>  
                {/*MobileMenu Button */}
                <button
                    className="md:hidden text-blue-600 dark:text-blue-400"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24}/>}
                </button>
            </div>

            {/*Mobile Nav*/}
            {
                menuOpen && (
                    <div className="md:hidden flex flex-col items-start px-6 pb-4 space-y-4  ">
                        {navLinks.map( ({label, target}) =>(
                            <a 
                                key={label}
                                href={`#${target}`}
                                onClick={() => setMenuOpen(false)} //close on click
                                className="transition hover:text-blue-500  text-blue-600 dark:text-blue-400"
                            >
                                {label}
                            </a>
                        ))}  
                    {/*Light/Dark <pde toggle Button*/}

                        <button 
                        onClick={toggleTheme}
                        className="text-blue-500 hover:bg-blue-500 hover:text-white border-0"
                        >
                            {theme === "dark"? <Sun size={20} /> : <Moon size={20}/>}
                        </button>
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar

