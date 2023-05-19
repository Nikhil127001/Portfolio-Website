import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import HeaderComponent from "./Components/HeaderComponent";
import { useState } from "react";
import ProjectPageItemsComponentWeb from "./Components/ProjectPageItemsComponentWeb";
import ProjectPageItemsComponentApp from "./Components/ProjectPageItemsComponentApp";

function App() {

  const [Color, setColor] = useState("light")

  const change = () => {
    if (Color === "light") {
      setColor("dark");
      document.body.style.backgroundColor = "black"

    } else {
      setColor("light");
      document.body.style.backgroundColor = "white"

    }
  }
  return (
    <Router>
      <HeaderComponent change={change} Color={Color} />
      <Routes>
        <Route exect path="/" element={<HomePage Color={Color} />}>
        </Route>
        <Route exect path="/projects" element={<ProjectsPage Color={Color} />}>
        </Route>
        <Route exect path="/contact" element={<ContactPage Color={Color} />}>
        </Route>
        <Route exect path="/about" element={<AboutPage Color={Color}/>}></Route>
        <Route exact path="/projectItemsApp" element={<ProjectPageItemsComponentApp Color = {Color}/>}>

        
        </Route>
        <Route exact path="/projectItemsWeb" element={<ProjectPageItemsComponentWeb Color = {Color}/>}>

        
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
