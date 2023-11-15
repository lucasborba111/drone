import LoadingButton from "@mui/lab/LoadingButton";
import { TextField, FormControl } from "@mui/material";
import customTheme from "./customTheme";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { calculaRota } from "../../calculaRota";
import { Context } from "../../Context";
import { useContext } from "react";

export default function FormPartidaChegada() {
  const outerTheme = useTheme();
  const {
    setPontoPartida,
    setPontoChegada,
    cLng,
    pLng,
    cLat,
    pLat,
    setPLat,
    setPLng,
    setCLat,
    setCLng,
    loading,
    setLoading,
  } = useContext(Context);

  return (
    <form
      className="formulario"
      onSubmit={(e) =>
        calculaRota(e, setPontoPartida, setPontoChegada, setLoading)
      }
    >
      <h3>Calcular rota de entrega</h3>

      <div id="form-content">
        <ThemeProvider theme={customTheme(outerTheme)}>
          <FormControl required>
            <TextField
              label="Latitude partida"
              id="pLat"
              type="number"
              value={pLat || ""}
              autoFocus={true}
              onChange={(e) => setPLat(e.target.value)}
              inputProps={{ step: "any" }}
            />
          </FormControl>

          <FormControl required>
            <TextField
              label="Longitude partida"
              id="pLng"
              type="number"
              value={pLng || ""}
              onChange={(e) => setPLng(e.target.value)}
              autoFocus={true}
              inputProps={{ step: "any" }}
            />
          </FormControl>

          <FormControl required>
            <TextField
              label="Latitude chegada"
              id="cLat"
              type="number"
              value={cLat || ""}
              inputProps={{ step: "any" }}
              onChange={(e) => setCLat(e.target.value)}
              autoFocus={true}
            />
          </FormControl>

          <FormControl required>
            <TextField
              label="Longitude chegada"
              id="cLng"
              type="number"
              value={cLng || ""}
              onChange={(e) => setCLng(e.target.value)}
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
