import RotaDrone from "./RotaDrone";
import { Context } from "../../Context";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useContext } from "react";

export default function MapaDrone() {
  const { pontoPartida, pontoChegada } = useContext(Context);

  return (
    <MapContainer
      id="map"
      center={pontoPartida}
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
