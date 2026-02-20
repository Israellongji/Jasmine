import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowLeft, Heart } from 'lucide-react';

interface QuestionViewProps {
  onYes: () => void;
  onNo: () => void;
  onBack: () => void;
}

export const QuestionView: React.FC<QuestionViewProps> = ({ onYes, onNo, onBack }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [noBtnPosition, setNoBtnPosition] = useState({ top: '50%', left: '70%' });
  const [isMoving, setIsMoving] = useState(true);

  // Function to move the button to a random position
  const moveButton = useCallback(() => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const padding = 20; // Padding from edges
    const btnWidth = 100; // Approx button width
    const btnHeight = 50; // Approx button height

    // Calculate available space
    const maxX = containerRect.width - btnWidth - padding;
    const maxY = containerRect.height - btnHeight - padding;
    const minX = padding;
    const minY = padding;

    const newX = Math.random() * (maxX - minX) + minX;
    const newY = Math.random() * (maxY - minY) + minY;

    setNoBtnPosition({
      top: `${newY}px`,
      left: `${newX}px`,
    });
  }, []);

  // Interval for constant movement
  useEffect(() => {
    if (!isMoving) return;
    
    // Move immediately on mount
    moveButton();

    const intervalId = setInterval(() => {
      moveButton();
    }, 800); // Move every 800ms

    return () => clearInterval(intervalId);
  }, [isMoving, moveButton]);

  return (
    <div className="w-full max-w-4xl h-[600px] flex flex-col items-center justify-center">
      <div 
        ref={containerRef}
        className="relative w-full h-full bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border-2 border-white overflow-hidden flex flex-col items-center"
      >
        {/* Header */}
        <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-20">
          <button 
            onClick={onBack}
            className="p-2 bg-white/50 hover:bg-white/80 rounded-full transition-colors text-rose-500"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="mt-20 text-center z-10 px-4 pointer-events-none">
          <div className="relative inline-block">
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3NGFjMTRtcTBycjdheTJ4M2xpeTM2MDRnMHZqb3c4bmtqbXdsNDJqZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/1xncdvMFWF0OlP3O9b/giphy.gif" 
              alt="Romantic decoration" 
              className="rounded-2xl shadow-lg mb-6 w-64 h-48 object-cover mx-auto opacity-80"
            />
             <Heart className="absolute -top-4 -right-4 w-12 h-12 text-rose-500 fill-rose-500 animate-bounce" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-rose-600 mb-6 drop-shadow-sm">
            Will you be my Valentine?
          </h2>
          <p className="text-xl text-rose-800/80 mb-12 font-medium">
            You gotta say yes!  🌚
          </p>
        </div>

        {/* Buttons Area */}
        <div className="w-full h-full absolute top-0 left-0 pointer-events-none">
            {/* Yes Button - Fixed Centered (technically absolute positioned relative to container for easier layout mix) */}
            <div className="absolute top-[65%] left-1/2 transform -translate-x-1/2 pointer-events-auto">
                <button
                    onClick={onYes}
                    className="px-12 py-4 bg-green-500 hover:bg-green-600 text-white text-2xl font-bold rounded-full shadow-lg hover:shadow-green-500/30 hover:scale-110 transition-all duration-300 transform"
                >
                    YES! 💖
                </button>
            </div>

            {/* No Button - Floating */}
            <div 
                className="absolute transition-all duration-700 ease-in-out pointer-events-auto"
                style={{ top: noBtnPosition.top, left: noBtnPosition.left }}
                onMouseEnter={moveButton} // Extra dodge on hover
            >
                <button
                    onClick={onNo}
                    className="px-8 py-3 bg-gray-400 hover:bg-gray-500 text-white text-lg font-semibold rounded-full shadow-md cursor-pointer whitespace-nowrap"
                >
                    No 😂
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};