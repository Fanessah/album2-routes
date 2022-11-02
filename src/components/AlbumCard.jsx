export default function AlbumCard() {
    return (
        <div className="album-card">
            <h3 className="album-list"> {thisAlbum.title}</h3>
            <p> {thisAlbum.artist},{thisAlbum.year}</p>

            
        </div>
    )

}