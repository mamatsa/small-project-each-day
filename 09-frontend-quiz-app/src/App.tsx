import { HTMLLogo, CSSLogo, JavaScriptLogo, Accessibility } from "components";

const App = () => {
  return (
    <div className="bg-light-gray h-screen space-y-10 p-6">
      <div className="space-y-4">
        <h1 className="text-[40px] font-light leading-tight">
          Welcome to the <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <p className="text-sm italic">Pick a subject to get started.</p>
      </div>

      <ul className="space-y-3">
        <li className="flex items-center gap-4 rounded-xl bg-white p-3">
          <div className="h-10 w-10">
            <HTMLLogo />
          </div>
          <span className="text-lg font-medium">HTML</span>
        </li>
        <li className="flex items-center gap-4 rounded-xl bg-white p-3">
          <div className="h-10 w-10">
            <CSSLogo />
          </div>
          <span className="text-lg font-medium">CSS</span>
        </li>
        <li className="flex items-center gap-4 rounded-xl bg-white p-3">
          <div className="h-10 w-10">
            <JavaScriptLogo />
          </div>
          <span className="text-lg font-medium">JavaScript</span>
        </li>
        <li className="flex items-center gap-4 rounded-xl bg-white p-3">
          <div className="h-10 w-10">
            <Accessibility />
          </div>
          <span className="text-lg font-medium">Accessibility</span>
        </li>
      </ul>
    </div>
  );
};

export default App;
