import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import Test from "./components/Home/Test";

function App() {
  return (
    <>
      {" "}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
