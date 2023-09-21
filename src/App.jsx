import "./App.css";
import data from "./tariffs.json";
import Tariff from "./Tariff";
function App() {
  return (
    <div className="App">
      {data.tariffs.map((tariff) => (
        <Tariff
          tariff={tariff.tariff}
          price={tariff.price}
          speed={tariff.speed}
          comment={tariff.comment}
          color_header={tariff.color_header}
          color_main={tariff.color_main}
          isHighlighted={tariff.isHighlighted}
        />
      ))}
    </div>
  );
}

export default App;
