import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { FaHtml5, FaCss3, FaJsSquare } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { FaWordpress, FaElementor, FaDatabase } from "react-icons/fa";
import { SiWoocommerce } from "react-icons/si";

const MySkills = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out-back",
      once: true,
    });
  }, []);

  const skills = [
    { name: "HTML5", icon: <FaHtml5 />, percentage: 95, color: "from-[#ce0928] to-[#ff4d5e]" },
    { name: "CSS3", icon: <FaCss3 />, percentage: 90, color: "from-[#ce0928] to-[#ff4d5e]" },
    { name: "JavaScript", icon: <FaJsSquare />, percentage: 85, color: "from-[#ce0928] to-[#a8071a]" },
    { name: "WordPress", icon: <FaWordpress />, percentage: 95, color: "from-[#ce0928] to-[#ff4d5e]" },
    { name: "Elementor", icon: <FaElementor />, percentage: 92, color: "from-[#ce0928] to-[#ff4d5e]" },
    { name: "WooCommerce", icon: <SiWoocommerce />, percentage: 88, color: "from-[#ce0928] to-[#a8071a]" },
    { name: "Database (SQL)", icon: <FaDatabase />, percentage: 80, color: "from-[#ce0928] to-[#ff4d5e]" },
    { name: "Responsive Design", icon: <MdDevices />, percentage: 90, color: "from-[#ce0928] to-[#ff4d5e]" },
  ];

  return (
    <section id="skills" className="relative py-5 sm:py-16 px-5 sm:px-12 bg-black overflow-hidden border-b-1 border-white">
      
      <div className="absolute top-0 left-0 w-40 h-40 bg-[#ce0928]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-[#ce0928]/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-[1400px] mx-auto mt-5">
        
        <h2 
          className="text-4xl p-2 md:text-5xl font-bold text-center text-[#ce0928] mb-6 sm:mb-15"
          data-aos="zoom-out"
        >
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-out"
              data-aos-delay={index * 100}
              className="relative group overflow-hidden bg-[#111111] rounded-md p-6 border border-gray-800 hover:border-[#ce0928] transition-all duration-500"
            >
              
              <div 
                className="text-4xl mb-6 w-16 h-16 flex items-center justify-center rounded-full bg-[#ce0928] mx-auto transition-all duration-500"
                data-aos="zoom-out"
                data-aos-delay={index * 100 + 200}
              >
                <span className="text-white transition-colors duration-500">
                  {skill.icon}
                </span>
              </div>

              <h3 
                className="text-xl font-semibold text-center text-white mb-4"
                data-aos="fade-down"
                data-aos-delay={index * 100 + 300}
              >
                {skill.name}
              </h3>

              <div 
                className="w-full bg-gray-700 rounded-full h-3 mb-2 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay={index * 100 + 400}
              >
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.percentage}%` }}
                  data-aos="fade-right"
                  data-aos-delay={index * 100 + 500}
                ></div>
              </div>

              <p 
                className="text-center text-sm font-medium text-gray-300"
                data-aos="fade-left"
                data-aos-delay={index * 100 + 600}
              >
                {skill.percentage}% mastery
              </p>

              {/* Removed hover overlay effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#ce0928]/10 to-[#ff4d5e]/10 opacity-0 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;