import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/movies")
            .then(res => {
                console.log(res);
                setMovies(res.data)
            })
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
