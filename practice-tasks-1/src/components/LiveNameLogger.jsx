import { useState, useEffect } from 'react';

function LiveNameLogger() {
    const [name, setName] = useState('');
  
    useEffect(() => {
      console.log(`Name changed to: ${name}`);
      document.title = name || 'React App'; // Update DOM title, fallback to 'React App' if name is empty
    }, [name]); // 👈 Runs when `name` changes
  
    return (
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Type a name"
      />
    );
  }

  export default LiveNameLogger;