import { useEffect,useState } from "react";
import AlbumCard from '../components/AlbumCard'

export default function  AlbumList(){
    const [albums,setAlbums] = useState()
    useEffect(() => {
        fetch('https:albums-api-fh.web.app/albums')
        .then(response => response.json())
        .then(setAlbums)
        .catch(alert)
    },[])
    return (
        <main className="album-list">
        {!albums
        ? <h2> Loading...</h2>
    : albums.map(thisAlbum => (
        <AlbumCard
        key={thisAlbum.albumId}
        thisAlbum={thisAlbum} />
    ))
    }
    <main/>
    )
   
}
{   /* /* //creating a state varibale for the album list, use effct going to the api and getting album list ? when we dont have the almub list we loop thru bwhen we do present vthe list  */} */}