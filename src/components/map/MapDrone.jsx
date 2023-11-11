import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

export default function MapaDrone({ pLat, pLng }) {
  const RotaDrone = function () {
    const map = useMap();

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
      {/* <Marker position={[pLat, pLng]}>
        <Popup>Ponto de partida</Popup>
      </Marker> */}
    </MapContainer>
  );
}
