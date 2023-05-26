import React, { useEffect, useState} from "react";

function Bacon () {
    const [baconData, setBaconData] = useState();
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1&format=json')
        .then((response) => response.json())
        .then((data) => { setBaconData(data); console.log(data); })
        .catch((error) => setError(error));
    }, []);


return (
    <div>
        {baconData && (<p>{baconData}</p>)}
        {!baconData && <p>No Bacon Found</p>}
    </div>
)
}

export default Bacon;