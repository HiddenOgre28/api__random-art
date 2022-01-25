function Content({ image, title, artist, loading }) {
    return(
        <div className="Content">
            {loading ? null : <h2>{title}</h2>}
            {loading ? null : <p>{artist}</p>}
            {loading ? "Loading..." : <img src={image} alt=""></img>}
        </div>
    );
}

export default Content;