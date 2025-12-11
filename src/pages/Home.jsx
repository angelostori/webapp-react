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


            <div className="container my-5">
                <div className="row g-4">
                    {movies.map(movie => (
                        <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
