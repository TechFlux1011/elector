import React, { useState } from 'react';
import { PARTIES } from '../game/types';
import {
  MAP_VIEW_SCOPE,
  MAP_OVERLAY_TYPE,
  MAP_VIEW_SCOPE_LABELS,
  MAP_OVERLAY_LABELS,
  STATE_FIPS_TO_ABBR,
} from '../game/mapTypes';
import USAMap from './Map/USAMap';
import './MapView.css';

const SCOPE_OPTIONS = [
  MAP_VIEW_SCOPE.NATIONAL,
  MAP_VIEW_SCOPE.STATE,
  MAP_VIEW_SCOPE.COUNTY,
  MAP_VIEW_SCOPE.MUNICIPAL,
];

const OVERLAY_OPTIONS = [
  MAP_OVERLAY_TYPE.PRESIDENTIAL,
  MAP_OVERLAY_TYPE.SENATE,
  MAP_OVERLAY_TYPE.GOVERNOR,
  MAP_OVERLAY_TYPE.HOUSE,
  MAP_OVERLAY_TYPE.MUNICIPAL,
];

const STATE_OPTIONS = Object.entries(STATE_FIPS_TO_ABBR)
  .filter(([fips]) => !['02', '15', '60', '66', '69', '72', '78'].includes(fips)) // exclude AK, HI, territories for simpler default view
  .map(([fips, abbr]) => ({ fips, abbr }))
  .sort((a, b) => a.abbr.localeCompare(b.abbr));

export default function MapView({ character }) {
  const [viewScope, setViewScope] = useState(MAP_VIEW_SCOPE.NATIONAL);
  const [overlayType, setOverlayType] = useState(MAP_OVERLAY_TYPE.PRESIDENTIAL);
  const [selectedStateFips, setSelectedStateFips] = useState(null);

  const party = PARTIES.find((p) => p.id === character?.partyId);
  const showStatePicker = viewScope === MAP_VIEW_SCOPE.STATE || viewScope === MAP_VIEW_SCOPE.COUNTY;

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

      <div className="map-view__controls">
        <div className="map-view__control-group">
          <label className="map-view__label">Map view</label>
          <select
            className="map-view__select"
            value={viewScope}
            onChange={(e) => {
              setViewScope(e.target.value);
              if (e.target.value === MAP_VIEW_SCOPE.NATIONAL) setSelectedStateFips(null);
            }}
          >
            {SCOPE_OPTIONS.map((scope) => (
              <option key={scope} value={scope}>
                {MAP_VIEW_SCOPE_LABELS[scope]}
              </option>
            ))}
          </select>
        </div>
        {showStatePicker && (
          <div className="map-view__control-group">
            <label className="map-view__label">State</label>
            <select
              className="map-view__select"
              value={selectedStateFips || ''}
              onChange={(e) => setSelectedStateFips(e.target.value || null)}
            >
              <option value="">Select state</option>
              {STATE_OPTIONS.map(({ fips, abbr }) => (
                <option key={fips} value={fips}>
                  {abbr}
                </option>
              ))}
            </select>
          </div>
        )}
        <div className="map-view__control-group">
          <label className="map-view__label">Overlay</label>
          <select
            className="map-view__select"
            value={overlayType}
            onChange={(e) => setOverlayType(e.target.value)}
          >
            {OVERLAY_OPTIONS.map((type) => (
              <option key={type} value={type}>
                {MAP_OVERLAY_LABELS[type]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <main className="map-view__main">
        <div className="map-view__map-wrap">
          <USAMap
            viewScope={viewScope}
            overlayType={overlayType}
            selectedStateFips={selectedStateFips}
            onStateClick={(fips) => {
              if (viewScope === MAP_VIEW_SCOPE.NATIONAL) {
                setSelectedStateFips(fips);
                setViewScope(MAP_VIEW_SCOPE.STATE);
              }
            }}
          />
        </div>
        <aside className="map-view__legend">
          <p className="map-view__legend-title">Political landscape</p>
          <p className="map-view__legend-hint">
            {viewScope === MAP_VIEW_SCOPE.NATIONAL && 'National view: state-level results.'}
            {viewScope === MAP_VIEW_SCOPE.STATE && 'State view: county-level. Select a state above.'}
            {viewScope === MAP_VIEW_SCOPE.COUNTY && 'County view: same as state with county detail.'}
            {viewScope === MAP_VIEW_SCOPE.MUNICIPAL && 'Municipal view: city/local (coming soon).'}
          </p>
          <div className="map-view__legend-items">
            <span className="map-view__legend-item map-view__legend-item--d">D</span>
            <span className="map-view__legend-item map-view__legend-item--r">R</span>
          </div>
        </aside>
      </main>
    </div>
  );
}
