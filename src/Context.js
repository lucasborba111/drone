import { useState, createContext } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [pontoPartida, setPontoPartida] = useState([51.505, -0.09]);
  const [pontoChegada, setPontoChegada] = useState([]);

  const [pLat, setPLat] = useState("");
  const [cLat, setCLat] = useState("");
  const [pLng, setPLng] = useState("");
  const [cLng, setCLng] = useState("");

  function limpaCoordenadas() {
    setCLatLng("", "");
    setPLatLng("", "");
  }

  function setPLatLng([lat, lng]) {
    setPLat(lat);
    setPLng(lng);
  }

  function setCLatLng([lat, lng]) {
    setCLat(lat);
    setCLng(lng);
  }

  return (
    <Context.Provider
      value={{
        pontoPartida,
        setPontoPartida,
        pontoChegada,
        setPontoChegada,
        pLat,
        setPLat,
        cLat,
        setCLat,
        pLng,
        setPLng,
        cLng,
        setCLng,
        limpaCoordenadas,
        setPLatLng,
        setCLatLng,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
