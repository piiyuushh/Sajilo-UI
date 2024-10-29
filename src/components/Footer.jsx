import { Link } from "react-router-dom"; // Use react-router-dom for navigation
import { FaGithub } from "react-icons/fa"; // Import GitHub icon

const Footer = () => {
  return (
    <footer className="py-6 bg-[#FAFAFA] border-t border-[#EBEBEB]  text-gray-800 dark:bg-[#0A0A0A] dark:border-[#252525] dark:text-white">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-4 md:mt-0">
          <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            Home
          </Link>
          <Link to="/components" className="hover:text-blue-600 dark:hover:text-blue-400">
            Components
          </Link>
          <Link to="/docs" className="hover:text-blue-600 dark:hover:text-blue-400">
            Docs
          </Link>
        </div>

        {/* GitHub Link */}
        <div className="mt-4 md:mt-0">
          <a
            href="https://github.com/smrn001/Sajilo-UI"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FaGithub className="mr-1" /> {/* GitHub Icon */}
            GitHub
          </a>
        </div>
      </div>

      <div className="text-center mt-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Sajilo UI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;