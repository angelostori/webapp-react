import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            <Jumbotron pageName="Dashboard" text=" Using a series of utilities, you can create this jumbotron, just
                                                    like the one in previous versions of Bootstrap. Check out the
                                                    examples below for how you can remix and restyle it to your liking." />

            <div className="container my-5">

                <div className="table-responsive">
                    <table className="table table-striped table-hover align-middle">
                        <thead className="table-light">
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Director</th>
                                <th>Genre</th>
                                <th>Year</th>
                                <th className="text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {movies.map(movie => (
                                <tr key={movie.id}>
                                    <td><img src={`http://localhost:3000/movies_cover/${movie.image}`} alt={movie.title} width={60} /></td>
                                    <td>{movie.title}</td>
                                    <td>{movie.director}</td>
                                    <td>{movie.genre}</td>
                                    <td>{movie.release_year}</td>

                                    <td className="text-center">
                                        {/* VIEW */}
                                        <Link
                                            to={`/movies/${movie.id}`}
                                            className="badge bg-primary me-2"
                                            title="View"
                                        >
                                            <i className="bi bi-eye-fill"></i>
                                        </Link>

                                        {/* EDIT */}
                                        <Link
                                            to={`/admin/movies/${movie.id}/edit`}
                                            className="badge bg-warning text-dark me-2"
                                            title="Edit"
                                        >
                                            <i className="bi bi-pencil-fill"></i>
                                        </Link>

                                        {/* DELETE */}
                                        <button
                                            type="button"
                                            className="badge bg-danger border-0"
                                            title="Delete"
                                        >
                                            <i className="bi bi-trash-fill"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}
