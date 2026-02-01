import React, { useMemo } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import {
  MAP_VIEW_SCOPE,
  MAP_GEO_URLS,
  PLACEHOLDER_STATE_PARTY,
} from '../../game/mapTypes';
import './USAMap.css';

const DEFAULT_FILL = '#334155';
const DEM_FILL = '#2563eb';
const REP_FILL = '#dc2626';
const BORDER = '#475569';

function getFillForState(stateFips, overlayType, overlayData) {
  const data = overlayData ?? PLACEHOLDER_STATE_PARTY;
  const party = data[stateFips];
  if (party === 'D') return DEM_FILL;
  if (party === 'R') return REP_FILL;
  return DEFAULT_FILL;
}

export default function USAMap({
  viewScope = MAP_VIEW_SCOPE.NATIONAL,
  overlayType,
  selectedStateFips = null,
  overlayData = null,
  onStateClick,
  className = '',
}) {
  const isNational =
    viewScope === MAP_VIEW_SCOPE.NATIONAL || !selectedStateFips;
  const geoUrl = isNational ? MAP_GEO_URLS.states : MAP_GEO_URLS.counties;

  const projectionConfig = useMemo(() => ({
    scale: isNational ? 1000 : 4000,
    center: isNational ? [-96, 38] : [-96, 38],
  }), [isNational]);

  return (
    <div className={`usa-map ${className}`}>
      <ComposableMap
        projection="geoAlbersUsa"
        projectionConfig={projectionConfig}
        className="usa-map__svg"
      >
        <ZoomableGroup center={[-96, 38]} zoom={1} minZoom={0.5} maxZoom={8}>
          <Geographies geography={geoUrl}>
            {({ geographies }) => {
              const features = isNational
                ? geographies
                : geographies.filter(
                    (geo) =>
                      selectedStateFips &&
                      String(geo.id).padStart(5, '0').startsWith(selectedStateFips)
                  );
              return features.map((geo) => {
                const id = geo.id;
                const stateFips = isNational ? id : String(id).padStart(5, '0').substring(0, 2);
                const fill = isNational
                  ? getFillForState(id, overlayType, overlayData)
                  : getFillForState(stateFips, overlayType, overlayData);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fill}
                    stroke={BORDER}
                    strokeWidth={isNational ? 0.5 : 0.25}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none', fill: '#64748b', cursor: 'pointer' },
                      pressed: { outline: 'none' },
                    }}
                    onClick={() => onStateClick?.(isNational ? id : stateFips, geo)}
                  />
                );
              });
            }}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}
