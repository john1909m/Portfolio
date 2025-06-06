import { useState, useEffect } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onComplete }) => {
  const [text, setText] = useState('');
  const fullText = 'Welcome👋';
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const typeNextChar = () => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
        
        // Add slight random delay between characters for more natural typing
        const delay = currentIndex === fullText.length ? 100 : 
                     Math.random() * 50 + 50; // Random delay between 50-100ms
        
        timeoutId = setTimeout(typeNextChar, delay);
      } else {
        // Wait for 0.8 seconds after typing is complete
        setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 800);
      }
    };

    // Start typing with initial delay
    timeoutId = setTimeout(typeNextChar, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="welcome-screen">
      <div className="welcome-content">
        <h1 className="welcome-text">{text}<span className="cursor">|</span></h1>
      </div>
    </div>
  );
};

export default WelcomeScreen; 