import React from 'react';

export const FloatingHearts: React.FC = () => {
  // Generate a consistent set of random hearts
  const hearts = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 15}s`,
    fontSize: `${Math.random() * 20 + 10}px`,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-[-50px] text-pink-400 opacity-0 animate-float"
          style={{
            left: heart.left,
            animationDelay: heart.animationDelay,
            fontSize: heart.fontSize,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};