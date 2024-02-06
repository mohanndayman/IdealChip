import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
