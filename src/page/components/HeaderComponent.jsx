import { useState } from "react";

const HeaderComponent = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu visibility

  const code = `
<header class="bg-white shadow-md">
  <div class="container mx-auto flex justify-between items-center p-6">
    <h1 class="text-3xl font-bold text-gray-900">My App</h1>
    <nav>
      <div class="block lg:hidden">
        <button class="text-gray-700 focus:outline-none" id="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
      <ul class="hidden lg:flex space-x-6 text-gray-700">
        <li><a href="/" class="hover:text-blue-500 transition">Home</a></li>
        <li><a href="/about" class="hover:text-blue-500 transition">About</a></li>
        <li><a href="/services" class="hover:text-blue-500 transition">Services</a></li>
        <li><a href="/contact" class="hover:text-blue-500 transition">Contact</a></li>
      </ul>
    </nav>
  </div>

  <div class="lg:hidden">
    <ul class="${
      menuOpen ? "block" : "hidden"
    } text-gray-700 bg-white rounded-lg shadow-md absolute left-0 w-full">
      <li><a href="/" class="block px-4 py-2 hover:bg-blue-500 hover:text-white">Home</a></li>
      <li><a href="/about" class="block px-4 py-2 hover:bg-blue-500 hover:text-white">About</a></li>
      <li><a href="/services" class="block px-4 py-2 hover:bg-blue-500 hover:text-white">Services</a></li>
      <li><a href="/contact" class="block px-4 py-2 hover:bg-blue-500 hover:text-white">Contact</a></li>
    </ul>
  </div>
</header>
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        setCopySuccess("Copied to clipboard!");
        setTimeout(() => setCopySuccess(""), 2000); // Clear message after 2 seconds
      },
      () => {
        setCopySuccess("Failed to copy!");
      }
    );
  };

  return (
    <div className="container mx-auto p-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">Header Component</h1>
      <p className="text-lg mb-6">
        This is a responsive navigation header designed for your application.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Preview</h2>

      <output>
        <header className="bg-white shadow-md">
          <div className="container mx-auto flex justify-between items-center p-6">
            <h1 className="text-3xl font-bold text-gray-900">My App</h1>
            <nav>
              <div className="block lg:hidden">
                <button
                  className="text-gray-700 focus:outline-none"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
              <ul className="hidden lg:flex space-x-6 text-gray-700">
                <li>
                  <a href="#" className="hover:text-blue-500 transition">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-500 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="lg:hidden">
            <ul
              className={`${
                menuOpen ? "block" : "hidden"
              } text-gray-700 bg-white rounded-lg shadow-md absolute left-0 w-full`}
            >
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-blue-500 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </header>
      </output>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>

      <div className="flex items-center mb-4">
        <button
          onClick={handleCopy}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17h6m2-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v8m10 0v2a2 2 0 01-2 2H7a2 2 0 01-2-2v-2"
            />
          </svg>
          Copy Code
        </button>
        {copySuccess && (
          <span className="ml-4 text-green-500 font-semibold">
            {copySuccess}
          </span>
        )}
      </div>

      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default HeaderComponent;
