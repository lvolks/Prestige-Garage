import { Routes, Route } from "react-router-dom";
import Home from "D:/Coding/React/prestige-garage/src/data/pages/home";
import Ferrari from "D:/Coding/React/prestige-garage/src/data/pages/cars/Ferrari/ferrari";
import Porsche from "D:/Coding/React/prestige-garage/src/data/pages/cars/Porsche/porsche";
import Lamborghini from "D:/Coding/React/prestige-garage/src/data/pages/cars/Lamborghini/lamborghini";
import Mercedes from "D:/Coding/React/prestige-garage/src/data/pages/cars/Mercedes/mercedes";
import Gtr from "D:/Coding/React/prestige-garage/src/data/pages/cars/Gtr/gtr";
import Mclaren from "D:/Coding/React/prestige-garage/src/data/pages/cars/Mclaren/mclaren";
import Toyota from "D:/Coding/React/prestige-garage/src/data/pages/cars/Toyota/toyota";
import Bmw from "D:/Coding/React/prestige-garage/src/data/pages/cars/Bmw/bmw";

import Audi from "D:/Coding/React/prestige-garage/src/data/pages/cars/Audi/audi";
import Rs7 from "D:/Coding/React/prestige-garage/src/data/pages/cars/Audi/Variants/rs7";

import Corvette from "D:/Coding/React/prestige-garage/src/data/pages/cars/Corvette/corvette";
import Bugatti from "D:/Coding/React/prestige-garage/src/data/pages/cars/Bugatti/bugatti";
import Koenigsegg from "D:/Coding/React/prestige-garage/src/data/pages/cars/Koenigsegg/koenigsegg";
import About from "D:/Coding/React/prestige-garage/src/data/pages/about";
import Details from "D:/Coding/React/prestige-garage/src/data/pages/details";

export default function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="/ferrari" element={<Ferrari />} />
      <Route path="/porsche" element={<Porsche />} />
      <Route path="/lamborghini" element={<Lamborghini />} />
      <Route path="/mercedes" element={<Mercedes />} />
      <Route path="/bugatti" element={<Bugatti />} />
      <Route path="/koenigsegg" element={<Koenigsegg />} />
      <Route path="/toyota" element={<Toyota />} />
      <Route path="/mclaren" element={<Mclaren />} />

      <Route path="/audi" element={<Audi />} />
      <Route path="/audi/rs7" element={<Rs7 />} />

      <Route path="/gtr" element={<Gtr />} />
      <Route path="/corvette" element={<Corvette />} />
      <Route path="/bmw" element={<Bmw />} />
      <Route path="/details" element={<Details />} />
      <Route path="*" element={<h1> 404 - Página Não Encontrada!</h1>} />
    </Routes>
  );
}