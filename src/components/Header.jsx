import { Link } from "react-router-dom";
export default function Header() {


    return (
        <header className="bg-light shadow-lg py-2">
            <nav className="container d-flex justify-content-start align-items-center">
                <Link to="/" className="text-dark fs-4">
                    <i className="bi bi-house-fill"></i>
                </Link>

                <Link to="/admin" className="text-dark fs-4 ms-3">
                    <i className="bi bi-person-circle"></i>
                </Link>
            </nav>
        </header>
    )
}