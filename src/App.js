import React from 'react';
import { GameProvider, useGame } from './game/GameContext';
import Welcome from './components/Welcome';
import PartySelect from './components/PartySelect';
import TraitsSelect from './components/TraitsSelect';
import PoliciesSelect from './components/PoliciesSelect';
import DifficultySelect from './components/DifficultySelect';
import MapView from './components/MapView';
import { PARTIES } from './game/types';
import './App.css';

function ElectorApp() {
  const { state, dispatch } = useGame();
  const { screen, character, difficulty, scenarioId } = state;

  const handleWelcomeStart = () => {
    dispatch({ type: 'SET_SCREEN', screen: 'party' });
    dispatch({ type: 'SET_CHARACTER', character: {} });
  };

  const handlePartySelect = (partyId) => {
    const party = PARTIES.find((p) => p.id === partyId);
    dispatch({
      type: 'SET_PARTY',
      payload: {
        partyId,
        caucusWith: party?.caucusWith ?? [],
      },
    });
  };

  const handlePartyNext = () => dispatch({ type: 'SET_SCREEN', screen: 'traits' });
  const handleTraitsBack = () => dispatch({ type: 'SET_SCREEN', screen: 'party' });
  const handleTraitsUpdate = (payload) => dispatch({ type: 'SET_TRAITS', ...payload });
  const handleTraitsNext = () => dispatch({ type: 'SET_SCREEN', screen: 'policies' });
  const handlePoliciesBack = () => dispatch({ type: 'SET_SCREEN', screen: 'traits' });
  const handlePoliciesUpdate = (payload) => dispatch({ type: 'SET_POLICIES', ...payload });
  const handlePoliciesNext = () => dispatch({ type: 'SET_SCREEN', screen: 'difficulty' });
  const handleDifficultyBack = () => dispatch({ type: 'SET_SCREEN', screen: 'policies' });
  const handleDifficultySelect = (diff, scenario) => {
    dispatch({ type: 'SET_DIFFICULTY', difficulty: diff, scenarioId: scenario });
  };
  const handleStartGame = () => dispatch({ type: 'START_GAME' });

  if (screen === 'map') {
    return <MapView character={character} />;
  }

  if (screen === 'welcome') {
    return <Welcome onStart={handleWelcomeStart} />;
  }

  if (screen === 'party') {
    return (
      <PartySelect
        selectedPartyId={character?.partyId}
        onSelect={handlePartySelect}
        onBack={() => dispatch({ type: 'SET_SCREEN', screen: 'welcome' })}
        onNext={handlePartyNext}
      />
    );
  }

  if (screen === 'traits') {
    return (
      <TraitsSelect
        character={character}
        onUpdate={handleTraitsUpdate}
        onBack={handleTraitsBack}
        onNext={handleTraitsNext}
      />
    );
  }

  if (screen === 'policies') {
    return (
      <PoliciesSelect
        character={character}
        onUpdate={handlePoliciesUpdate}
        onBack={handlePoliciesBack}
        onNext={handlePoliciesNext}
      />
    );
  }

  if (screen === 'difficulty') {
    return (
      <DifficultySelect
        difficulty={difficulty}
        scenarioId={scenarioId}
        onSelect={handleDifficultySelect}
        onBack={handleDifficultyBack}
        onStart={handleStartGame}
      />
    );
  }

  return <Welcome onStart={handleWelcomeStart} />;
}

export default function App() {
  return (
    <GameProvider>
      <div className="app">
        <ElectorApp />
      </div>
    </GameProvider>
  );
}
