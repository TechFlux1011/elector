import React from 'react';
import { DIFFICULTY, SCENARIOS } from '../game/types';
import './DifficultySelect.css';

const LABELS = {
  [DIFFICULTY.EASY]: 'Easier – start at the top',
  [DIFFICULTY.NORMAL]: 'Normal – mid-level office',
  [DIFFICULTY.HARD]: 'Harder – start small, work your way up',
};

export default function DifficultySelect({ difficulty, scenarioId, onSelect, onBack, onStart }) {
  return (
    <div className="difficulty-select">
      <button type="button" className="difficulty-select__back" onClick={onBack}>
        ← Back
      </button>
      <h2 className="difficulty-select__title">Choose difficulty</h2>
      <p className="difficulty-select__hint">
        Starting as President is easier than starting as a mayor and working your way up. Your starting political capital depends on this.
      </p>
      <div className="difficulty-select__options">
        {[DIFFICULTY.EASY, DIFFICULTY.NORMAL, DIFFICULTY.HARD].map((diff) => (
          <div key={diff} className="difficulty-select__group">
            <button
              type="button"
              className={`difficulty-select__card ${difficulty === diff ? 'difficulty-select__card--selected' : ''}`}
              onClick={() => onSelect(diff, null)}
            >
              <span className="difficulty-select__label">{LABELS[diff]}</span>
            </button>
            {SCENARIOS[diff] && SCENARIOS[diff].length > 0 && (
              <div className="difficulty-select__scenarios">
                {SCENARIOS[diff].map((scenario) => (
                  <button
                    key={scenario.id}
                    type="button"
                    className={`difficulty-select__scenario ${scenarioId === scenario.id ? 'difficulty-select__scenario--selected' : ''}`}
                    onClick={() => onSelect(diff, scenario.id)}
                  >
                    <span className="difficulty-select__scenario-title">{scenario.title}</span>
                    <span className="difficulty-select__scenario-office">{scenario.office}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        type="button"
        className="difficulty-select__start"
        onClick={onStart}
        disabled={!difficulty || !scenarioId}
      >
        Start game
      </button>
    </div>
  );
}
