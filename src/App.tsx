import JobBoard from "./components/JobBoard";
import header from "./assets/images/bg-header-mobile.svg";
function App() {
  return (
    <>
      <header>
        <img
          src={header}
          className="mb-12 h-32 w-full bg-cyan-desaturated-dark"
          alt=""
        />
      </header>
      <JobBoard />
    </>
  );
}

export default App;
