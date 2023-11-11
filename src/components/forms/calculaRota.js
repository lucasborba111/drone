export function calcularRota(event) {
  event.preventDefault();

  const inputs = Array.from(event.target);
  const dto = {};

  inputs.map(({ id, value, type } = {}) => {
    if (!id) return;
    if (type === "number") value = parseInt(value);

    dto[id] = value;
  });
}
