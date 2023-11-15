import { useEffect, useContext } from "react";
import { Context } from "../../Context";
import { useMap, useMapEvents } from "react-leaflet";

export default function RotaDrone() {
  const map = useMap();
  const {
    pontoPartida,
    setPontoPartida,
    pontoChegada,
    setPontoChegada,
    setPLatLng,
    setCLatLng,
    limpaCoordenadas,
  } = useContext(Context);

  useMapEvents({
    click(e) {
      if (!pontoPartida?.length) {
        const latlng = Object.values(e.latlng);

        setPontoPartida(latlng);
        setPLatLng(latlng);
        return;
      }

      if (!pontoChegada?.length) {
        const latlng = Object.values(e.latlng);

        setPontoChegada(latlng);
        setCLatLng(latlng);

        return;
      }

      setPontoChegada([]);
      setPontoPartida([]);
      limpaCoordenadas();
      return;
    },
  });

  function validaPontoPartida() {
    return pontoPartida && !pontoPartida.some((p) => !p);
  }

  useEffect(() => {
    if (validaPontoPartida()) {
      map.flyTo(pontoPartida, map.getZoom());
    }
  }, [pontoPartida, pontoChegada]);

  return null;
}
