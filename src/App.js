import "./App.css";
import Add from "./components/Add";
import Item from "./components/Item";
import { useSelector } from "react-redux";
function App() {
  const items = useSelector((state) => state);
  return (
    <div className="App">
      <Add />
      {items.map((e, i) => (
        <Item key={i} index={e.id} />
      ))}
    </div>
  );
}

export default App;
