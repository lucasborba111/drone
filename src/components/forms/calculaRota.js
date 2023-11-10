export function calcularRota(event) {
  const inputs = Array.from(event.target);
  const dto = {};

  inputs.forEach((inputDom) => {
    if (inputDom.type === "number") {
      inputDom.value = parseInt(inputDom.value);
    }

    dto[inputDom.id] = inputDom.value;
  });

  debugger;
}
