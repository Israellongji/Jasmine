import React from 'react';
import { Heart, ArrowRight } from 'lucide-react';

interface LandingViewProps {
  onProceed: () => void;
}

export const LandingView: React.FC<LandingViewProps> = ({ onProceed }) => {
  return (
    <div className="max-w-md w-full bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 text-center border-4 border-pink-100 transform transition-all hover:scale-[1.02] duration-300">
      <div className="flex justify-center mb-6">
        <div className="bg-pink-100 p-4 rounded-full">
          <Heart className="w-12 h-12 text-pink-500 fill-current animate-pulse" />
        </div>
      </div>
      
      <h1 className="text-4xl font-bold text-rose-600 mb-4 tracking-wide">
        Hello, Jasmine!
      </h1>
      
      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        I have a very special question for you... <br/>
        Are you ready?
      </p>

      <button
        onClick={onProceed}
        className="group relative inline-flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-rose-500 rounded-full hover:bg-rose-600 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2"
      >
        <span>Proceed</span>
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
};