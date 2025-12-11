import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

export default function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/movies")
            .then(res => {
                //console.log(res);
                setMovies(res.data)
            }).catch(err => {
                console.log(err.message);
            })
    }, []);

    return (
        <>
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">Lista Film</h1>
                    <p className="col-md-8 fs-4">
                        Using a series of utilities, you can create this jumbotron, just
                        like the one in previous versions of Bootstrap. Check out the
                        examples below for how you can remix and restyle it to your liking.
                    </p>
                </div>
            </div>


            <div>
                <div className="grid">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </>
    );
}
