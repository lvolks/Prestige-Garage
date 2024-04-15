import { Routes, Route } from "react-router-dom";
import Home from "D:/Coding/React/prestige-garage/src/data/pages/home";
import Ferrari from "D:/Coding/React/prestige-garage/src/data/pages/ferrari";
import Porsche from "D:/Coding/React/prestige-garage/src/data/pages/porsche";
import Lamborghini from "D:/Coding/React/prestige-garage/src/data/pages/lamborghini";
import Mercedes from "D:/Coding/React/prestige-garage/src/data/pages/mercedes";
import Gtr from "D:/Coding/React/prestige-garage/src/data/pages/gtr";
import Mclaren from "D:/Coding/React/prestige-garage/src/data/pages/mclaren";
import Toyota from "D:/Coding/React/prestige-garage/src/data/pages/toyota";
import Hennessey from "D:/Coding/React/prestige-garage/src/data/pages/hennessey";
import Audi from "D:/Coding/React/prestige-garage/src/data/pages/audi";
import Corvette from "D:/Coding/React/prestige-garage/src/data/pages/corvette";
import Bugatti from "D:/Coding/React/prestige-garage/src/data/pages/bugatti";
import Koenigsegg from "D:/Coding/React/prestige-garage/src/data/pages/koenigsegg";
import About from "D:/Coding/React/prestige-garage/src/data/pages/about";
import Details from "D:/Coding/React/prestige-garage/src/data/pages/details";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/ferrari" element={<Ferrari />} />
      <Route path="/porsche" element={<Porsche />} />
      <Route path="/lamborghini" element={<Lamborghini />} />
      <Route path="/mercedes" element={<Mercedes />} />
      <Route path="/bugatti" element={<Bugatti />} />
      <Route path="/koenigsegg" element={<Koenigsegg />} />
      <Route path="/toyota" element={<Toyota />} />
      <Route path="/mclaren" element={<Mclaren />} />
      <Route path="/audi" element={<Audi />} />
      <Route path="/gtr" element={<Gtr />} />
      <Route path="/corvette" element={<Corvette />} />
      <Route path="/hennessey" element={<Hennessey />} />
      <Route path="/about" element={<About />} />
      <Route path="detalhes/:codigo" element={<Details />} />
      <Route path="*" element={<h1> 404 - Página Não Encontrada!</h1>} />
    </Routes>
  );
}