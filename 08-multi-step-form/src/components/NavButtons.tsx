const NavButtons = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-white p-4">
      <button className="text-cool-gray text-sm font-medium">Go back</button>
      <button className="bg-marine-blue rounded-sm px-4 py-3 text-sm font-medium text-white">
        Next Step
      </button>
    </div>
  );
};

export default NavButtons;
