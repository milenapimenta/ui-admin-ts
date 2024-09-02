import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import WGroupListPage from "../pages/WhatsApp/WhatsAppGroup/WGroupListPage";
import WNewGroupPage from "../pages/WhatsApp/WhatsAppGroup/WNewGroupPage";
import WCategoryListPage from "../pages/WhatsApp/WhatsAppCategory/WCategoryListPage";
import WNewCategoryPage from "../pages/WhatsApp/WhatsAppCategory/WNewCategoryPage";
import DCategoryListPage from "../pages/Discord/DiscordCategory/DCategoryListPage";
import DNewCategoryPage from "../pages/Discord/DiscordCategory/DNewCategoryPage";
import DGroupListPage from "../pages/Discord/DiscordGroup/DGroupListPage";
import DNewGroupPage from "../pages/Discord/DiscordGroup/DNewGroupPage";
import TGroupListPage from "../pages/Telegram/TelegramGroup/TGroupListPage";
import TNewGroupPage from "../pages/Telegram/TelegramGroup/TNewGroupPage";
import TCategoryListPage from "../pages/Telegram/TelegramCategory/TCategoryListPage";
import TNewCategoryPage from "../pages/Telegram/TelegramCategory/TNewCategoryPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="whatsapp">
          <Route index element={<WGroupListPage />} />
          <Route path="grupos" element={<WGroupListPage />} />
          <Route path="grupos/novo" element={<WNewGroupPage />} />
          <Route path="grupos/:id" element={<WNewGroupPage />} />
          <Route path="categorias" element={<WCategoryListPage />} />
          <Route path="categorias/nova" element={<WNewCategoryPage />} />
          <Route path="categorias/:id" element={<WNewCategoryPage />} />
        </Route>
        <Route path="discord">
          <Route index element={<DGroupListPage />} />
          <Route path="servidores" element={<DGroupListPage />} />
          <Route path="servidores/novo" element={<DNewGroupPage />} />
          <Route path="servidores/:id" element={<DNewGroupPage />} />
          <Route path="categorias" element={<DCategoryListPage />} />
          <Route path="categorias/nova" element={<DNewCategoryPage />} />
          <Route path="categorias/:id" element={<DNewCategoryPage />} />
        </Route>
        <Route path="telegram">
          <Route index element={<TGroupListPage />} />
          <Route path="grupos" element={<TGroupListPage />} />
          <Route path="grupos/novo" element={<TNewGroupPage />} />
          <Route path="grupos/:id" element={<TNewGroupPage />} />
          <Route path="categorias" element={<TCategoryListPage />} />
          <Route path="categorias/nova" element={<TNewCategoryPage />} />
          <Route path="categorias/:id" element={<TNewCategoryPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="cadastro" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
