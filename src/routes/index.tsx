import { Route, Routes } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import HomePage from "../pages/HomePage";
import UserListPage from "../pages/User/UserListPage";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="usuarios"element={<UserListPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default AppRouter;
