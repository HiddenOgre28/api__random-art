function Content({ image, title, artist, loading }) {
    return(
        <div className="Content">
            {loading ? null : <h2 className="Content__title">{title}</h2>}
            {loading ? null : <p className="Content__artist">{artist}</p>}
            {loading ? <div className="loading">Loading...</div> : <a href={image} target="blank_"><img className="Content__img" src={image} alt=""></img></a>}
        </div>
    );
}

export default Content;