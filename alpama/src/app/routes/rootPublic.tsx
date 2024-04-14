import { Outlet } from "react-router-dom";
import Header from "../pages/public/layouts/Header.tsx";
import Footer from "../pages/public/layouts/Footer.tsx";

export default function RootPublic() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
}
