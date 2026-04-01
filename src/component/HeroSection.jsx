import { Fragment, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../Images/abd.png"; // Profile image
import bgImage from "../Images/hero-bg.png"; // Background image
import cvFile from "../Images/manzarabbas.pdf"

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const openSocial = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Fragment>
      <section
        id="home"
        className="relative w-full pt-34 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Left Content */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-6 text-center lg:text-left">
              <h1
                className="text-4xl md:text-5xl font-bold text-white leading-tight"
                data-aos="fade-up"
              >
                <span className="block">Hi, I'm</span>
                <span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#ce0928] to-[#ff4d5e]"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Abdullah Khalid
                </span>
              </h1>

              <div
                className="text-2xl text-white font-medium"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                <Typewriter
                  words={["Wordpress Developer", "Elementor Specialist", "UI/UX Designer"]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </div>

              <p
                className="text-sm text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0"
                data-aos="zoom-in-up"
                data-aos-delay="600"
              >
                I design modern, responsive websites with clean code, fluid animations & intuitive user experiences, delivering engaging digital solutions that merge creativity, performance, and seamless functionality.
              </p>

              {/* Download CV Button */}
              <a
                href={cvFile}
                download
                className="block mx-auto lg:mx-0 px-8 py-3 bg-[#ce0928] text-white font-semibold rounded-md shadow-lg hover:bg-[#ff4d5e] transition-colors duration-300 mt-4 w-max"
              >
                Download CV
              </a>
            </div>

            {/* Right Profile Image + Download Button */}
            <div
              className="lg:w-1/2 flex flex-col items-center lg:items-end space-y-5"
              data-aos="fade-left"
              data-aos-delay="500"
            >
              <img
                src={profile}
                alt="Hero"
                className="w-96 h-96 rounded-full border border-gray-800 hover:border-[#ce0928] shadow-2xl object-cover"
              />


            </div>

          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HeroSection;