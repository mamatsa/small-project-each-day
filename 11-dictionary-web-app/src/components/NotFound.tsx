const NotFound = () => {
  return (
    <div className="mt-10">
      <p className="mb-8 text-center text-6xl">&#128533;</p>
      <h1 className="mb-2 text-center text-lg font-bold md:text-2xl">
        No Definitions Found
      </h1>
      <p className="px-12 text-center text-gray-300 md:text-lg">
        Sorry pal, we couldn't find definitions for the word you were looking
        for. You can try the search again at later time or head to the web
        instead.
      </p>
    </div>
  );
};

export default NotFound;
