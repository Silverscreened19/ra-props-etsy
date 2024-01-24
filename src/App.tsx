import { ItemType } from "./components/Item";
import Listing from "./components/Listing";
import data from "./data/etsy.json";
import "./App.css";

function App() {
  return (
    <>
      <Listing array={data as ItemType[]} />
    </>
  );
}

export default App;
