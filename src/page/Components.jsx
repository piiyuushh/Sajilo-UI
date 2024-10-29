
const Components = () => {
  return (
    <div className="container mx-auto p-8 bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-4">Sajilo UI Components 🚀</h1>
      <p className="text-lg mb-6">
        Sajilo UI offers a range of free, customizable Tailwind CSS components
        that you can use to build beautiful applications. Below is a list of
        available components, along with their descriptions.
      </p>

      <h2 className="text-3xl font-semibold mt-8 mb-4">Available Components</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {componentsList.map((component) => (
          <li
            key={component.name}
            className="p-4 border dark:border-[#252525] border-[#EBEBEB] rounded-lg  bg-gray-50 dark:bg-[#0A0A0A]  "
          >
            <h3 className="text-2xl font-semibold">{component.name}</h3>
            <p>{component.description}</p>
            <a
              href={component.link}
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              View Component
            </a>
          </li>
        ))}
      </ul>

     
    </div>
  );
};

// List of components with their names, descriptions, and links
const componentsList = [
  {
    name: "Header",
    description: "A responsive navigation header for your application.",
    link: "/components/header",
  },
  {
    name: "Footer",
    description: "A footer component to display site information and links.",
    link: "/components/footer",
  },
  {
    name: "Buttons",
    description: "Stylish buttons with various sizes and styles.",
    link: "/components/buttons",
  },
  {
    name: "Cards",
    description:
      "Information cards for displaying content in a visually appealing way.",
    link: "/components/cards",
  },
  {
    name: "Modals",
    description: "Popup modals for displaying important information or forms.",
    link: "/components/modals",
  },
  {
    name: "Alerts",
    description:
      "Notification alerts to inform users of important actions or statuses.",
    link: "/components/alerts",
  },
  // Add more components as needed
];

export default Components;