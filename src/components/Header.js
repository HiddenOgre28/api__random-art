function Header({ getArtwork }) {
  return (
    <div className="Header">
      <h1 className="Header__title">Art Fetcher</h1>
      <p className="Header__description">
        This app uses the <a href="https://api.artic.edu/docs/" target='blank_'>Art Intitute of Chicago's API</a> to get a random picture in their catalogue.
        Press "Get Artwork" to see some art!
      </p>
      <button onClick={getArtwork} className="Header__btn">Get Artwork</button>
    </div>
  );
}

export default Header;
