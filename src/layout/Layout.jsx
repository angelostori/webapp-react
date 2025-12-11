import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <header>
                <nav>
                    <Link to="/"><i className="bi bi-house-fill"></i></Link>
                </nav>
            </header>

            <main>
                <Outlet />
                {/*Visualizzazione pagine*/}
            </main>

            <footer>
                <ul>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                </ul>
                <p>© 2025 My Movies App</p>
            </footer>
        </div>
    )
}