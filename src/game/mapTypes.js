/**
 * Map view scopes: geographic level shown (national → municipal).
 * Overlay types: election/data style shown on the map.
 */

export const MAP_VIEW_SCOPE = {
  NATIONAL: 'national',   // USA states
  STATE: 'state',        // One state, counties
  COUNTY: 'county',       // County-level (within state)
  MUNICIPAL: 'municipal', // City/local
};

export const MAP_OVERLAY_TYPE = {
  PRESIDENTIAL: 'presidential', // National general (states)
  SENATE: 'senate',             // Senate races (states)
  GOVERNOR: 'governor',        // Governor races (states)
  HOUSE: 'house',              // House districts
  MUNICIPAL: 'municipal',      // Local elections
};

// Labels for UI
export const MAP_VIEW_SCOPE_LABELS = {
  [MAP_VIEW_SCOPE.NATIONAL]: 'National',
  [MAP_VIEW_SCOPE.STATE]: 'State',
  [MAP_VIEW_SCOPE.COUNTY]: 'County',
  [MAP_VIEW_SCOPE.MUNICIPAL]: 'Municipal',
};

export const MAP_OVERLAY_LABELS = {
  [MAP_OVERLAY_TYPE.PRESIDENTIAL]: 'Presidential / General',
  [MAP_OVERLAY_TYPE.SENATE]: 'Senate',
  [MAP_OVERLAY_TYPE.GOVERNOR]: 'Governor',
  [MAP_OVERLAY_TYPE.HOUSE]: 'House districts',
  [MAP_OVERLAY_TYPE.MUNICIPAL]: 'Local / Municipal',
};

// TopoJSON URLs (us-atlas)
export const MAP_GEO_URLS = {
  states: 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json',
  counties: 'https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json',
};

// State FIPS → party control (D/R) for placeholder overlay. Ids in us-atlas are 2-digit FIPS strings.
export const PLACEHOLDER_STATE_PARTY = {
  '01': 'R', '02': 'R', '04': 'R', '05': 'R', '06': 'D', '08': 'D', '09': 'D', '10': 'D',
  '11': 'D', '12': 'R', '13': 'D', '15': 'D', '16': 'R', '17': 'D', '18': 'R', '19': 'R',
  '20': 'R', '21': 'R', '22': 'R', '23': 'D', '24': 'D', '25': 'D', '26': 'D', '27': 'D',
  '28': 'R', '29': 'R', '30': 'R', '31': 'R', '32': 'D', '33': 'D', '34': 'D', '35': 'D',
  '36': 'D', '37': 'R', '38': 'R', '39': 'R', '40': 'R', '41': 'D', '42': 'R', '44': 'D',
  '45': 'R', '46': 'R', '47': 'R', '48': 'R', '49': 'R', '50': 'D', '51': 'R', '53': 'D',
  '54': 'R', '55': 'D', '56': 'R',
};

// State FIPS to state abbreviation for state selector
export const STATE_FIPS_TO_ABBR = {
  '01': 'AL', '02': 'AK', '04': 'AZ', '05': 'AR', '06': 'CA', '08': 'CO', '09': 'CT',
  '10': 'DE', '11': 'DC', '12': 'FL', '13': 'GA', '15': 'HI', '16': 'ID', '17': 'IL',
  '18': 'IN', '19': 'IA', '20': 'KS', '21': 'KY', '22': 'LA', '23': 'ME', '24': 'MD',
  '25': 'MA', '26': 'MI', '27': 'MN', '28': 'MS', '29': 'MO', '30': 'MT', '31': 'NE',
  '32': 'NV', '33': 'NH', '34': 'NJ', '35': 'NM', '36': 'NY', '37': 'NC', '38': 'ND',
  '39': 'OH', '40': 'OK', '41': 'OR', '42': 'PA', '44': 'RI', '45': 'SC', '46': 'SD',
  '47': 'TN', '48': 'TX', '49': 'UT', '50': 'VT', '51': 'VA', '53': 'WA', '54': 'WV',
  '55': 'WI', '56': 'WY',
};
