import { useEffect, useState } from "react";
import SinglePlayer from "../Player/SinglePlayer";

// eslint-disable-next-line react/prop-types
const Available = ({handleSelectedPlayer}) => {

    const [players, setPlayers] = useState([])

    useEffect(()=>{
        fetch('/public/fakedata.json')
        .then(res => res.json())
        .then(data => setPlayers(data.players))
    }, [])

    return (
        <div>
            <div className="grid grid-cols-3 gap-5 mt-10">
            {
                players.map((p) => <SinglePlayer player={p} key={p.id} handleSelectedPlayer={handleSelectedPlayer}></SinglePlayer>)
            }
            </div>
        </div>
    );
};

export default Available;


// available as players