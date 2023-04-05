import { useContext } from "react";
import Router from "./Router";
import { GlobalStyle } from "./styles/Global.styled";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/Theme";
import { ThemeContext } from "./context/ThemeContext";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";

function App() {
  const { theme } = useContext(ThemeContext);

  const mode = theme === "light" ? lightTheme : darkTheme;
  return (
    <>
      <ThemeProvider theme={mode}>
        <GlobalStyle />
        <Router />
        <MusicPlayer />
      </ThemeProvider>
    </>
  );
}

export default App;
