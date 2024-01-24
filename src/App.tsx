import ItemsList from "./components/ItemsList";
import data from "./data/etsy.json";

function App() {
  const newdata = data.filter((el) => el.state === "active");

  return (
    <>
      <ItemsList array={newdata} />
    </>
  );
}

export default App;
