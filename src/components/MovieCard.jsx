import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>

                <Link to={`/movies/${movie.id}`} className="btn btn-primary mt-3">
                    Dettagli
                </Link>
            </div>
        </div>
    );
}
