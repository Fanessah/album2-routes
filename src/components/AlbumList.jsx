import { useEffect } from "react";

export default function  albumList(){
    const [albums,setAlbums] = useState()
    useEffect(() => {
        fetch('')
        .then(response => response.json())
        .then(setAlbums)
        .catch(alert)
    },[] )
    return (
        <main className="album-list>"
        {!albums
        ? <h2> Loading...</h2>
    : albums.map(thisAlbum => (
        <AlbumCard
        key={this.album.albumId}
        thisAlbum={thisAlbum} />
    )
        )}
    )
    })
    <main/>
}

//creating a state varibale for the album list, use effct going to the api and getting album list ? when we dont have the almub list we loop thru bwhen we do present vthe list 