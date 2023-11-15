import "./App.css";
import MapaDrone from "./components/map/MapDrone";
import FormPartidaChegada from "./components/forms/FormPartidaChegada";

function App() {
  return (
    <div className="App">
      {/*       {loading ? (
        <img alt="qualquercoisa" src="/drone.gif" width={300} height={300} />
      ) : (
        <> */}
      <FormPartidaChegada />
      <MapaDrone />
      {/* </>
      )} */}
    </div>
  );
}

export default App;
