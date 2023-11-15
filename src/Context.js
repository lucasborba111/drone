import { useState, createContext } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [pontoPartida, setPontoPartida] = useState([51.505, -0.09]);
  const [pontoChegada, setPontoChegada] = useState([]);

  return (
    <Context.Provider
      value={{ pontoPartida, setPontoPartida, pontoChegada, setPontoChegada }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
