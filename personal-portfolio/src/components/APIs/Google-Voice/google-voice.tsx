import React, { useEffect, useState} from 'react';

type Voice = {
    audioContent: string | undefined;
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
        text: String;
    },
    voice: {
        languageCode: String;
        name: String;
        ssmlGender: String;
    },
    audioConfig: {
        audioEncoding: String;
    }
}

export default function GoogleVoice() {
    const [voice, setVoice] = useState<Voice | undefined>(undefined);
    const [error, setError] = useState(null);

    // Object for POST request to Google API
    const input : Text = {

        input: {
            text: "user: Fuck off. And when you get there, fuck off from there too. Then fuck off some more. Keep fucking off until you get back here. Then fuck off again."
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
    // Key removed
    useEffect(() => {
        fetch("https://texttospeech.googleapis.com/v1beta1/text:synthesize?key={}", {
            method: 'POST',
            body: JSON.stringify(input),
            headers: {
                'Content-Type': 'application/json'
        }})
            .then(res => res.json())
            .then((result) => { setVoice(result), console.log(result); })
            .catch((error) => setError(error));
    }, [])

    if (voice === undefined) {
        return <div>Loading...</div>
    }
    else {

        return (
            <div>
                <button onClick={() => 
                <audio controls>
                    <source src={voice.audioContent} type="audio/mp3" />
                </audio>}>Click Me</button>
            </div>
        );
    }
}

