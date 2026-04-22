import Star from "./Star.jsx";

function Stars({count = 0}) {

    return (
        <ul className="card-body-stars u-clearfix">
            {Array.from({ length: count }, (_, i) => <Star key={i} />)}
        </ul>
    )
}

export default Stars;