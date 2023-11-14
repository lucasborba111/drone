import LoadingButton from "@mui/lab/LoadingButton";
import { TextField, FormControl } from "@mui/material";
import customTheme from "./customTheme";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

export default function FormPartidaChegada({ calcularPartida, loading }) {
  const outerTheme = useTheme();

  return (
    <form className="formulario" onSubmit={calcularPartida}>
      <h3>Calcular rota de entrega</h3>
      <div id="form-content">
        <ThemeProvider theme={customTheme(outerTheme)}>
          <FormControl required>
            <TextField
              label="Latitude partida"
              id="pLat"
              type="number"
              inputProps={{ step: "any" }}
            />
          </FormControl>

          <FormControl required>
            <TextField
              label="Longitude partida"
              id="pLng"
              type="number"
              inputProps={{ step: "any" }}
            />
          </FormControl>
          <FormControl required>
            <TextField
              label="Latitude chegada"
              id="pLat"
              type="number"
              inputProps={{ step: "any" }}
            />
          </FormControl>

          <FormControl required>
            <TextField
              label="Longitude chegada"
              id="pLng"
              type="number"
              inputProps={{ step: "any" }}
            />
          </FormControl>
          <FormControl required>
            <TextField label="Carga" id="carga" type="text" />
          </FormControl>
          <FormControl required>
            <TextField
              label="Peso"
              id="peso"
              type="number"
              inputProps={{ step: "any" }}
            />
          </FormControl>
        </ThemeProvider>
      </div>
      <LoadingButton
        type="submit"
        loading={loading}
        loadingIndicator="Carregando..."
        variant="contained"
        sx={{ position: "relative", marginTop: "auto", width: "80%" }}
      >
        Calcular
      </LoadingButton>
    </form>
  );
}
