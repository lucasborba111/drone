import LoadingButton from "@mui/lab/LoadingButton";
import { TextField, FormControl } from "@mui/material";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";

const customTheme = (outerTheme) =>
  createTheme({
    palette: {
      mode: outerTheme.palette.mode,
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            "--TextField-brandBorderColor": "#E0E3E7",
            "--TextField-brandBorderHoverColor": "#B2BAC2",
            "--TextField-brandBorderFocusedColor": "#6F7E8C",
            "& label.Mui-focused": {
              color: "var(--TextField-brandBorderFocusedColor)",
            },
            "& label": {
              color: "white",
            },
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: "var(--TextField-brandBorderColor)",
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderHoverColor)",
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: "var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&:before, &:after": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
      MuiInput: {
        styleOverrides: {
          root: {
            "&:before": {
              borderBottom: "2px solid var(--TextField-brandBorderColor)",
              color: "white var(#ffffff)",
            },
            "&:hover:not(.Mui-disabled, .Mui-error):before": {
              borderBottom: "2px solid var(--TextField-brandBorderHoverColor)",
            },
            "&.Mui-focused:after": {
              borderBottom:
                "2px solid var(--TextField-brandBorderFocusedColor)",
            },
          },
        },
      },
    },
  });

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
        >
          Calcular
        </LoadingButton>
      </ThemeProvider>
    </form>
  );
}
