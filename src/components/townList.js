import { useState } from "react";
import { towns } from "../data/town";
import TownDetails from "./townDetails";

const TownList = () => {
    let [townList, setTowns] = useState(towns)
    const handleDelete = (idx) => {
        const deleteTown = townList.filter(town => town.id !== idx)
        setTowns(deleteTown)
    }

    return (
        <div className="townlist">
            <div style={{marginTop:"10px"}}>
                {townList.map(town => (
                    <TownDetails key={town.id} handleDelete={handleDelete} town={town} />
                ))}
            </div>
        </div>
    );
}

export default TownList;