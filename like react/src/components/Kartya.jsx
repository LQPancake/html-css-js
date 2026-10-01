import { useState } from "react";

export default function Kartya({emoji, cim, leiras}){
    const [counter, setCounter] = useState(0)
    return (
    <div className={counter == 0 ? "card" : "card like"}>
        <div className="card-body">
            <h2 className="card-title">{emoji} {cim}</h2>
            <p className="card-desc">{leiras}</p>
            <div className="likes">
                <button onClick={() => setCounter(counter + 1)}>{counter == 0 ? "🤍" : "❤️" } {counter}</button>
            </div>
            <small>{counter == 0 && "Ez a kártya még nem kapott likeot"}</small>
        </div>
    </div>
    )
}