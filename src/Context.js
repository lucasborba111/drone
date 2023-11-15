import { useState, createContext } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [loading, setLoading] = useState(false);
  const [pontoPartida, setPontoPartida] = useState(null);
  const [pontoChegada, setPontoChegada] = useState(null);

  const [pLat, setPLat] = useState("");
  const [cLat, setCLat] = useState("");
  const [pLng, setPLng] = useState("");
  const [cLng, setCLng] = useState("");

  function limpaCoordenadas() {
    setCLatLng("", "");
    setPLatLng("", "");

    setPontoChegada(null);
    setPontoPartida(null);
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
        loading,
        setLoading,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
