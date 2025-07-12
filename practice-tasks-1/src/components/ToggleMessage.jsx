import { useState } from 'react';

function ToggleMessage() {
    const [isVisible, setIsVisible] = useState(false);
    const [count, setCount] = useState(0);
  
    return (
      <div>
        <button onClick={() => {
            setIsVisible(!isVisible);
            setCount(count + 1);
        }}>
          {isVisible ? 'Hide' : 'Show'} Message
        </button>
        {isVisible && <p>This is a toggled message.</p>}
        <p>Count: {count}</p>
      </div>
    );
  }

  export default ToggleMessage;