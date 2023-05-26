import React, { useEffect, useState} from "react";

type StoicData = {
        author: string;
        quote: string;
}

function Stoic() {
    const [stoicData, setStoicData] = useState<StoicData | undefined>(undefined);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.themotivate365.com/stoic-quote')
        .then((response) => response.json())
        .then((data) => { setStoicData(data);
            console.log(data);}
        )
        .catch((error) => setError(error));
}, []);

return (
    <div>
        {stoicData && (<p>{stoicData.quote} - {stoicData.author===""? "Unknown" : stoicData.author}</p>)}
        {!stoicData && <p>No Quote Found</p>}
    </div>
);
}

export default Stoic;