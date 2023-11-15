import LoadingButton from "@mui/lab/LoadingButton";
import { TextField, FormControl } from "@mui/material";
import customTheme from "./customTheme";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { calculaRota } from "../../calculaRota";
import { Context } from "../../Context";
import { useContext } from "react";

export default function FormPartidaChegada() {
  const outerTheme = useTheme();
  const { setPontoPartida, pontoPartida, setPontoChegada, pontoChegada } =
    useContext(Context);

  return (
    <form
      className="formulario"
      onSubmit={(e) => calculaRota(e, setPontoPartida, setPontoChegada)}
    >
      <h3>Calcular rota de entrega</h3>

      <div id="form-content">
        <ThemeProvider theme={customTheme(outerTheme)}>
          <FormControl required>
            <TextField
              label="Latitude partida"
              id="pLat"
              type="number"
              value={pontoPartida[0] || ""}
              autoFocus={true}
              onChange={(e) =>
                setPontoPartida([e.target.value, pontoPartida[1]])
              }
              inputProps={{ step: "any" }}
            />
          </FormControl>

          <FormControl required>
            <TextField
              label="Longitude partida"
              id="pLng"
              type="number"
              value={pontoPartida[1] || ""}
              onChange={(e) =>
                setPontoPartida([pontoPartida[0], e.target.value])
              }
              autoFocus={true}
              inputProps={{ step: "any" }}
            />
          </FormControl>

          <FormControl required>
            <TextField
              label="Latitude chegada"
              id="cLat"
              type="number"
              value={pontoChegada[0] || ""}
              inputProps={{ step: "any" }}
              onChange={(e) =>
                setPontoChegada([e.target.value, pontoChegada[1]])
              }
              autoFocus={true}
            />
          </FormControl>

          <FormControl required>
            <TextField
              label="Longitude chegada"
              id="cLng"
              type="number"
              value={pontoChegada[1] || ""}
              onChange={(e) =>
                setPontoChegada([pontoChegada[0], e.target.value])
              }
              autoFocus={true}
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
