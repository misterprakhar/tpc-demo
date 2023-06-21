import { useState } from 'react';
import './App.css';

function App() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  return (
    <div className="container">
      <button className='up' onClick={() => setY(prev => prev - 50)} disabled={y === 0 ? true : false}>Up</button>
      <div className='middle-container'>
        <button className='left' onClick={() => setX(prev => prev - 50)} disabled={x === 0 ? true : false}>Left</button>
        <div className='playground'>
          <div className="square" style={{ left: x, top: y }}></div>
        </div>
        <button className='right' onClick={() => setX(prev => prev + 50)} disabled={x === 450 ? true : false}>Right</button>
      </div>
      <button className='down' onClick={() => setY(prev => prev + 50)} disabled={y === 450 ? true : false}>Down</button>
    </div>
  );
}

export default App;
