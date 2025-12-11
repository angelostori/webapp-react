import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/api/movies")
            .then(res => res.json())
            .then(data => setMovies(data));
    }, []);

    return (
        <div>
            <h1>Lista Film</h1>
            <div className="grid">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}
