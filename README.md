# Elector

A React game that simulates electoral politics. Choose a party, create your character with traits and policies, pick a difficulty (starting office), and control your region on the map.

## Setup

```bash
npm install
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000).

## Game flow

1. **Welcome** – Start and begin character creation.
2. **Party** – Choose party affiliation. Parties can *caucus* with others (e.g. Independent with Democrat/Republican); switching parties later costs political capital.
3. **Traits** – Set your character name and ideological views (economic, social, foreign policy).
4. **Policies** – Mark policies as Supported or Opposed to define your platform.
5. **Difficulty** – Choose scenario difficulty by starting office:
   - **Easier** – e.g. President of the United States (more political capital).
   - **Normal** – e.g. Senator, Governor.
   - **Harder** – e.g. Mayor, Representative (less political capital, work your way up).
6. **Map** – Main game screen: **USA map** with switchable views and overlays for planning your next move.

## Map (USA)

The main map is the United States. You can switch:

- **Map view (scope)** – National (states), State (counties in one state), County, or Municipal. Use these to see the political landscape at different levels, from national general elections down to local races.
- **Overlay** – Which election/style is shown: Presidential/General, Senate, Governor, House districts, or Municipal. Each overlay uses the same geography but different data styles (e.g. party control by state/county).
- **State** – When viewing State or County scope, pick a state to see counties; you can also click a state on the national map to zoom into that state.

Overlays use placeholder D/R coloring by state (and eventually by county). The map is built with `react-simple-maps` and TopoJSON from [us-atlas](https://github.com/topojson/us-atlas).

## Tech

- Create React App–style setup (React 18, react-scripts).
- Game state via React Context (`GameContext.js`).
- Types and constants in `src/game/types.js` (parties, views, policies, difficulty, scenarios).
- Map types and overlay config in `src/game/mapTypes.js`. USA map in `src/components/Map/USAMap.js`.

## Next steps (ideas)

- County/municipal overlay data and district boundaries.
- Political capital: earn/spend, cost of switching parties.
- Caucus mechanics: voting with other parties.
- Events, elections, and progression (e.g. Mayor → President).
