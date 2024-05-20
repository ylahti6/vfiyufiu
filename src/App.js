import Header from "./sections/Header";
import Navigator from "./components/Navigator";


function App() {
  return (
    <div className="App">
      <Navigator />
      <Header />
      
    </div>
  );
}


// find out if chat gpt can figure out how to 
// have two functions that return stuff to 
// one index page

function AppNotWrapped() {
  return (
    <></>
  );
}

export default App;
