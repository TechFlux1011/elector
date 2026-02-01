import React from 'react';
import './Welcome.css';

export default function Welcome({ onStart }) {
  return (
    <div className="welcome">
      <h1 className="welcome__title">Elector</h1>
      <p className="welcome__tagline">Simulate electoral politics. Choose a party, shape your character, and rise through the ranks.</p>
      <button className="welcome__cta" type="button" onClick={onStart}>
        Create your character
      </button>
    </div>
  );
}
