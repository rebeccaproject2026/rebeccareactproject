import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";

const MainLayout = () => (
  <div className="pt-0">
    <MainHeader />
    <main className="">
      <Outlet />
    </main>
    <MainFooter />
  </div>
);

export default MainLayout;
