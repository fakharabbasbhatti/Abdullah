import { Fragment, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import img1 from "../Images/buildplan.png";
import img2 from "../Images/westpeptides.jpeg";
import img3 from "../Images/dgaure.png";
import img4 from "../Images/lawyer.jpg";
import img5 from "../Images/lundary.jpg";
import img6 from "../Images/california.png";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);

  const myProjects = [
    {
      pic: img1,
      title: "Build Plan",
      link: "https://www.buildplanpro.app/",
      color: "from-[#ce0928] to-[#ff4d5e]" 
    },
    {
      pic: img2,
      title: "West Peptides",
      link: "https://westpeptides.com/",
      color: "from-[#ce0928] to-[#ff4d5e]"
    },
    {
      pic: img3,
      title: "It Services",
      link: "https://dgaura.com/",
      color: "from-[#ce0928] to-[#a8071a]"
    },
    {
      pic: img4,
      title: "Lawyer",
      link: "https://lawyer-pi-three.vercel.app/",
      color: "from-[#ce0928] to-[#ff4d5e]"
    },
    {
      pic: img5,
      title: "Laundry",
      link: "https://lundary.vercel.app/",
      color: "from-[#ce0928] to-[#ff4d5e]"
    },
    {
      pic: img6,
      title: "California Home Buyers",
      link: "https://californiahomebuyers.com/",
      color: "from-[#ce0928] to-[#a8071a]"
    }
  ];

  return (
    <Fragment>
      <section id="projects" className="relative py-5 sm:py-16 px-5 sm:px-12 border-b-1 border-white bg-black overflow-hidden">

        <div className="max-w-[1400px] mx-auto mt-5 z-10">
          
          <div className="flex flex-col items-center">
             <h1 
              className="text-4xl md:text-5xl font-bold text-center text-[#ce0928] mb-6 sm:mb-15"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              My Projects
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 ">
            {myProjects.map((item, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative h-[280px] rounded-md overflow-hidden cursor-pointer border border-white/5 bg-white/5 backdrop-blur-sm hover:border-[#ce0928]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#ce0928]/20"
                onClick={() => window.open(item.link, "_blank")}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={item.pic}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6 z-20">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                    <h2 className="text-2xl font-bold text-white mb-1 drop-shadow-md">
                      {item.title}
                    </h2>
                    <div className="w-10 h-1 bg-[#ce0928] rounded-full transition-all duration-500 group-hover:w-full opacity-80" />
                  </div>

                  <div className="h-0 opacity-0 group-hover:h-8 group-hover:opacity-100 transition-all duration-500 flex items-center mt-1">
                    <p className="text-xs text-white font-medium">Click to view details</p>
                  </div>
                </div>

                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-90 backdrop-blur-[2px] transition-all duration-500 flex items-center justify-center z-30`}>
                  <button className="transform scale-50 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 delay-100 bg-white text-[#ce0928] px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-xl hover:bg-gray-100 hover:scale-105 active:scale-95 text-sm">
                    View Project <MdArrowOutward />
                  </button>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;