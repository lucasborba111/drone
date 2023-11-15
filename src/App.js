import "./App.css";
import MapaDrone from "./components/map/MapDrone";
import FormPartidaChegada from "./components/forms/FormPartidaChegada";
import LoadingModal from "./components/modal/LoadingModal";

function App() {
  return (
    <div className="App">
      <FormPartidaChegada />
      <MapaDrone />
      <LoadingModal />
    </div>
  );
}

export default App;
