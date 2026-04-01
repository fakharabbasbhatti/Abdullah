import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";



const Footer = () => {
  // Social icons data
  const socialLinks = [
    { url: "https://linkedin.com", icon: <FaLinkedinIn />, color: "hover:text-[#1877F2]" },
    { url: "https://Upwork.com", icon: <FaUpwork />, color: "hover:text-gary-500" },
    { url: "https://fiverr.com", icon: <TbBrandFiverr />, color: "hover:text-green-600" },
    { url: "https://github.com", icon: <FaGithub />, color: "hover:text-gary-600" },
  ];

  return (
    <footer className="bg-black text-white px-5 sm:px-12  py-10 border-b-1 border-white">

      {/* Main Grid */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 ">

        {/* About Me */}
        <div data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-4 text-[#CE0928]">
            About Me
          </h3>
          <p className="leading-relaxed text-gray-300">
            I'm Abdullah Khalid, a passionate WordPress Developer who loves
            building amazing WordPress websites and solving real-world problems.
            With a focus on clean code, scalability, and user experience.
          </p>
        </div>

        {/* Contact Information (Right Side, Top-Aligned) */}
        <div data-aos="fade-up" data-aos-delay="200" className="flex flex-col items-start lg:items-end">
          <h3 className="text-xl font-bold mb-3 text-[#CE0928] mr-3">
            Contact Information
          </h3>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-3">
            {socialLinks.length > 0 ? (
              socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`bg-white/10 p-3 rounded-full text-white ${social.color}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))
            ) : (
              <p className="text-sm text-gray-500">No social links</p>
            )}
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="border-t border-[#CE0928]/40 mt-10 pt-4 text-center">
        <p>
          Made with <span>🎀</span> by{" "}
          <span className="font-bold">Abdullah Khalid</span> &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>

    </footer>
  );
};

export default Footer;