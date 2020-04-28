import React, { useState, useEffect } from "react";

const Planets = () => {
    const [hasError, setErrors] = useState(false);
    const [planets, setPlanets] = useState({});



    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://api4u.azurewebsites.net/api/people");
            const body = await res.json()
            setPlanets(body);
            console.log(planets);
        }

        fetchData();
    }, []);


    //const others = Array.from(planets);
    var others = Object.values(planets);

    return (
        <>
            {others.map((person, key) => (
                <h6>{person.id} {person.firstName} {person.lastName}</h6>
            ))}        
        </>
    )
}
export default Planets;