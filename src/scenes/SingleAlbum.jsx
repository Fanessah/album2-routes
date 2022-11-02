import(useEffect,useState) from 'react'
import {useParams} from 'react-router-dom'
import Header from'../components/Header'
import AlbumCard from '../components/AlbumCard'
import { useEffect } from 'react'

export default function SingleAlbum() {
    const {albumId} =useParams()
    Const [thisAlbum,setThisAlbum] = useState()
    useEffect(() => {
        fetch('https://albums-api-fan.web.app/albums')
        .then 
        .then 
        const_thisAlbum =data.find(album =album.albumId === albumId)
        setThisAlbum(_thisAlbum)
    })
    .catch(alert)
},[albumId])

    return (
        <>
        <header title={thisAlbum? thisAlbum.album: 'Loading...'} />
        {thisAlbum
        ? <AlbumCard thisAlbum={thisAlbum}/>
        :null
        }
        </>  
    )
}