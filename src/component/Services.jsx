import Aos from "aos";
import "aos/dist/aos.css";
import { Fragment, useEffect } from "react";
import { FaLaptopCode, FaCode, FaServer, FaPlug, FaMobileAlt, FaCloudUploadAlt } from "react-icons/fa";

const Services = () => {
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-out-quad',
      once: true
    });
  }, []);

  const myServices = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      descrp: "Building responsive and interactive WordPress websites using HTML, CSS, and JavaScript to create engaging user experiences.",
      color: "from-[#ce0928] to-[#ff4d5e]"
    },
    {
      icon: <FaCode />,
      title: "UI/UX Design",
      descrp: "Designing intuitive WordPress user interfaces and experiences, focusing on usability and aesthetics.",
      color: "from-[#ce0928] to-[#ff4d5e]"
    },
    {
      icon: <FaServer />,
      title: "Frontend Framework Development",
      descrp: "Developing dynamic websites using WordPress for scalable and maintainable solutions.",
      color: "from-[#ce0928] to-[#a8071a]"
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      descrp: "Seamlessly integrating WordPress APIs and third-party plugins to enhance website functionality.",
      color: "from-[#ce0928] to-[#ff4d5e]"
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      descrp: "Ensuring websites are optimized for all devices, providing a consistent experience across desktops, tablets, and mobiles.",
      color: "from-[#ce0928] to-[#ff4d5e]"
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Web Deployment & Hosting",
      descrp: "Deploying websites to hosting platforms and managing performance, security, and updates for live applications.",
      color: "from-[#ce0928] to-[#a8071a]"
    }
  ];

  const animations = [
    { card: "flip-left", icon: "zoom-in", title: "fade-down", desc: "fade-up" },
    { card: "flip-right", icon: "zoom-in", title: "fade-down", desc: "fade-up" },
    { card: "flip-up", icon: "zoom-in", title: "fade-down", desc: "fade-up" },
    { card: "flip-down", icon: "zoom-in", title: "fade-down", desc: "fade-up" },
    { card: "zoom-in", icon: "zoom-in", title: "fade-down", desc: "fade-up" },
    { card: "zoom-out", icon: "zoom-in", title: "fade-down", desc: "fade-up" }
  ];

  const selectAnimation = (index) => animations[index % animations.length];

  return (
    <Fragment>
      <section id="services" className="relative py-5 sm:py-16  border-b-1 border-white bg-black overflow-hidden">
      <div className="max-w-[1400px] px-5 sm:px-12 mx-auto mt-5">
          
          <div className="flex justify-center">
            <h1 
              className="text-4xl md:text-5xl font-bold text-center text-[#ce0928] mb-6 sm:mb-15"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              My Services
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {myServices.map((item, index) => {
              const anim = selectAnimation(index);
              return (
                <div
                  key={index}
                  data-aos={anim.card}
                  data-aos-delay={index * 100}
                  className="relative group overflow-hidden bg-[#111111] backdrop-blur-sm rounded-md p-5 sm:p-8 border border-gray-800 hover:border-[#ce0928] transition-all duration-500 hover:shadow-lg hover:shadow-[#ce0928]/20"
                >
                  
                  {/* Icon */}
                  <div 
                    className="w-16 h-16 flex justify-center items-center rounded-full bg-gradient-to-br from-gray-700 to-gray-800 mx-auto mb-6 transition-all duration-500"
                    data-aos={anim.icon}
                    data-aos-delay={index * 100 + 200}
                  >
                    <span className="text-2xl text-[#ce0928] group-hover:text-white transition-colors duration-500">
                      {item.icon}
                    </span>
                  </div>

                  {/* Title */}
                  <h1 
                    className="text-xl font-semibold text-center text-white mb-4"
                    data-aos={anim.title}
                    data-aos-delay={index * 100 + 300}
                  >
                    {item.title}
                  </h1>

                  {/* Description */}
                  <p 
                    className="text-gray-300 text-center"
                    data-aos={anim.desc}
                    data-aos-delay={index * 100 + 400}
                  >
                    {item.descrp}
                  </p>

                  {/* Hover background removed, shadow + border remains */}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Services;