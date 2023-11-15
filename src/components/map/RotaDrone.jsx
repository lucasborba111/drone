import { useEffect } from "react";
import { useContext } from "react";
import { Context } from "../../Context";
import { useMap, useMapEvents } from "react-leaflet";

export default function RotaDrone() {
  const { pontoPartida, setPontoPartida, pontoChegada, setPontoChegada } =
    useContext(Context);
  const map = useMap();

  useMapEvents({
    click(e) {
      if (!pontoPartida.length) {
        return setPontoPartida(Object.values(e.latlng));
      }

      if (!pontoChegada.length) {
        return setPontoChegada(Object.values(e.latlng));
      }

      setPontoChegada([]);
      setPontoPartida([]);
      return;
    },
  });

  useEffect(() => {
    if (pontoPartida.length) {
      map.flyTo(pontoPartida, map.getZoom());
    }
  }, [pontoPartida]);
  return null;
}
