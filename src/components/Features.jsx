const features = [
  {
    title: "Responsive Design",
    description: "Works beautifully on all devices.",
  },
  {
    title: "Easy to Customize",
    description: "Easily adjustable to fit your needs.",
  },
  {
    title: "Accessible Components",
    description: "Built with accessibility in mind.",
  },
  {
    title: "Lightweight",
    description: "Fast and efficient for optimal performance.",
  },
];

const Features = () => {
  return (
    <section className="py-16 dark:bg-black bg-white border-t mx-4 dark:border-[#252525] border-[#EBEBEB]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 dark:bg-[#0A0A0A] border dark:border-[#252525] border-[#EBEBEB] rounded-lg transition-shadow hover:shadow-lg mb-4"
            >
              <h3 className="text-xl font-semibold mb-2 dark:text-[#EDEDED]">{feature.title}</h3>
              <p className="text-gray-600 dark:text-[#EDEDED]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;