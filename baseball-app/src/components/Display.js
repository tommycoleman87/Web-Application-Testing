import React from 'react';

function Display({strikes, balls}) {
    return (
        <div>
        <div data-testid='strikes'>{strikes}</div>
        <div data-testid='balls'>{balls}</div>
        </div>
    )
}

export default Display;