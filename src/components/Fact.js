// this is going to be a single movie

export default function Movie({imgUrl, id}) {
    return (
        <div className="Fact" id={id}>
            <img src={imgUrl} alt="poke card"/>
        </div>
    )
}