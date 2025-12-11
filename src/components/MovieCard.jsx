import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <div className="card">
            <h3>{movie.title}</h3>
            <Link to={`/movies/${movie.id}`}>Dettagli</Link>
        </div>
    );
}
