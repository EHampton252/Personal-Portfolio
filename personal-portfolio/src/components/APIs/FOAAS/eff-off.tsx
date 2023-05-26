import React, { useState, useEffect } from 'react';

type EffOffText = {
        message: string;
        subtitle: string;
    }

function EffOff() {
    const [effOffData, setEffOffData] = useState<EffOffText>(); // or Undefined add undefined
    const [error, setError] = useState(null);
    useEffect(() => {
        
        const fetchText = async () => {
            fetch('http://www.foaas.com/keep/user/Ethan', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((data) => { setEffOffData(data); console.log(data); })
            .catch((error) => setError(error));

            return (effOffData?.message);
        }
    }, []);
}
export default EffOff;