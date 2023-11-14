import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";

export default function MapaDrone({ pLat, pLng }) {
  const [pontoPartida, setPontoPartida] = useState([]);
  const [pontoChegada, setPontoChega] = useState([]);

  const RotaDrone = function () {
    const map = useMap();

    useMapEvents({
      click(e) {
        debugger;
        if (!pontoPartida.length) {
          return setPontoPartida(Object.values(e.latlng));
        }
        if (!pontoChegada.length) {
          return setPontoChega(Object.values(e.latlng));
        }
        setPontoChega([]);
        setPontoPartida([]);
        return;
      },
    });

    useEffect(() => {
      map.flyTo([pLat, pLng], map.getZoom());
    }, [pLat, pLng]);
    return null;
  };

  return (
    <MapContainer
      id="map"
      center={[pLat, pLng]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RotaDrone />
      {pontoPartida.length ? (
        <Marker position={pontoPartida}>
          <Popup>Ponto de partida</Popup>
        </Marker>
      ) : (
        <></>
      )}
      {pontoChegada.length ? (
        <Marker position={pontoChegada}>
          <Popup>Ponto de partida</Popup>
        </Marker>
      ) : (
        <></>
      )}
    </MapContainer>
  );
}
