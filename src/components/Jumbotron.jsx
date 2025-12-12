export default function Jumbotron({ pageName, text }) {





    return (
        <div className="p-2 mb-4 bg-light">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">{pageName}</h1>
                <p className="col-md-8 fs-4">
                    {text}
                </p>
            </div>
        </div>
    )
}