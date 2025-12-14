export default function getStarRating(vote) {
    //console.log(vote);
    let stars = []

    for (let i = 1; i <= 5; i++) {
        if (i <= vote) {
            stars.push(<i key={i} className="bi bi-star-fill text-warning"></i>);
        } else {
            stars.push(<i key={i} className="bi bi-star text-warning"></i>);
        }
    }
    return stars;
}