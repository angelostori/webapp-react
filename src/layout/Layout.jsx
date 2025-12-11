import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div className="d-flex flex-column min-vh-100">

            <header className="bg-light shadow-sm py-2">
                <nav className="container d-flex justify-content-start align-items-center">
                    <Link to="/" className="text-dark fs-4">
                        <i className="bi bi-house-fill"></i>
                    </Link>
                </nav>
            </header>

            <main className="flex-fill">
                <Outlet />
                {/*Visualizzazione pagine*/}
            </main>

            <footer className="bg-light text-center py-3 border-top mt-auto">
                <div className="container text-center">
                    <ul className="list-unstyled d-flex justify-content-center gap-4 mb-3">
                        <li><a href="#" className="text-decoration-none text-dark">About us</a></li>
                        <li><a href="#" className="text-decoration-none text-dark">Contacts</a></li>
                        <li><a href="#" className="text-decoration-none text-dark">Terms</a></li>
                        <li><a href="#" className="text-decoration-none text-dark">Privacy</a></li>
                    </ul>
                    <p className="text-muted m-0">© 2025 My Movies App</p>
                </div>
            </footer>
        </div>
    )
}