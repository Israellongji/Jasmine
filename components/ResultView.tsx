import React from 'react';
import { Home, RefreshCcw } from 'lucide-react';

interface ResultViewProps {
  type: 'success' | 'failure';
  onBack: () => void;
  onReset: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({ type, onBack, onReset }) => {
  const isSuccess = type === 'success';

  return (
    <div className="max-w-2xl w-full bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 text-center border-4 border-white animate-fade-in-up">
      <div className="mb-8 flex justify-center">
        {isSuccess ? (
            <div className="relative">
                 <div className="absolute inset-0 bg-yellow-200 blur-2xl opacity-50 rounded-full animate-pulse"></div>
                 <div className="text-9xl animate-bounce relative z-10">😎</div>
            </div>
        ) : (
            <div className="text-9xl animate-pulse relative z-10">😭</div>
        )}
      </div>

      <h1 className={`text-4xl md:text-6xl font-black mb-6 ${isSuccess ? 'text-rose-600' : 'text-gray-600'}`}>
        {isSuccess ? "YAY!🌷" : "Oh no..."}
      </h1>

      <p className="text-xl md:text-2xl text-gray-700 mb-10 leading-relaxed">
        {isSuccess 
          ? "Awesome, let's have some fun. Can't wait to celebrate with you, Jasmine! 🥂🌹"
          : "Ouch...oh well, was worth a shot (Or maybe that button was just too easy to catch 😉)"}
      </p>

      {isSuccess && (
         <div className="mb-8 grid grid-cols-2 gap-4">
             <img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGh1Z3o5ZWFlYTkwdzV5MjU2Z3JkYXJpenNwZzJuNjJjamNqY3ZnbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/7yORCExjS87Jk10xSU/giphy.gif" className="rounded-xl shadow-md transform rotate-2 hover:rotate-0 transition-transform" alt="Cute 1" />
             <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHB3ZW5tMXB4Yjk0amU4ZHBrZzA3aHA5aTkzNnlscjVnMml6eTBkeCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/62PP2yEIAZF6g/giphy.gif" className="rounded-xl shadow-md transform -rotate-2 hover:rotate-0 transition-transform" alt="Cute 2" />
         </div>
      )}

      <div className="flex justify-center gap-4">
        {isSuccess ? (
             <button
             onClick={onReset}
             className="flex items-center gap-2 px-6 py-3 bg-rose-100 text-rose-600 rounded-full hover:bg-rose-200 transition-colors font-semibold"
           >
             <Home className="w-5 h-5" />
             Back to Start
           </button>
        ) : (
            <>
                <button
                onClick={onBack}
                className="flex items-center gap-2 px-6 py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors font-semibold"
                >
                Try Again
                </button>
                 <button
                 onClick={onReset}
                 className="flex items-center gap-2 px-6 py-3 bg-transparent text-gray-400 hover:text-gray-600 rounded-full transition-colors"
                 >
                 <RefreshCcw className="w-5 h-5" />
                 Start Over
                 </button>
            </>
        )}
       
      </div>
    </div>
  );
};