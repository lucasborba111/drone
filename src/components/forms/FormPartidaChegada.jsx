import LoadingButton from "@mui/lab/LoadingButton";
import { TextField, FormControl } from "@mui/material";
import customTheme from "./customTheme";
import { ThemeProvider } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";

export default function FormPartidaChegada({ calcularPartida, loading }) {
  const outerTheme = useTheme();
  return (
    <form className="formulario" onSubmit={calcularPartida}>
      <h3>Calcuar rota de entrega</h3>
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

        <FormControl required error={false}>
          <TextField label="Origem" id="origem" type="text" />
        </FormControl>

        <FormControl required error={false}>
          <TextField label="Destino" id="destino" type="text" />
        </FormControl>

        <FormControl required error={false}>
          <TextField label="Carga" id="carga" type="text" />
        </FormControl>
        <LoadingButton
          type="submit"
          loading={loading}
          loadingIndicator="Carregando..."
          variant="contained"
          fullWidth={true}
        >
          Calcular
        </LoadingButton>
      </ThemeProvider>
    </form>
  );
}
