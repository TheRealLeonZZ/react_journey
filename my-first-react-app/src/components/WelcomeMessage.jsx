import { useState } from 'react';

function WelcomeMessage({ isLoggedIn }) {
    // Use local state to track login status, initialized with the prop value
    const [localIsLoggedIn, setLocalIsLoggedIn] = useState(isLoggedIn);
    const [message, setMessage] = useState(localIsLoggedIn ? "Welcome back!" : "Please log in");
    
    function changeLoginStatus() {
        // Toggle the local login state
        const newState = !localIsLoggedIn;
        console.log('New login state:', newState);
        
        setLocalIsLoggedIn(newState);
        setMessage(newState ? "Welcome back!" : "Please log in");
    }

    return (
      <div>
            <h2>{message}</h2>
        <button onClick={changeLoginStatus}>Change Login Status</button>
      </div>
    );
  }

  export default WelcomeMessage;