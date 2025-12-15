import getStarRating from "./GetStarRating";


export default function ReviewList({ reviews }) {

    return (
        <div className="col-12">
            <h3 className="mb-4">Reviews</h3>

            {reviews?.map((review, index) =>
                <div key={index} className="mb-4 pb-3 border-bottom">

                    <div className="d-flex justify-content-between">
                        <strong>{review.name}</strong>
                        <p className="text-muted">{review.created_at}</p>
                    </div>

                    <p className="mb-1">Vote: <strong>{getStarRating(review.vote)}</strong></p>

                    <p className="text-muted mb-0">{review.text}</p>

                </div>
            )}
        </div>
    )
}