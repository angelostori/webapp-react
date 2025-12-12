import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Jumbotron from "../components/Jumbotron";
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
            <Jumbotron pageName="Lista Film" text=" Using a series of utilities, you can create this jumbotron, just
                                                    like the one in previous versions of Bootstrap. Check out the
                                                    examples below for how you can remix and restyle it to your liking." />

            <div className="container my-5">
                <div className="row g-4">
                    {movies.map(movie => (
                        <div key={movie.id} className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
