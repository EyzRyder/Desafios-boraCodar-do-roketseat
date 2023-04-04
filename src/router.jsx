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
import { Clima } from "./pages/desafios/Clima";
import { ConversorDeMoedas } from "./pages/desafios/ConversorDeMoedas";
import { Dashboard } from "./pages/desafios/Dashboard";
import { Login } from "./pages/desafios/Login";
import { PlayerDeMusic } from "./pages/desafios/PlayerDeMusic";
import { ProductCard } from "./pages/desafios/ProductCard";
import { Home } from "./pages/Home";
import { Kanban } from "phosphor-react";
import { FormsCartao } from "./pages/desafios/FormsCartao";

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
        <Route path="9" element={<ConversorDeMoedas />} />
        <Route path="10" element={<Clima />} />
        <Route path="11" element={<Login />} />
        <Route path="12" element={<Kanban />} />
        <Route path="13" element={<FormsCartao />} />

      </Route>


    </Route>
  )
);