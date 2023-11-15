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

  setPontoPartida([dto.pLat, dto.pLng]);
  setPontoChegada([dto.cLat, dto.cLng]);
}

export { calculaRota };
