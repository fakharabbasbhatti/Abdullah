import React from "react";
import { MdMarkEmailRead } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import about from "../Images/abd.png"; // Profile image

const features = [
  {
    icon: <MdMarkEmailRead className="w-6 h-6 text-black" />,
    title: "abdullahkhalid0326@gmail.com",
  },
  {
    icon: <FaPhoneVolume className="w-6 h-6 text-black" />,
    title: "+92 326 7921602",
  },
];

const AboutSection = () => {
  return (
    <section id="about"
      className="relative py-24  overflow-hidden bg-fixed bg-center bg-cover bg-black border-b-1 border-white">

      {/* Content Container */}
      <div className="max-w-[1400px] px-5 sm:px-12 mx-auto relative z-20 grid md:grid-cols-2 gap-20 items-center">
        {/* Text Content */}
        <div className="p-5 sm:p-8 bg-white/70 rounded-md shadow-lg backdrop-blur-md">
          <h2 className="text-4xl font-bold text-red-600 mb-4">About Us</h2>
          <p className="text-gray-800 mb-6 text-md">
            Hi, I'm Abdullah Khalid, a passionate Frontend Developer and WordPress Developer specializing in building responsive and interactive websites. With expertise in HTML, CSS, JavaScript, PHP, and SQL, and strong experience with WordPress development, including theme customization, plugin integration, Elementor, WooCommerce, and performance optimization, I transform ideas into sleek, user-centric digital experiences. I focus on writing clean, maintainable code, creating smooth UI/UX, and developing scalable and high-performance WordPress websites.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="sm:w-[260px] flex flex-col items-center p-3 bg-white/10 rounded-lg shadow-xl hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-3 text-white transform transition duration-300">
                  {feature.icon}
                </div>
                <div className="mt-2 text-center">
                  <h3 className="text-md text-black">{feature.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="relative p-3 flex justify-center items-center sm:ml-30">
          <img
            src={about}
            alt="About Us"
            className="rounded-xl shadow-md object-cover w-96 h-96 lg:w-[500px] lg:h-[450px] hover:opacity-90 transition-opacity duration-300 border border-gray-800 hover:border-[#ce0928] "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;