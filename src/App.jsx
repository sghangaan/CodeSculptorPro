import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import "@fontsource/roboto/400.css";
import "./components/App.css"; // Import your CSS file for styling

function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <Home />
        
      </div>
    </>
  );
}

export default App;
