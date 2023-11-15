import RotaDrone from "./RotaDrone";
import { Context } from "../../Context";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { useContext } from "react";

export default function MapaDrone() {
  const { pontoPartida, pontoChegada } = useContext(Context);
  const clackLineOptions = { color: "black" };

  return (
    <MapContainer
      id="map"
      center={pontoPartida || [51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <RotaDrone />
      {pontoPartida?.length === 2 ? (
        <Marker position={pontoPartida}>
          <Popup>Ponto de partida</Popup>
        </Marker>
      ) : (
        <></>
      )}
      {pontoChegada?.length === 2 ? (
        <Marker position={pontoChegada}>
          <Popup>Ponto de chegada</Popup>
        </Marker>
      ) : (
        <></>
      )}
      {pontoPartida?.length && pontoChegada?.length ? (
        <Polyline
          pathOptions={clackLineOptions}
          positions={[pontoPartida, pontoChegada]}
        />
      ) : (
        <></>
      )}
    </MapContainer>
  );
}
