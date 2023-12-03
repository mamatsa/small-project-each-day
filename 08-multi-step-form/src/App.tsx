import { NavButtons, Navbar, PersonalInfo } from "components";

const App = () => {
  return (
    <div className="bg-magnolia flex h-screen w-full items-start justify-center">
      <div className="w-full">
        {/* Sidebar */}
        <Navbar />
        <div>
          {/* Form Section */}
          <PersonalInfo />

          {/* Navigation Buttons */}
          <NavButtons />
        </div>
      </div>
    </div>
  );
};

export default App;
