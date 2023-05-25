import React, { useState, useEffect } from 'react';

type Voice = {
    audioContent: string;
    timepoints: [],
    audioConfig: {
        audioEncoding: String;
        speakingRate: Number;
        pitch: Number;
        volumeGainDb: Number;
        sampleRateHertz: Number;
        effectsProfileId: [];
    }
}

type Text = {
    input: {
        text: string | undefined;
    },
    voice: {
        languageCode: string;
        name: String;
        ssmlGender: String;
    },
    audioConfig: {
        audioEncoding: String;
    }
}

type EffOffText = {
    message: string;
    from: string;
}

function EffOff() {
    const [effOffData, setEffOffData] = useState<EffOffText>(); // or Undefined add undefined
    const [voice, setVoice] = useState<Voice>();
    const [error, setError] = useState(null);
    const textEntry = effOffData?.message;

    // Object for POST request TO Google API
    const text : Text = {

        input: {
            text: textEntry
        },
        voice: {
            languageCode: "en-gb",
            name: "en-GB-Standard-A",
            ssmlGender: "FEMALE"
        },
        audioConfig: {
            audioEncoding: "MP3"
    }
}
    
    useEffect(() => {
        
        const fetchText = async () => {
            fetch('http://www.foaas.com/keep/user/Ethan', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((data) => { setEffOffData(data); console.log(data); })
            .catch((error) => setError(error));

            return effOffData?.message;
        }
        // Key removed
        const fetchVoice = async (temp) => {
            fetch("https://texttospeech.googleapis.com/v1beta1/text:synthesize?key={}", {
                method: 'POST',
                body: JSON.stringify(temp),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => res.json())
            .then((result) => { setVoice(result), console.log(result); })
            .catch((error) => setError(error));

            return voice?.audioConfig;
        }

        const fetchBoth = async () => {
            const tempText = await fetchText();
            const tempVoice = await fetchVoice(tempText);
        }
}, []);

// Cond statement for when audio is empty?
if (voice === undefined) {
    return (
        <button onClick={() => EffOff()}>Click Me</button>
        )
} else {
    return (
        <div>
            <audio controls>
                <source src={voice.audioContent} type="audio/mpeg" />
            </audio>
            <button onClick={() => EffOff()}>Click Me</button>
        </div>
    );
}
}
export default EffOff;