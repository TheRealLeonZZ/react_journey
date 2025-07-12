import { useState, useEffect } from 'react';

function WelcomeMessage() {
    const [message, setMessage] = useState('');
  
      useEffect(() => {
    // This runs only once (when the component mounts)
    console.log('Component mounted');
    setMessage('Welcome to the app!');
    
    // Set a timeout to change message after 3 seconds
    const timer = setTimeout(() => {
      setMessage("Let's get started!");
    }, 3000);
    
    // Clean up the timer when component unmounts
    return () => clearTimeout(timer);
  }, []); // 👈 Empty array = run once
  
    return <p>{message}</p>;
  }

  export default WelcomeMessage;