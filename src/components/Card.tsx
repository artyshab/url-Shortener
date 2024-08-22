type CardProps = {
    heading : string;
    paragraph : string;
    className  : string;
    image : string;
}

export default function Card({heading , paragraph , className ,image } : CardProps){
    return (
        <>
        <div className={className}>
            <div className="card-text">
            <h1>{heading}</h1>
            <p>{paragraph}</p>
            </div>
            <div className="card-image">
            <img src={image} alt="Card-Image" />
            </div>
        </div>
        </>
    )
}