import { useRef, useEffect } from "react";
import { FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { MdOutlineAlternateEmail, MdLocationPin } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {
  const form = useRef();

  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
  };

  const contactItems = [
    {
      icon: <MdLocationPin />,
      text: "Bahawalpur, Punjab, Pakistan",
      color: "from-[#ce0928] to-[#ff4d5e]",
    },
    {
      icon: <MdOutlineAlternateEmail />,
      text: "abdullahkhalid0326@gmail.com",
      color: "from-[#ce0928] to-[#ff4d5e]",
      href: "mailto:abdullahkhalid0326@gmail.com",
    },
    {
      icon: <FaPhoneAlt />,
      text: "+92 326 7921602",
      color: "from-[#ce0928] to-[#ff4d5e]",
      href: "tel:+923267921602",
    },
    {
      icon: <CgWebsite />,
      text: "abdullahkhalid.com",
      color: "from-[#ce0928] to-[#ff4d5e]",
      href: "https://abdullah-khalid.vercel.app/",
      target: "_blank",
    },
  ];

  return (
    <section id="contact" className="py-10 sm:py-16 px-5 sm:px-12 bg-black border-b border-white">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-[#ce0928] to-[#ff4d5e] mb-10 sm:mb-14"
          data-aos="fade-down"
        >
          Get In Touch
        </h1>

        {/* Wrapper */}
        <div
          className="flex flex-col lg:flex-row 
          bg-[#111111] rounded-xl border border-[#ce0928]/30 
          overflow-hidden"
        >

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full lg:w-1/2 p-5 sm:p-7 md:p-8 space-y-4"
            data-aos="fade-right"
          >
            {["name", "email", "phone"].map((field) => (
              <input
                key={field}
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                    ? "tel"
                    : "text"
                }
                name={field}
                placeholder={`Your ${field}`}
                className="w-full px-4 py-3 rounded-md 
                bg-white/5 border border-gray-800
                text-white placeholder-white/70 
                focus:ring-1 focus:ring-[#ce0928] 
                focus:border-[#ce0928] 
                transition-all duration-300 text-sm sm:text-base"
                required
              />
            ))}

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-md 
              bg-white/5 border border-gray-800 
              text-white placeholder-white/70 
              focus:ring-1 focus:ring-[#ce0928] 
              focus:border-[#ce0928] 
              transition-all duration-300 text-sm sm:text-base"
              required
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 
              bg-gradient-to-r from-[#ce0928] to-[#ff4d5e] 
              hover:from-[#ff4d5e] hover:to-[#ce0928] 
              text-white font-semibold py-3 rounded-md 
              transition-all duration-300 
              hover:shadow-lg cursor-pointer"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div
            className="w-full lg:w-1/2 p-5 sm:p-7 md:p-8 
            border-t lg:border-t-0 lg:border-l border-[#ce0928]/30
            flex flex-col justify-center"
            data-aos="fade-left"
          >
            <div className="grid gap-4">
              {contactItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 p-4 rounded-md 
                  bg-white/5 border border-gray-800
                  transition-all duration-300 
                  hover:border-[#ce0928]/50
                  hover:shadow-md"
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 flex items-center justify-center 
                    rounded-md bg-gradient-to-br ${item.color}`}
                  >
                    <span className="text-white text-lg">
                      {item.icon}
                    </span>
                  </div>

                  {/* Text */}
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target}
                      className="text-sm sm:text-base text-white"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="text-sm sm:text-base text-white">
                      {item.text}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  );
};

export default ContactUs;