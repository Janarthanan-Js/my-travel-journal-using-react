
export function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img src={props.img.src} alt={props.img.alt} className="main-image" />
            </div>
            <div className="main-content1">
                <img src="/images/marker.png" alt="marker icon" className="marker-image" />
                <span>{props.country}</span>
                <a href={props.googleMapsLink} target="_blank" className="view-google">View on Google Maps</a>
                <h2 className="mount">{props.title}</h2>
                <p className="date">{props.date}</p>
                <p>
                    {props.text}
                </p>
            </div>
        </article>
    )
}
