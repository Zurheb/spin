import {  Route, Routes } from "react-router-dom";
import { FooHea } from "./FooHea/FooHea";
import { MainPage } from "./MainPage/MainPage";
import { FAQ } from "./FAQ/FAQ";
import { GetiingStart } from "./GettingStart/GetiingStart";
import { MainColor } from "./MainColor/MainColor";

function App() {
  return (
    <FooHea>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/about" element={<FAQ/>}/>
        <Route path="/getting-started" element={<GetiingStart/>}/>
        <Route path="/color" element={<MainColor/>}/>
        <Route path="*" element={<MainPage/>}/>
      </Routes>
    </FooHea>
  );
}

export default App;
