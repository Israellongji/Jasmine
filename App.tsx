import React, { useState } from 'react';
import { LandingView } from './components/LandingView';
import { QuestionView } from './components/QuestionView';
import { ResultView } from './components/ResultView';
import { FloatingHearts } from './components/FloatingHearts';

export enum AppState {
  LANDING,
  QUESTION,
  SUCCESS,
  FAILURE
}

const App: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>(AppState.LANDING);

  const renderContent = () => {
    switch (currentState) {
      case AppState.LANDING:
        return <LandingView onProceed={() => setCurrentState(AppState.QUESTION)} />;
      case AppState.QUESTION:
        return (
          <QuestionView 
            onYes={() => setCurrentState(AppState.SUCCESS)}
            onNo={() => setCurrentState(AppState.FAILURE)}
            onBack={() => setCurrentState(AppState.LANDING)}
          />
        );
      case AppState.SUCCESS:
        return (
          <ResultView 
            type="success" 
            onBack={() => setCurrentState(AppState.QUESTION)} 
            onReset={() => setCurrentState(AppState.LANDING)}
          />
        );
      case AppState.FAILURE:
        return (
          <ResultView 
            type="failure" 
            onBack={() => setCurrentState(AppState.QUESTION)} 
            onReset={() => setCurrentState(AppState.LANDING)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-pink-200 via-red-100 to-rose-200 overflow-hidden font-sans text-gray-800">
      <FloatingHearts />
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;