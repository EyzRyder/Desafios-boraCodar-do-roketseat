import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { PlayerDeMusic } from "./pages/desafios/PlayerDeMusic";
import { ProductCard } from "./pages/desafios/ProductCard";
import { Home } from "./pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="desafio">
        <Route path="1" element={<PlayerDeMusic />} />
        <Route path="2" element={<ProductCard />} />
        <Route path="3" element={<Home />} />
        <Route path="4" element={<Home />} />
        <Route path="5" element={<Home />} />
        <Route path="6" element={<Home />} />

      </Route>


    </Route>
  )
);