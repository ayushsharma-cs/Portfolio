import "./App.css";
import About from "./components/About.tsx";
import Background from "./components/Background.tsx";
import Contact from "./components/Contact.tsx";
import Home from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Skills from "./components/Skills.tsx";
function App() {
	return (
		<>
			<Background />
			<Navbar />
			<Home />
			<About />
			<Skills />
			<Contact />
		</>
	);
}

export default App;
