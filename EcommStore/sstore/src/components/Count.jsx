import React, { useState, useEffect } from "react";
import './Count.css';

function Count() {
  const [countdown, setCountdown] = useState("");

  useEffect(() => {
   const countDownDate = new Date("Mar 25, 2025 15:37:25").getTime();

    const intervalId = setInterval(() => {
    const now = new Date().getTime();
      
      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // countdown string display
      const countdownStr = `${days} D ${hours} H ${minutes} M ${seconds} S`;

      setCountdown(countdownStr);
      
        if (distance < 0) {
        clearInterval(intervalId);
        setCountdown("EXPIRED");
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  return <p className="timer">Days till Something: <br/> {countdown}</p>;
}

export default Count;
