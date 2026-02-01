import React from 'react';
import { VIEW_AXES } from '../game/types';
import './TraitsSelect.css';

const defaultViews = VIEW_AXES.reduce((acc, { id }) => ({ ...acc, [id]: 50 }), {});

export default function TraitsSelect({ character, onUpdate, onBack, onNext }) {
  const views = character?.views || defaultViews;
  const name = character?.name || '';

  const handleViewChange = (axisId, value) => {
    onUpdate({ views: { ...views, [axisId]: Number(value) } });
  };

  return (
    <div className="traits-select">
      <button type="button" className="traits-select__back" onClick={onBack}>
        ← Back
      </button>
      <h2 className="traits-select__title">Your views</h2>
      <p className="traits-select__hint">
        Set your ideological position on each axis. This affects how voters and other parties see you.
      </p>

      <label className="traits-select__name-label">
        Character name
        <input
          type="text"
          className="traits-select__name-input"
          value={name}
          onChange={(e) => onUpdate({ name: e.target.value.trim() })}
          placeholder="e.g. Alex Morgan"
        />
      </label>

      <div className="traits-select__axes">
        {VIEW_AXES.map((axis) => (
          <div key={axis.id} className="traits-select__axis">
            <div className="traits-select__axis-header">
              <span className="traits-select__axis-label">{axis.label}</span>
              <span className="traits-select__axis-value">{views[axis.id] ?? 50}</span>
            </div>
            <div className="traits-select__axis-labels">
              <span>{axis.left}</span>
              <input
                type="range"
                min="0"
                max="100"
                value={views[axis.id] ?? 50}
                onChange={(e) => handleViewChange(axis.id, e.target.value)}
                className="traits-select__slider"
              />
              <span>{axis.right}</span>
            </div>
          </div>
        ))}
      </div>

      <button type="button" className="traits-select__next" onClick={onNext}>
        Next: Policies
      </button>
    </div>
  );
}
