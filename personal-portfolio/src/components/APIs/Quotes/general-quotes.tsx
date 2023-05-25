import React, { useEffect, useState} from "react";

type QuoteData = {
    id: string,
    content: string,
    author: string,
    authorSlug: string,
    length: number,
    tags: string[]
}

function Quote() {
    const [quoteData, setQuoteData] = useState<QuoteData | undefined>(undefined);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => { setQuoteData(data);
            console.log(data);}
        )
        .catch((error) => setError(error));
}, []);

return (
    <div>
        {quoteData && (<p>{quoteData.content} - {quoteData.author===""? "Unknown" : quoteData.author}</p>)}
        {!quoteData && <p>No Quote Found</p>}
    </div>
);
}

export default Quote;