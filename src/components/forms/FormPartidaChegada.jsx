import LoadingButton from "@mui/lab/LoadingButton";
import { TextField, FormControl } from "@mui/material";
import customTheme from "./customTheme";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { getDtoRota } from "../../calculaRota";
import { Context } from "../../Context";
import { useContext } from "react";

async function calcularPartida(e, setPontoPartida, setPontoChegada) {
  e.preventDefault();

  const dto = getDtoRota(e);

  setPontoPartida([dto.pLat, dto.pLng]);
  setPontoChegada([dto.cLat, dto.cLng]);
}

export default function FormPartidaChegada() {
  const outerTheme = useTheme();
  const { setPontoPartida, pontoPartida, setPontoChegada, pontoChegada } =
    useContext(Context);

  return (
    <form
      className="formulario"
      onSubmit={(e) => calcularPartida(e, setPontoPartida, setPontoChegada)}
    >
      <h3>Calcular rota de entrega</h3>

      <div id="form-content">
        <ThemeProvider theme={customTheme(outerTheme)}>
          <FormControl required>
            <TextField
              label="Latitude partida"
              id="pLat"
              type="number"
              value={pontoPartida[0]}
              inputProps={{ step: "any" }}
            />
          </FormControl>

          <FormControl required>
            <TextField
              label="Longitude partida"
              id="pLng"
              type="number"
              value={pontoPartida[1]}
              inputProps={{ step: "any" }}
            />
          </FormControl>

          <FormControl required>
            <TextField
              label="Latitude chegada"
              id="cLat"
              type="number"
              value={pontoChegada[0]}
              inputProps={{ step: "any" }}
            />
          </FormControl>

          <FormControl required>
            <TextField
              label="Longitude chegada"
              id="cLng"
              type="number"
              value={pontoChegada[1]}
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
        loading={false}
        loadingIndicator="Carregando..."
        variant="contained"
        sx={{ position: "relative", marginTop: "auto", width: "80%" }}
      >
        Calcular
      </LoadingButton>
    </form>
  );
}
