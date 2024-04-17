import { Routes, Route } from "react-router-dom";
import Home from "D:/Coding/React/prestige-garage/src/data/pages/home";
import Ferrari from "D:/Coding/React/prestige-garage/src/data/pages/cars/ferrari";
import Porsche from "D:/Coding/React/prestige-garage/src/data/pages/cars/porsche";
import Lamborghini from "D:/Coding/React/prestige-garage/src/data/pages/cars/lamborghini";
import Mercedes from "D:/Coding/React/prestige-garage/src/data/pages/cars/mercedes";
import Gtr from "D:/Coding/React/prestige-garage/src/data/pages/cars/gtr";
import Mclaren from "D:/Coding/React/prestige-garage/src/data/pages/cars/mclaren";
import Toyota from "D:/Coding/React/prestige-garage/src/data/pages/cars/toyota";
import Bmw from "D:/Coding/React/prestige-garage/src/data/pages/cars/bmw";
import Audi from "D:/Coding/React/prestige-garage/src/data/pages/cars/audi";
import Corvette from "D:/Coding/React/prestige-garage/src/data/pages/cars/corvette";
import Bugatti from "D:/Coding/React/prestige-garage/src/data/pages/cars/bugatti";
import Koenigsegg from "D:/Coding/React/prestige-garage/src/data/pages/cars/koenigsegg";
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
      <Route path="/bmw" element={<Bmw />} />
      <Route path="/about" element={<About />} />
      <Route path="detalhes/:codigo" element={<Details />} />
      <Route path="*" element={<h1> 404 - Página Não Encontrada!</h1>} />
    </Routes>
  );
}