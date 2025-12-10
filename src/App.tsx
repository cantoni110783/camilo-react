import "./App.css";
import { Button } from "./components";

function App() {
  const handleClick = () => {
    console.log("clicked");
  };

  return;
  <Button label="My Button" parentMethod={handleClick} />;
}

export default App;
