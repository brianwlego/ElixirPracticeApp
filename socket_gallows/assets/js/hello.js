import React, { useEffect, useState } from "react";
import HangmanSocket from "./hangman_socket.js"

function Greeter(props){
    const [game, setGame] = useState('')


    useEffect(() => {
        const g = new HangmanSocket() 
        setGame(g)
        g.setup_channel()
        g.channel.on("tally", data => {
            decideWhatToDo(data)
        })
        
    }, [])

    const decideWhatToDo = (respData) => {
        
    }

    const clickHandler = async () => {
        game.channel.push('make_move', "a")
    }



    console.log(game)
    
    return (
        <section className="phx-hero">
            <h1>{props.name}</h1>
            <p>Hell yeah brother.</p>
            <button
                onClick={()=> clickHandler()}
            >Start</button>
        </section>
    )
}
export default Greeter;

