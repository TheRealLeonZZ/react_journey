import { useState } from 'react';

function NameInput() {
    const [name, setName] = useState('');
  
    return (
      <div>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        {name.length > 15 && <p style={{color: 'red'}}>Too long!</p>}
        <p>Hello, {name || 'stranger'}!</p>
      </div>
    );
  }

  export default NameInput;