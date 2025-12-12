import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    return (
        <div className="card h-100 shadow-sm d-flex flex-row align-items-center p-2">
            <div className="card-image">
                <img
                    src={`http://localhost:3000/movies_cover/${movie.image}`}
                    alt={movie.title}
                    style={{
                        width: "120px",
                        height: "auto",
                        borderRadius: "8px"
                    }}
                />
            </div>
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>

                <Link to={`/movies/${movie.id}`} className="btn btn-primary mt-3">
                    Dettagli
                </Link>
            </div>
        </div>
    );
}
