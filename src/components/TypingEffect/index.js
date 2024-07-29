import React, { useEffect, useState } from 'react';
import './TypingEffect.css'; // Make sure to import the CSS file

const TypingEffect = ({ textArray, typingSpeed = 100, deletingSpeed = 50, delay = 5000 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentText = textArray[index];
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        if (displayedText === currentText) {
          setIsDeleting(true);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, textArray, typingSpeed, deletingSpeed]);

  return (
    <div className="typing-effect">
      {displayedText}
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingEffect;
