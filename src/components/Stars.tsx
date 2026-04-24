import Star from "./Star";

interface StarsProps {
    count?: number;
}

function Stars({ count = 0 }: StarsProps) {
    return (
        <ul className="card-body-stars u-clearfix">
            {Array.from({ length: count }, (_, i) => <Star key={i} />)}
        </ul>
    );
}

export default Stars;
