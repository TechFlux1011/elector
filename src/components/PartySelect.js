import React from 'react';
import { PARTIES } from '../game/types';
import './PartySelect.css';

export default function PartySelect({ selectedPartyId, onSelect, onBack, onNext }) {
  return (
    <div className="party-select">
      <button type="button" className="party-select__back" onClick={onBack}>
        ← Back
      </button>
      <h2 className="party-select__title">Choose your party</h2>
      <p className="party-select__hint">
        You can caucus with other parties and switch later, but switching costs political capital.
      </p>
      <div className="party-select__grid">
        {PARTIES.map((party) => (
          <button
            key={party.id}
            type="button"
            className={`party-select__card ${selectedPartyId === party.id ? 'party-select__card--selected' : ''}`}
            style={{ '--party-color': party.color }}
            onClick={() => onSelect(party.id)}
          >
            <span className="party-select__name">{party.name}</span>
            {party.caucusWith.length > 0 && (
              <span className="party-select__caucus">
                Caucus: {party.caucusWith.join(', ')}
              </span>
            )}
          </button>
        ))}
      </div>
      <button
        type="button"
        className="party-select__next"
        onClick={onNext}
        disabled={!selectedPartyId}
      >
        Next: Traits
      </button>
    </div>
  );
}
