import React, { useEffect, useState } from 'react';
import './TypingEffect.css';

const TypingEffect = ({
  textArray,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 2000, // Delay before deleting (in milliseconds)
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let timer;
    const currentText = textArray[index];

    if (isPaused) {
      timer = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, delay);
    } else if (isDeleting) {
      if (displayedText.length === 0) {
        setIsDeleting(false);
        setIsTyping(true);
        setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      } else {
        timer = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1));
        }, deletingSpeed);
      }
    } else if (isTyping) {
      if (displayedText === currentText) {
        setIsTyping(false);
        setIsPaused(true);
      } else {
        timer = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isTyping,
    isDeleting,
    isPaused,
    index,
    textArray,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return (
    <div className='typing-effect'>
      {displayedText}
      <span className='cursor'></span>
    </div>
  );
};

export default TypingEffect;
