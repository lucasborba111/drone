export function getDtoRota(event) {
  const inputs = Array.from(event.target);
  const dto = {};

  inputs.map(({ id, value, type } = {}) => {
    if (!id) return;
    if (type === "number") value = parseFloat(value);

    dto[id] = value;
  });

  return dto;
}
