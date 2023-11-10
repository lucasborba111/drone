import { Button, Input } from "@mui/material";
import { calcularRota } from "./calculaRota";
import FormControl from "@mui/material/FormControl";

export default function FormPartida() {
  return (
    <form className="Formulario" onSubmit={calcularRota}>
      <FormControl variant="standart" required>
        <Input
          label="Latitude partida"
          id="latitudePartida"
          aria-describedby="latitudePartida"
          type="number"
        />
      </FormControl>

      <FormControl variant="standart" required>
        <Input
          label="Longitude partida"
          id="longitudePartida"
          aria-describedby="longitudePartida"
          type="number"
        />
      </FormControl>

      <FormControl variant="standart" required>
        <Input
          label="Origem"
          id="origem"
          aria-describedby="origem"
          type="text"
        />
      </FormControl>

      <FormControl variant="standart" required>
        <Input
          label="Destino"
          id="destino"
          aria-describedby="destino"
          type="text"
        />
      </FormControl>

      <FormControl variant="standart" required>
        <Input label="Carga" id="carga" aria-describedby="carga" type="text" />
      </FormControl>
      <Button type="submit">Formar rota</Button>
    </form>
  );
}
