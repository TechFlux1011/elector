import React, { createContext, useContext, useReducer } from 'react';
import { DIFFICULTY, SCENARIOS } from './types';

const GameContext = createContext(null);

const initialState = {
  screen: 'welcome', // welcome | party | traits | policies | difficulty | map
  character: null,
  difficulty: null,
  scenarioId: null,
};

function gameReducer(state, action) {
  switch (action.type) {
    case 'SET_SCREEN':
      return { ...state, screen: action.screen };
    case 'SET_PARTY':
      return { ...state, character: { ...state.character, ...action.payload } };
    case 'SET_CHARACTER':
      return { ...state, character: action.character };
    case 'SET_TRAITS':
      return {
        ...state,
        character: {
          ...state.character,
          views: action.views ?? state.character?.views,
          ...(action.name !== undefined && { name: action.name }),
        },
      };
    case 'SET_POLICIES':
      return {
        ...state,
        character: {
          ...state.character,
          supportedPolicies: action.supportedPolicies,
          opposedPolicies: action.opposedPolicies,
        },
      };
    case 'SET_DIFFICULTY':
      return {
        ...state,
        difficulty: action.difficulty,
        scenarioId: action.scenarioId,
        character: {
          ...state.character,
          difficulty: action.difficulty,
          scenarioId: action.scenarioId,
          politicalCapital: action.difficulty === DIFFICULTY.EASY ? 80 : action.difficulty === DIFFICULTY.NORMAL ? 50 : 25,
        },
      };
    case 'START_GAME': {
      const scenario = state.difficulty && state.scenarioId
        ? SCENARIOS[state.difficulty]?.find((s) => s.id === state.scenarioId)
        : null;
      const region = scenario?.region ?? 'USA';
      return {
        ...state,
        screen: 'map',
        character: {
          ...state.character,
          id: `char_${Date.now()}`,
          region,
        },
      };
    }
    case 'NEW_GAME':
      return initialState;
    default:
      return state;
  }
}

export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used within GameProvider');
  return ctx;
}
