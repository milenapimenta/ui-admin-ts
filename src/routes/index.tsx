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
import UsersListPage from "../pages/Users/UsersListPage";
import PrivateRoute from "../components/PrivateRoute";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" />
        <Route path="whatsapp">
          <Route index element={<WGroupListPage />} />
          <Route path="grupos" element={<WGroupListPage />} />
          <Route path="grupos/novo" element={<PrivateRoute element={<WNewGroupPage />} />} />
          <Route path="grupos/:id" element={<PrivateRoute element={<WNewGroupPage />} />} />
          <Route path="categorias" element={<WCategoryListPage />} />
          <Route path="categorias/nova" element={<PrivateRoute element={<WNewCategoryPage />} />} />
          <Route path="categorias/:id" element={<PrivateRoute element={<WNewCategoryPage />} />} />
        </Route>
        <Route path="discord">
          <Route index element={<DGroupListPage />} />
          <Route path="servidores" element={<DGroupListPage />} />
          <Route path="servidores/novo" element={<PrivateRoute element={<DNewGroupPage />} />} />
          <Route path="servidores/:id" element={<PrivateRoute element={<DNewGroupPage />} />} />
          <Route path="categorias" element={<DCategoryListPage />} />
          <Route path="categorias/nova" element={<PrivateRoute element={<DNewCategoryPage />} />} />
          <Route path="categorias/:id" element={<PrivateRoute element={<DNewCategoryPage />} />} />
        </Route>
        <Route path="telegram">
          <Route index element={<TGroupListPage />} />
          <Route path="grupos" element={<TGroupListPage />} />
          <Route path="grupos/novo" element={<PrivateRoute element={<TNewGroupPage />} />} />
          <Route path="grupos/:id" element={<PrivateRoute element={<TNewGroupPage />} />} />
          <Route path="categorias" element={<TCategoryListPage />} />
          <Route path="categorias/nova" element={<PrivateRoute element={<TNewCategoryPage />} />} />
          <Route path="categorias/:id" element={<PrivateRoute element={<TNewCategoryPage />} />} />
        </Route>
        <Route path="usuarios" element={<PrivateRoute element={<UsersListPage />} />} />
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
