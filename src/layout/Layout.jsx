import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="flex-fill bg-secondary">
                <Outlet />
                {/*Visualizzazione pagine*/}
            </main>
            <Footer />
        </div>
    )
}