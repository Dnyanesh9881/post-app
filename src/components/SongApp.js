import React from "react";
import songData from "../data/songData.js";
import { useDispatch} from "react-redux";
import { selectSong } from "../redux/features/song/songSlice.js";


const SongApp=()=>{

   
    let dispatch=useDispatch();

 
    return (
        <div>
            <h1>SONG LIST</h1>
            {
                songData.map(song=>(
                    <p key={song.id} style={{cursor:"pointer"}} onClick={()=>  dispatch(selectSong(song))}>{song.name}</p>
                ))
            }
        </div>
    )
}
export default SongApp;