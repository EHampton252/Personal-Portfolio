import React from "react";
import EffOff from "../FOAAS/eff-off";
import './speech.css'

export default function Speech() {
    const synth = window.speechSynthesis;
    const input = "user: Fuck off. And when you get there, fuck off from there too. Then fuck off some more. Keep fucking off until you get back here. Then fuck off again.";

    function Speak(input) {
        const utterThis = new SpeechSynthesisUtterance(input);
        utterThis.voice = synth.getVoices()[0];

        utterThis.pitch = 1;
        utterThis.rate = 1;
        synth.speak(utterThis);
    }

    return (
        <div>
            <button onClick={() => Speak(input)}>Motivation</button>
        </div>
    );
}