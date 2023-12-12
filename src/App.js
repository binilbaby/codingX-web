import "./App.css";
import { AppRoutes } from "./Components/AppRoutes";
import FullbackgroundImage from "./Assets/rectangle.png";

const appStyle = {
  backgroundImage: `url(${FullbackgroundImage})`, // Set the SVG image as the background
  backgroundSize: "cover", // Adjust to your styling preferences
  backgroundRepeat: "no-repeat", // Adjust to your styling preferences
  minHeight: "100vh", // Ensure the background covers the entire viewport height
};

function App() {
  return (
    <div className="App" style={appStyle}>
      <AppRoutes />
    </div>
  );
}

export default App;