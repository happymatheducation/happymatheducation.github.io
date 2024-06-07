import React, { useState, useEffect } from 'react';
const WebSocket = window.WebSocket;

function App() {
    const [color, setColor] = useState('red');
    const [newColor, setNewColor] = useState('#123456');
    let ws = new WebSocket('ws://localhost:8080');

    const handleChange = () => {
        ws.send(newColor);
    };

    useEffect(() => {
        // Handle color updates from server
        ws.onmessage = (colorFromBackEnd) => {
            setColor(colorFromBackEnd.data);
            console.log(colorFromBackEnd)
        };
    }, []);

    return (
        <div>
            <div style={{ backgroundColor: color, width: 100, height: 100 }} />
            <input
                type="color"
                value={newColor}
                onChange={(event) => setNewColor(event.target.value)}
            />
            <button onClick={handleChange}>Change Color</button>
        </div>
    );
}

export default App;

