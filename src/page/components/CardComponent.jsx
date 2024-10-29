import { useState } from "react";

const CardComponent = () => {
  const [copySuccess, setCopySuccess] = useState("");

  const code = `
<div class="bg-white shadow-md rounded-lg p-6">
  <h3 class="text-xl font-semibold mb-2">Card Title</h3>
  <p class="text-gray-700 mb-4">This is a brief description of the card content. It provides an overview of what the card is about.</p>
  <button class="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition focus:outline-none">
    Learn More
  </button>
</div>
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
      <h1 className="text-4xl font-bold mb-4">Card Component</h1>
      <p className="text-lg mb-6">
        This is a customizable card component for your application.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Preview</h2>

      <output>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-2">Card Title</h3>
          <p className="text-gray-700 mb-4">
            This is a brief description of the card content. It provides an
            overview of what the card is about.
          </p>
          <button className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition focus:outline-none">
            Learn More
          </button>
        </div>
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

export default CardComponent;
