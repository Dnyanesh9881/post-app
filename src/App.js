import React from "react";
import CounterApp from "./components/CounterApp";
import SongApp from "./components/SongApp";
import SongList from "./components/SongList";

const App=()=>{

  return(
    <div>
      <CounterApp />
      <div style={{
        display:"flex", justifyContent:"space-around"
      }
        
      }>
      <SongApp />
      <SongList />
      </div>
     
    </div>
  )
}
export default App;