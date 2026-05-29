// WelcomeScreen.jsx
import { useState, useEffect, useRef } from 'react';
import './WelcomeScreen.css';

const WelcomeScreen = ({ onComplete }) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const canvasRef = useRef(null);
  
  const fullText = 'Welcome To My Portfolio!';

  // Simple particle effect (خفيف جداً)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.2;
        this.speedY = (Math.random() - 0.5) * 0.2;
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }
      
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.fill();
      }
    }
    
    const initParticles = () => {
      particles = [];
      const count = Math.min(50, Math.floor(window.innerWidth / 30));
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    
    resizeCanvas();
    initParticles();
    animate();
    
    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Typing effect
  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;

    const typeNextChar = () => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
        const delay = currentIndex === fullText.length + 1 ? 200 : Math.random() * 40 + 50;
        timeoutId = setTimeout(typeNextChar, delay);
      } else {
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => onComplete(), 100);
        }, 600);
      }
    };

    timeoutId = setTimeout(typeNextChar, 200);
    return () => clearTimeout(timeoutId);
  }, [onComplete, fullText]);

  if (!isVisible) return null;

  return (
    <div className="welcome-screen">
      <canvas ref={canvasRef} className="particles-canvas" />
      
      <div className="content">
        {/* Code line بسيطة */}
        <div className="code-line">
          <span className="chevron">&gt;</span>
          <span className="code-text">npm run welcome</span>
          <span className="cursor-code">_</span>
        </div>
        
        {/* Welcome text */}
        <h1 className="welcome-text">
          {displayText}
          <span className="cursor">|</span>
        </h1>
        
        {/* خط divider بسيط */}
        <div className="divider"></div>
        
        {/* Small badge */}
        <div className="badge">
          <span className="bracket">{'<'}</span>
          <span>creative code</span>
          <span className="bracket">{'/>'}</span>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;