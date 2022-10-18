import React from "react";
import {logDOM} from "@testing-library/react";

export default function StarWars() {
    const [starWarsData, setStarWarsData] = React.useState({})
    console.log(starWarsData)

    const [count, setCount] = React.useState(1)

    React.useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
        console.log("effect fired")
        console.log(`charCount${count}`)
    }, [count])

    return (
        <div>
            <h2>{starWarsData.name} is character #{count}</h2>
            <h2>Birth year: {starWarsData.birth_year}</h2>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Get Prev Character</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}
