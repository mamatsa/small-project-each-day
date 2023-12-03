const App = () => {
  return (
    <div className="bg-magnolia flex h-screen w-full items-start justify-center">
      <div className="w-full">
        {/* Sidebar */}
        <div className="bg-sidebar-mobile absolute left-0 right-0 top-0 flex h-[172px] justify-center gap-4 bg-cover bg-no-repeat pt-8 text-white">
          <div className="bg-pastel-blue grid h-8 w-8 place-items-center rounded-full text-sm font-bold">
            1
          </div>
          <div className="bg-pastel-blue grid h-8 w-8 place-items-center rounded-full text-sm font-bold">
            2
          </div>
          <div className="bg-pastel-blue grid h-8 w-8 place-items-center rounded-full text-sm font-bold">
            3
          </div>
          <div className="bg-pastel-blue grid h-8 w-8 place-items-center rounded-full text-sm font-bold">
            4
          </div>
        </div>
        <div>
          {/* Form Section */}
          <section className="absolute left-4 right-4 top-[99px] z-10 rounded-lg  bg-white px-6 py-8">
            <h1 className="text-marine-blue text-2xl font-bold">
              Personal info
            </h1>
            <p>Please provide your name, email address, and phone number.</p>
            <form action="" className="mt-5">
              <div className="text-marine-blue mb-4 flex flex-col">
                <label htmlFor="userName" className="text-marine-blue text-xs">
                  Name
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="e.g. Stephen King"
                  className="border-light-gray text-marine-blue rounded-md border px-4 py-3 font-bold outline-none"
                />
              </div>
              <div className="text-marine-blue mb-4 flex flex-col">
                <label htmlFor="userName" className="text-marine-blue text-xs">
                  Email Address
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="e.g. stephenking@lorem.com"
                  className="border-light-gray text-marine-blue rounded-md border px-4 py-3 font-bold outline-none"
                />
              </div>
              <div className="text-marine-blue mb-4 flex flex-col">
                <label htmlFor="userName" className="text-marine-blue text-xs">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="e.g. +995 555 555 555"
                  className="border-light-gray text-marine-blue rounded-md border px-4 py-3 font-bold outline-none"
                />
              </div>
            </form>
          </section>

          {/* Navigation Buttons */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-white p-4">
            <button className="text-cool-gray text-sm font-medium">
              Go back
            </button>
            <button className="bg-marine-blue rounded-sm px-4 py-3 text-sm font-medium text-white">
              Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
