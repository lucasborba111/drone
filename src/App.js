import "./App.css";
import MapaDrone from "./components/map/MapDrone";
import FormPartidaChegada from "./components/forms/FormPartidaChegada";
import { getDtoRota } from "./calculaRota";
import { useState } from "react";

function App() {
  const [pLat, setLatPartida] = useState(51.505);
  const [pLng, setLngPartida] = useState(-0.09);
  const [loading, setLoading] = useState(false);

  const calcularPartida = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const dto = getDtoRota(e);
      debugger;
      setLngPartida(dto.pLng);
      setLatPartida(dto.pLat);
      setLoading(false);
    }, 4000);
  };

  return (
    <div className="App">
      {
        loading ?<img alt='qualquercoisa' src='/drone.gif' width={300} height={300} />:(<><FormPartidaChegada calcularPartida={calcularPartida} loading={loading} />
        <MapaDrone pLat={pLat} pLng={pLng} /></>)
      }
    </div>
  );
}

export default App;
