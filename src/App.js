import Navigator from "./components/Navigator";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Navigator />
      <HomePage />
      <Footer className="no-wrap"/>
    </div>
  );
}

export default App;
