import { useState } from "react";
import axios from "axios";

export default function Form({ movieId, onReviewAdded }) {
    const [name, setName] = useState("");
    const [vote, setVote] = useState(5);
    const [reviewText, setReviewText] = useState("");

    // Funzione di gestione del submit
    const handleSubmit = (e) => {
        e.preventDefault();

        // Verifica di validità
        if (!name || !reviewText) {
            alert("Please fill in all fields");
            return;
        }

        // Dati da inviare
        const formData = {
            name,
            vote,
            text: reviewText,
        };

        // POST della recensione
        axios
            .post(`http://localhost:3000/api/movies/${movieId}/reviews`, formData)
            .then(() => {
                onReviewAdded(); // Ricarica il film con la recensione aggiunta
                setName(""); // Resetta i campi
                setVote(5);
                setReviewText("");
            })
            .catch((err) => {
                console.log(err.message);
                alert("Failed to submit review");
            });
    };

    return (
        <section className="mt-5">
            <div>
                <h3>What do you think? 🤔</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            aria-describedby="nameHelper"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <small id="nameHelper" className="form-text text-muted">
                            Type your name here
                        </small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="vote" className="form-label">
                            Vote
                        </label>
                        <select
                            className="form-select form-select-lg"
                            name="vote"
                            id="vote"
                            value={vote}
                            onChange={(e) => setVote(e.target.value)}
                            required
                        >
                            <option value="5">★★★★★</option>
                            <option value="4">★★★★☆</option>
                            <option value="3">★★★☆☆</option>
                            <option value="2">★★☆☆☆</option>
                            <option value="1">★☆☆☆☆</option>
                            <option value="0">☆☆☆☆☆</option>
                        </select>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="review" className="form-label">
                            Review
                        </label>
                        <textarea
                            className="form-control"
                            name="review"
                            id="review"
                            rows="3"
                            placeholder="Leave your opinion here..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
