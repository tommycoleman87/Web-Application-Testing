import React from 'react';

function Display({strikes, balls}) {
    return (
        <div>
            Strikes
        <div data-testid='strikes'>{strikes}</div>
        Balls
        <div data-testid='balls'>{balls}</div>
        </div>
    )
}

export default Display;