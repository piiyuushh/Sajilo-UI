import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="py-20 text-center bg-white text-gray-900 mx-4 dark:bg-black dark:text-white ">
      <h1 className="text-5xl font-bold mb-4">Welcome to Sajilo UI</h1>
      <p className="text-lg mb-8">
        A simple and flexible UI component library for your projects.
      </p>
      <Link
        to="/components"
        className="px-6 py-2 rounded-lg font-semibold  bg-white text-black  dark:border-[#252525] border-[#EBEBEB] dark:bg-[#0A0A0A] border  dark:text-white"
      >
        Get Started
      </Link>
    </section>
  );
};

export default Hero;
