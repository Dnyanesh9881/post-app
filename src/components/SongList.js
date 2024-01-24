import React from "react";
import { useSelector} from "react-redux";



const SongList=()=>{
    let songData=useSelector(state=>state.song);


    return (
        <div>
            {
                songData && ( <div>
                    <h1>{songData.name}</h1>
                    <p>{songData.artist}</p>
                    <p>{songData.album}</p>
                    <p>{songData.duration}</p>
                    </div>)
            }
        </div>
    )
}
export default SongList; 