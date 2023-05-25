import React from 'react';

export default function PlayAudio() {
    const audio = new Audio('/assets/synthesis.wav');
    audio.play();
    return (
        <div>
            <button onClick={PlayAudio}>Play</button>
        </div>
    )
}