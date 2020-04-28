import React, { useState, useEffect } from "react";

const ClioContacts = () => {
    const [contactsList, setContactsList] = useState({});



    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://cipo-gsm-ised-isde-apicast-production.api.canada.ca/v1/classes?lang=eng", {
                headers: { 
                    'user-key': "4a4c21e736611dd7ede46b9853b75dc3",
                     }
            });
            const body = await res.json()
            const item = body.result;
            setContactsList(item);
            console.log(item);
        }
        fetchData();
    }, []);

    //var others = Object.values(classList);

    const others = Array.from(contactsList);

    console.log(others);
    return (
        <React.Fragment>
            {others.map((person, key) => (
                <h6>{person.classNumber} {person.descriptions[0].shortname}</h6>
            ))}  

        </React.Fragment>
    )
}
export default ClioContacts;