import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DotPulse } from 'ldrs/react'
import Jumbotron from "../components/Jumbotron";
import 'ldrs/react/DotPulse.css'
import ReviewList from "./ReviewList";

export default function MovieDetail() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/movies/${id}`)
            .then(res => res.json())
            .then(data => setMovie(data));
    }, [id]);

    if (!movie) return <DotPulse size="43" speed="1.3" color="black" />;

    return (
        <>
            <Jumbotron pageName={"Dettagli"} text={"Eccoti la locandina del film, se l'hai già visto lascia una recensione😊"} />

            <div className="container my-5">
                <div className="bg-white p-4 rounded shadow-sm row">

                    <div className="col-6">
                        <img src={`http://localhost:3000/movies_cover/${movie.image}`}
                            alt={movie.title}
                            className="img-fluid rounded mb-4 shadow-sm"
                            style={{ width: "100%", height: "auto" }} />
                    </div>
                    <div className="col-6">
                        <h1 className="mb-3">{movie.title}</h1>
                        <p className="text-muted">({movie.genre})</p>
                        <p className="lead">{movie.abstract}</p>
                        <p className="text-muted">{movie.director} - {movie.release_year}</p>
                    </div>

                    <ReviewList reviews={movie.reviews} />
                </div>
            </div>
        </>
    );
}
