import { Link } from "react-router-dom";

const Hero = () => {
    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/CV.pdf'; 
        link.download = 'Brian_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="min-h-screen pt-24 flex flex-col md:flex-row items-center justify-between dark:bg-gray-800 px-6 md:px-20 py-10">
            {/* Left Side: Text*/}
            <div className="max-w-lg space-y-4">
                <p className="text-lg"> Hello, I am</p>
                <h1 className="text-4xl md:text-6xl font-bold text-blue-600 dark:text-blue-400">
                    Brian
                </h1>

                <p className="text-gray-600 dark:text-gray-300 text-xl">
                    Mathematician / Data Analyst / Data Scientist / MLOps Dev
                </p>

                <div className="flex gap-4">
                    <a
                        href="#contact"
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Let's Connect
                    </a>

                    <button
                        onClick={handleDownloadCV}
                        className="px-4 py-2 border border-blue-500 rounded text-blue-500 hover:bg-blue-500 hover:text-white transition"
                    >
                        Download CV
                    </button>
                </div>
            </div>

            {/* Right side: Clickable Image + Icons */}
            <Link 
                to="/about" 
                className="relative mt-10 md:mt-0 block group transform hover:scale-105 transition duration-300 cursor-pointer"
                title="Click to read more about Brian"
            >
                <img
                    src="/images/hero/Brian.jpg"
                    alt="Profile - Click to learn more"
                    className="rounded-full shadow-lg group-hover:shadow-xl transition duration-300"
                    width={300}
                    height={300}
                />

                {/* 2. PLACE THE HOVER OVERLAY DIV RIGHT HERE 👇 */}
                <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-semibold tracking-wide bg-blue-600/80 px-3 py-1.5 rounded-full backdrop-blur-sm">
                        Click to read my story 📖
                    </span>
                </div>

                {/* Technology icons remain in place relative to the Link wrapper */}
                <div className="absolute top-[-20px] right-[-20px] bg-white dark:bg-gray-700 p-2 rounded-full shadow-md">
                    <img
                        src="/images/hero/python_logo.png"
                        alt="Python"
                        className="w-8 h-8"
                    />
                </div>

                <div className="absolute bottom-[-20px] left-[-20px] bg-white dark:bg-gray-700 p-2 rounded-full shadow-md">
                    <img
                        src="/images/hero/streamlit_logo.png"
                        alt="Streamlit"
                        className="w-8 h-8"
                    />
                </div>
            </Link>
        </section>
    );
};

export default Hero;