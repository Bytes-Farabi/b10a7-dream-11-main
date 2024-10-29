import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import SinglePlayer from "../Player/SinglePlayer";

const Available = () => {

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
                players.map((p) => <SinglePlayer player={p} key={p.id}></SinglePlayer>)
            }
            </div>
        </div>
    );
};

export default Available;


// available as players