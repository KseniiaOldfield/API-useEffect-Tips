import './App.css';
import { useState, useEffect } from 'react';
import image from './tip0.jpg';
import img from './idea.jpg'


function App() {

  const [tips, setTips] = useState("");

  const fetchTips = async () => {
    const response = await fetch(`http://www.boredapi.com/api/activity/ `);
    const data = await response.json();
    setTips(data.activity);
  }
  useEffect(() => {
    fetchTips();
  }, []);

  return (
    <div className="App">
      <img  className='logo' src={image} alt='logo'/>
      <h2 className='tip'>{tips}</h2>
        <button className='btn' onClick={fetchTips}>New tip</button>
      <img className='logo' src={img} alt='idea'/>
    </div>
  );
}

export default App;
