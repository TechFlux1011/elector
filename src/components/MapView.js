import React from 'react';
import { PARTIES } from '../game/types';
import './MapView.css';

export default function MapView({ character }) {
  const party = PARTIES.find((p) => p.id === character?.partyId);

  return (
    <div className="map-view">
      <header className="map-view__header">
        <h1 className="map-view__title">Elector</h1>
        <div className="map-view__character">
          <span className="map-view__name">{character?.name || 'Politician'}</span>
          <span
            className="map-view__party"
            style={{ color: party?.color || '#94a3b8' }}
          >
            {party?.name || 'No party'}
          </span>
          <span className="map-view__capital">
            Political capital: {character?.politicalCapital ?? 0}
          </span>
        </div>
      </header>
      <main className="map-view__main">
        <div className="map-view__map-placeholder">
          <p className="map-view__map-label">World map</p>
          <p className="map-view__map-hint">
            Your character controls: <strong>{character?.region || '—'}</strong>
          </p>
          <p className="map-view__map-note">
            Map and region control will be expanded in future updates.
          </p>
        </div>
      </main>
    </div>
  );
}
