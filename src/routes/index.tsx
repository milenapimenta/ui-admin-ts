import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import UserListPage from "../pages/User/UserListPage";
import NewUserPage from "../pages/User/NewUserPage";
import CategoryListPage from "../pages/Category/CategoryListPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/usuarios" index element={<UserListPage />} />
          <Route path="/usuarios/novo"element={<NewUserPage />} />
          <Route path="/categorias"element={< CategoryListPage/>} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter;
