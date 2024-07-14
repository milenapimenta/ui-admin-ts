import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import GroupListPage from "../pages/Group/GroupListPage";
import NewGroupPage from "../pages/Group/NewGroupPage";
import CategoryListPage from "../pages/Category/CategoryListPage";
import NewCategoryPage from "../pages/Category/NewCategoryPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/whatsapp/grupos" index element={<GroupListPage />} />
          <Route path="/whatsapp/grupos/novo" element={<NewGroupPage />} />
          <Route path="/whatsapp/grupos/:uuid" element={<NewGroupPage />}/>
          <Route path="/whatsapp/categorias" element={<CategoryListPage />} />
          <Route path="/whatsapp/categorias/novo" element={<NewCategoryPage />} />
          <Route path="/whatsapp/categorias/:uuid" element={<NewCategoryPage/>} />
          <Route path="/discord"element={< CategoryListPage/>} />
          <Route path="/discord/nova"element={<NewCategoryPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter;
