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

async function calculaRota(e, setPontoPartida, setPontoChegada, setLoading) {
  e.preventDefault();

  const dto = getDtoRota(e);

  setLoading(true);
  setTimeout(() => {
    setLoading(false);
    if (dto.pLat && dto.pLng) setPontoPartida([dto.pLat, dto.pLng]);
    if (dto.cLat && dto.cLng) setPontoChegada([dto.cLat, dto.cLng]);
  }, 3000);
}

export { calculaRota };
