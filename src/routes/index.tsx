import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import GroupListPage from "../pages/WhatsApp/WhatsAppGroup/GroupListPage";
import NewGroupPage from "../pages/WhatsApp/WhatsAppGroup/NewGroupPage";
import CategoryListPage from "../pages/WhatsApp/WhatsAppCategory/CategoryListPage";
import NewCategoryPage from "../pages/WhatsApp/WhatsAppCategory/NewCategoryPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        {/* Rotas para WhatsApp */}
        <Route path="whatsapp">
          <Route index element={<GroupListPage />} />
          <Route path="grupos" element={<GroupListPage />} />
          <Route path="grupos/novo" element={<NewGroupPage />} />
          <Route path="grupos/:id" element={<NewGroupPage />} />
          <Route path="categorias" element={<CategoryListPage />} />
          <Route path="categorias/nova" element={<NewCategoryPage />} />
          <Route path="categorias/:id" element={<NewCategoryPage />} />
        </Route>

        {/* Rotas para outras seções, como Discord, Telegram, etc., se necessário */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
