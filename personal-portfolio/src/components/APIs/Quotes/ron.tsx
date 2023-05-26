import React, { useEffect, useState} from "react";

type RonSwonsonData = {
    quote: string;
}

function RonSwonson() {
    const [ronSwonsonData, setRonSwonsonData] = useState<string | undefined>(undefined);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then((response) => response.json())
        .then((data) => { setRonSwonsonData(data);
            console.log(data);}
        )
        .catch((error) => setError(error));
}, []);
return (
    <div>
        {ronSwonsonData && (<p>{ronSwonsonData}</p>)}
        {!ronSwonsonData && <p>No Quote Found</p>}
    </div>
);
}

export default RonSwonson;
