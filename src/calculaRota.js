function getDtoRota(e) {
  const inputs = Array.from(e.target);
  const dto = {};

  inputs.map(({ id, value, type } = {}) => {
    if (!id) return;
    if (type === "number") value = parseFloat(value);

    dto[id] = value;
  });

  return dto;
}

async function calculaRota(e, setPontoPartida, setPontoChegada) {
  e.preventDefault();

  const dto = getDtoRota(e);

  if (dto.pLat && dto.pLng) setPontoPartida([dto.pLat, dto.pLng]);
  if (dto.cLat && dto.cLng) setPontoChegada([dto.cLat, dto.cLng]);
}

export { calculaRota };
