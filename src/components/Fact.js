// this is going to be a single movie

export default function Movie({imgUrl, id, name, description}) {
    return (
        <div className="Fact" id={id}>
            <h2>{id}</h2>
            <img src={imgUrl} alt="poke card"/>
            <p>{name}: {description}</p>
        </div>
    )
}