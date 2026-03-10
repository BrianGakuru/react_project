// give info of how people can get in touch
const labelClass =[
    "block",                // Makes label take full width
    "mb-2",                 // Margin bottom
    "text-sm",              // Small text
    "font-medium",          // Medium font weight
    "text-gray-800",        // text color for light mode
    "dark:text-gray-200"    // text color for  dark mode

].join(" ");

const inputClass=[
    "w-full",       //full width
    "px-4", "py-2", // horizontall & verticall padding
    "border",       // Default border
    "rounded-lg" ,   // larger border radius
    "bg-white",
    "dark:bg-gray-800",
    "border-gray-300",
    "dark:border-gray-700",
    "text-gray-800",
    "dark:text-white",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-blue-500",
    "focus:border-blue-500"

].join(" ");

const ContactSection=()=>{
    return(
        <section>
            <section className="min-h-screen py-20 text-center bg-white dark:bg-gray-900">
            <h3 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-12">
                Contact Me
            </h3>
            
            {/*Contact Info*/}
            <div className="mb-10 text-gray-700 dark:text-gray-300">
                <p className="text-lg"> +254112-234-477</p>
                <p className="text-lg"> gakurubrian@gmail.com</p>
            </div>

            {/*Contact Form*/}
            <form className="max-w-3xl mx-auto text-left grid grid-cols-1 gap-6">
                <div>
                    <label
                        htmlFor="name"
                        className={labelClass}
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Your name"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className={labelClass}
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your email"
                        className={inputClass}
                    />
                </div>
                <div>
                    <label
                        htmlFor="message"
                        className={labelClass}
                    >
                        Message
                    </label>
                    <textarea
                        rows={5}
                        id="message"
                        placeholder="Your message ..."
                        className={inputClass}
                    >

                    </textarea>
                </div>
                <button
                    type="submit"
                    className={[
                        "w-full","sm:w-fit",            // Responsive width
                        "px-6","py-2",                  // Padding
                        "border","border-blue-500",     //Border and color
                        "text-blue-500",                 // Text color
                        "rounded",                      // Rounded corners
                        "hover:bg-blue-500",            // Hover background
                        "hover:text-white",              // Hover text color
                        "transition"                       // Smooth transitions
                    ].join(" ")}
                >
                    Send Message
                </button>
            </form>
        </section>

        </section>
    );
};

export default ContactSection;