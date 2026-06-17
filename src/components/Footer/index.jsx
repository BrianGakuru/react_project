import { FaLinkedin, FaFacebook, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const navLinks = [
        { label: "Home", target: "hero", type: "scroll" },
        { label: "Work", target: "projects", type: "scroll" },
        { label: "Skills", target: "skills", type: "scroll" },
        { label: "Testimonials", target: "recomendation", type: "scroll" },
        { label: "Contact", target: "contact", type: "scroll" },
        {
            label: "Articles",
            target: "https://brian-blogs-articles.vercel.app/",
            type: "external",
        },
    ];

const Footer =()=>{
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-8 text-center">
            <div max-w-6xl max-auto flex flex-col md:flex-row justify-between items-center gap-6>
                <div className="text-xl font-bold text-gray-800 dark:text-white">
                    BRI<span className="text-blue-500">AN</span>
                </div>

                <h2 className="text-gray-700 dark: text-gray-300 text-wrap font-bold  text-3xl mb-2 tracking-wide">
                    <span className="font-light opacity-90"> Mathematician/ Data Scientist/ Analyst</span>
                </h2>

                {/* Tagline */}
                <p className="text-gray-600 dark: text-gray-300 text-lg  mt-0 mb-8">
                    Mathematising the world Excellence in digital creation
                </p>

                <div className="text-x flex gap-6 flex-wrap justify-center  mb-6">
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

                </div>
                    {/* transition hover:text-blue-500 */}
                {/* Social Media Icons */}
                <div className="flex justify-center gap-8 mb-6">
                    <a href="https://www.linkedin.com/in/gakuru-brian-ba976a260/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200 inline-flex items-center">
                    <FaLinkedin className='  hover:shadow-xl hover:scale-105' size={40} />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200 inline-flex items-center">
                    <FaFacebook className='  hover:shadow-xl hover:scale-105' size={40} />
                    </a>
                    <a href="https://github.com/BrianGakuru" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200 inline-flex items-center">
                    <FaGithub className='  hover:shadow-xl hover:scale-105' size={40} />
                    </a>
                    {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200 inline-flex items-center">
                    <FaTwitter className='  hover:shadow-xl hover:scale-105' size={40} />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity duration-200 inline-flex items-center">
                    <FaInstagram className='  hover:shadow-xl hover:scale-105' size={40} />
                    </a> */}
                </div>
                

                {/* Divider*/}
                <hr className="my-6 border-gray-300 dark:border-gray-700"/>

                {/*Copyright*/}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    ©{new Date().getFullYear()} Brian. All rights reserved.
                </p>

            </div>
            
        </footer>
    );
};


export default Footer