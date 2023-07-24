import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import AppHeader from "./AppHeader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./Components/Create";
import Read from "./Components/Read";
import Update from "./Components/Update";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="row">
        <div className="col-12 pb-2">
          <AppHeader></AppHeader>
        </div>
        <div className="col-6 container">
          <div className="card">
            <div className="card-body">
              <BrowserRouter>
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={<Create />}></Route>
                  <Route
                    exact
                    path="/read"
                    element={<Read />}></Route>
                  <Route
                    exact
                    path="/update"
                    element={<Update />}></Route>
                </Routes>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
