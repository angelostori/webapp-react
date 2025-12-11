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
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.abstract}</p>
            <p>Regista: {movie.director}</p>
        </div>
    );
}
