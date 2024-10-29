// src/components/CallToAction.js

const CallToAction = () => {
  return (
    <section className="bg-white dark:bg-black border-t dark:border-[#252525] mx-4 border-[#EBEBEB] text-white py-12 text-center">
      <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Ready to Build Amazing Interfaces?</h2>
      <p className="mb-6 text-black dark:text-white">Join the Sajilo UI community and start your journey!</p>
      <a
        href="https://github.com/smrn001/Sajilo-UI"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white dark:bg-black text-black dark:text-white px-6 py-2 border dark:border-[#252525] border-[#EBEBEB] rounded-lg font-semibold "
      >
        Explore on GitHub
      </a>
    </section>
  );
};

export default CallToAction;