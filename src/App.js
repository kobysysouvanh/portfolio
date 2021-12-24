import Nav from "./components/Nav"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import About from "./components/About"

function App() {
  return (
    <div id="home">
      <Nav/>
      <div className="flex flex-col space-y-40 py-40 pl-30 bg-neutral-800 ">
        <Home/>
        <About/>
        <Projects/>
        <Resume/>
      </div>
    </div>
  );
}

export default App;
