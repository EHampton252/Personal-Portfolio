import React, { useEffect, useState} from 'react';

type GameType= 'chess_rapid'|'chess_bullet'
type GameData = { 
    last: {
        rating: number,
        date: number,
        rd: number
    }
    best: {
        rating: number,
        date: number,
        game: string
    }
    records: {
        win: number,
        loss: number,
        draw: number
    }
}
// type ChessData = {
//    [P in GameType]: GameData;
// }

type ScoreData = {
    highest: {
        rating: number,
        date: number
    },
    lowest: { 
        rating: number,
        date: number,
    }
}

type ChessData = {
    chess_rapid: GameData;
    chess_bullet: GameData;
    fide: number;
    tactics: ScoreData;
    puzzle_rush: Object;
}
 
function ChessRating() {
    const [chessData, setChessData] = useState<ChessData | undefined>(undefined);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://api.chess.com/pub/player/EHamstrings/stats')
        .then((response) => response.json())
        .then((data) => { setChessData(data);
            console.log(data);}
        )
        .catch((error) => setError(error));
}, []);
return (
    <div>
        <h3>Chess.com Rating</h3>
        {chessData && (<li>Last Rating  {chessData.chess_rapid.last.rating}</li>)}
        {!chessData && <p>No Rating Found</p>}
    </div>
);
}

export default ChessRating;