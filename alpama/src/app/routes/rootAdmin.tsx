import {Outlet} from "react-router-dom";
import Header from "../pages/admin/layouts/Header.tsx";
import {Sidebar} from "lucide-react";

export default function RootPublic() {
  return (
    <>
      <Sidebar/>
      <div className="main-admin">
        <Header/>
        <Outlet/>
      </div>
    </>
  );
}
