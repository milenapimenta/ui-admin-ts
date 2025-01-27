import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import WGroupListPage from "../pages/WhatsApp/WhatsAppGroups/WGroupsListPage";
import WCreateGroupPage from "../pages/WhatsApp/WhatsAppGroups/WCreateGroupPage";
import WCategoryListPage from "../pages/WhatsApp/WhatsAppCategories/WCategoriesListPage";
import WCreateCategoryPage from "../pages/WhatsApp/WhatsAppCategories/WCreateCategoryPage";
import DCategoriesListPage from "../pages/Discord/DiscordCategories/DCategoriesListPage";
import DCreateCategoryPage from "../pages/Discord/DiscordCategories/DCreateCategoryPage";
import DGroupsListPage from "../pages/Discord/DiscordGroups/DGroupsListPage";
import DCreateGroupPage from "../pages/Discord/DiscordGroups/DCreateGroupPage";
import TGroupsListPage from "../pages/Telegram/TelegramGroups/TGroupsListPage";
import TCreateGroupPage from "../pages/Telegram/TelegramGroups/TCreateGroupPage";
import TCategoriesListPage from "../pages/Telegram/TelegramCategories/TCategoriesListPage";
import TCreateCategoryPage from "../pages/Telegram/TelegramCategories/TCreateCategoryPage";
import LoginPage from "../pages/LoginPage";
import UsersListPage from "../pages/Users/UsersListPage";
import PrivateRoute from "../components/PrivateRoute";
import CreateUserPage from "../pages/Users/CreateUserPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" />
        <Route path="whatsapp">
          <Route index element={<WGroupListPage />} />
          <Route path="grupos" element={<WGroupListPage />} />
          <Route path="grupos/novo" element={<PrivateRoute element={<WCreateGroupPage />} />} />
          <Route path="grupos/:id" element={<PrivateRoute element={<WCreateGroupPage />} />} />
          <Route path="categorias" element={<WCategoryListPage />} />
          <Route path="categorias/nova" element={<PrivateRoute element={<WCreateCategoryPage />} />} />
          <Route path="categorias/:id" element={<PrivateRoute element={<WCreateCategoryPage />} />} />
        </Route>
        <Route path="discord">
          <Route index element={<DGroupsListPage />} />
          <Route path="servidores" element={<DGroupsListPage />} />
          <Route path="servidores/novo" element={<PrivateRoute element={<DCreateGroupPage />} />} />
          <Route path="servidores/:id" element={<PrivateRoute element={<DCreateGroupPage />} />} />
          <Route path="categorias" element={<DCategoriesListPage />} />
          <Route path="categorias/nova" element={<PrivateRoute element={<DCreateCategoryPage />} />} />
          <Route path="categorias/:id" element={<PrivateRoute element={<DCreateCategoryPage />} />} />
        </Route>
        <Route path="telegram">
          <Route index element={<TGroupsListPage />} />
          <Route path="grupos" element={<TGroupsListPage />} />
          <Route path="grupos/novo" element={<PrivateRoute element={<TCreateGroupPage />} />} />
          <Route path="grupos/:id" element={<PrivateRoute element={<TCreateGroupPage />} />} />
          <Route path="categorias" element={<TCategoriesListPage />} />
          <Route path="categorias/nova" element={<PrivateRoute element={<TCreateCategoryPage />} />} />
          <Route path="categorias/:id" element={<PrivateRoute element={<TCreateCategoryPage />} />} />
        </Route>
        <Route path="usuarios">
          <Route index element={<PrivateRoute element={<UsersListPage />} />} />
          <Route path="novo" element={<PrivateRoute element={<CreateUserPage />} />} />
          <Route path=":id" element={<PrivateRoute element={<CreateUserPage />} />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
