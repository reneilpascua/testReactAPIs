import React, {useState, useEffect} from 'react';

function TestPage(props) {
    const [count, setCount] = useState(69);
    const [classes, setClasses] = useState([]);



    useEffect(() => {
            var tmp = {
                classNumber:0,
                shortname:'zeroth class'
            };
            setClasses(classes.concat(tmp));
    }, []); 


    return(
        <div>
            <p>you clicked {count} times</p>
            <button onClick ={
                () => setCount(count+1)
            }>
                click me
            </button>

            <p>Here are some NICE classes:</p>
            <div>
                {classes.map((item) => (
                    <p>class {item.classNumber}: {item.shortname}</p>
                ))}
            </div>

        </div>
    )
}
export default TestPage;