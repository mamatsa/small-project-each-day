const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="absolute left-4 right-4 top-[99px] z-10 rounded-lg  bg-white px-6 py-8 shadow-lg md:static md:w-full md:max-w-xl md:px-0 md:shadow-none">
      {children}
    </section>
  );
};

export default Section;
