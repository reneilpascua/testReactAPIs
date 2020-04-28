import React, { useState, useEffect } from "react";
import ApiKeys from "../apikeys/apikeys";

const NiceClasses = () => {
    const [classList, setClassList] = useState({});



    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://cipo-gsm-ised-isde-apicast-production.api.canada.ca/v1/classes?lang=eng", {
                headers: { 
                    'user-key': ApiKeys.cipoapi,
                     }
            });
            const body = await res.json()
            const item = body.result;
            setClassList(item);
            console.log(item);
        }
        fetchData();
    }, []);

    //var others = Object.values(classList);

    const others = Array.from(classList);

    console.log(others);
    return (
        <React.Fragment>
            {others.map((person, key) => (
                <h6>{person.classNumber} {person.descriptions[0].shortname}</h6>
            ))}  

        </React.Fragment>
    )
}
export default NiceClasses;