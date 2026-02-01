/**
 * Elector - Game types and constants
 */

// Difficulty = starting position. Easier = higher office (e.g. President USA), harder = lower (Mayor → President).
export const DIFFICULTY = {
  EASY: 'easy',       // e.g. President USA
  NORMAL: 'normal',   // e.g. Senator / Governor
  HARD: 'hard',       // e.g. Mayor, work way up
};

// Party affiliation. Caucus = can vote with another party; switching costs political capital.
export const PARTIES = [
  { id: 'democrat', name: 'Democrat', color: '#1a365d', caucusWith: [] },
  { id: 'republican', name: 'Republican', color: '#7f1d1d', caucusWith: [] },
  { id: 'independent', name: 'Independent', color: '#374151', caucusWith: ['democrat', 'republican'] },
  { id: 'green', name: 'Green', color: '#14532d', caucusWith: ['democrat'] },
  { id: 'libertarian', name: 'Libertarian', color: '#fbbf24', caucusWith: ['republican'] },
];

// Ideological views (sliders or picks)
export const VIEW_AXES = [
  { id: 'economic', label: 'Economic', left: 'Left', right: 'Right' },
  { id: 'social', label: 'Social', left: 'Liberal', right: 'Conservative' },
  { id: 'foreign', label: 'Foreign policy', left: 'Isolationist', right: 'Interventionist' },
];

// Policy options (supported / opposed)
export const POLICIES = [
  { id: 'healthcare', name: 'Universal healthcare', category: 'domestic' },
  { id: 'climate', name: 'Climate action', category: 'environment' },
  { id: 'immigration', name: 'Immigration reform', category: 'domestic' },
  { id: 'taxes', name: 'Tax reform', category: 'economic' },
  { id: 'defense', name: 'Defense spending', category: 'foreign' },
  { id: 'education', name: 'Education funding', category: 'domestic' },
  { id: 'trade', name: 'Trade policy', category: 'economic' },
  { id: 'rights', name: 'Civil rights', category: 'social' },
];

// Starting scenarios by difficulty
export const SCENARIOS = {
  [DIFFICULTY.EASY]: [
    { id: 'usa_president', title: 'President of the United States', region: 'USA', office: 'President' },
  ],
  [DIFFICULTY.NORMAL]: [
    { id: 'usa_senator', title: 'U.S. Senator', region: 'USA', office: 'Senator' },
    { id: 'usa_governor', title: 'State Governor', region: 'USA', office: 'Governor' },
  ],
  [DIFFICULTY.HARD]: [
    { id: 'usa_mayor', title: 'Mayor', region: 'USA', office: 'Mayor' },
    { id: 'usa_rep', title: 'U.S. Representative', region: 'USA', office: 'Representative' },
  ],
};

/**
 * @typedef {Object} Character
 * @property {string} id
 * @property {string} name
 * @property {string} partyId
 * @property {string[]} caucusWith - party IDs this character can caucus with
 * @property {Object.<string, number>} views - axis id -> value 0–100
 * @property {string[]} supportedPolicies - policy IDs
 * @property {string[]} opposedPolicies - policy IDs
 * @property {number} politicalCapital
 * @property {string} difficulty
 * @property {string} scenarioId
 * @property {string} region - controlled region on map
 */

/**
 * @typedef {Object} GameState
 * @property {Character|null} character
 * @property {string} screen - 'create' | 'difficulty' | 'map' | ...
 */
