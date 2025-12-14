export default function Form() {



    return (
        <section className="mt-5">
            <div>
                <h3>What do you think?🤔</h3>

                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            id="name"
                            aria-describedby="nameHelper"
                            placeholder="John Doe"
                            required
                        />
                        <small id="nameHelper" className="form-text text-muted">Type your name here</small>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="vote" className="form-label">Vote</label>
                        <select
                            className="form-select form-select-lg"
                            name="vote"
                            id="vote"
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
                        <label htmlFor="review" className="form-label">Review</label>
                        <textarea
                            className="form-control"
                            name="review"
                            id="review"
                            rows="3"
                            placeholder="Leave your opinion here..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

            </div>
        </section>
    )
}