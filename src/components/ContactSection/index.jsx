import { useState } from "react";
import emailjs from "@emailjs/browser";



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
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);


    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSubmitStatus("success");

            setFormData({
                name: "",
                email: "",
                message: "",
            });
            } catch (error) {
                console.error("EmailJS Error:", error);
                setSubmitStatus("error");
            } finally {
                setIsSubmitting(false);
            }
        }

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
            <form 
                onSubmit={handleSubmit}
                className="max-w-3xl mx-auto text-left grid grid-cols-1 gap-6"
            
            >
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
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className={inputClass}
                        required
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
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your email"
                        className={inputClass}
                        required
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
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your message ..."
                        className={inputClass}
                        required
                    />
                </div>

                {submitStatus === "success" && (
                    <div className="p-4 rounded-lg bg-green-100 text-green-700">
                        Message sent successfully! I'll get back to you soon.
                    </div>
                )}

                {submitStatus === "error" && (
                    <div className="p-4 rounded-lg bg-red-100 text-red-700">
                        Failed to send message. Please try again later.
                    </div>
                )}



                <button
                    type="submit"
                    disabled={isSubmitting}
                    className={[
                        "w-full", // Responsive width
                        "sm:w-fit",  // Padding
                        "px-6",
                        "py-2",
                        "border",
                        "border-blue-500",  //Border and color
                        "text-blue-500",     //Border and color
                        "rounded",      // Rounded corners
                        "hover:bg-blue-500",     // Hover background
                        "hover:text-white", // Hover text color
                        "transition",           // Smooth transitions
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    ].join(" ")}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>

        </section>
    );
};

export default ContactSection;