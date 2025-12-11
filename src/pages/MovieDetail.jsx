import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, [id]);

    if (!movie) return <p>Caricamento...</p>;

    return (
        <div className="container my-5">
            <div className="bg-white p-4 rounded shadow-sm">
                <h1 className="mb-3">{movie.title}</h1>
                <p className="lead">{movie.abstract}</p>
                <p className="text-muted">Regista: {movie.director}</p>
            </div>
        </div>
    );
}
