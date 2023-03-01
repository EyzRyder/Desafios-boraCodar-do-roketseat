import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { BlogCarnaval } from "./pages/desafios/BlogCarnaval";
import { ButaoCursores } from "./pages/desafios/ButaoCursores";
import { Calculadora } from "./pages/desafios/Calculadora";
import { CartãoDeViagem } from "./pages/desafios/CartãoDeViagem";
import { Chat } from "./pages/desafios/Chat";
import { Dashboard } from "./pages/desafios/Dashboard";
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
        <Route path="3" element={<ButaoCursores />} />
        <Route path="4" element={<Chat />} />
        <Route path="5" element={<Calculadora />} />
        <Route path="6" element={<CartãoDeViagem />} />
        <Route path="7" element={<BlogCarnaval />} />
        <Route path="8" element={<Dashboard />} />

      </Route>


    </Route>
  )
);