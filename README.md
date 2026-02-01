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
6. **Map** – Main game screen: world map and your controlled region (placeholder for now).

## Tech

- Create React App–style setup (React 18, react-scripts).
- Game state via React Context (`GameContext.js`).
- Types and constants in `src/game/types.js` (parties, views, policies, difficulty, scenarios).

## Next steps (ideas)

- Real world map and region control.
- Political capital: earn/spend, cost of switching parties.
- Caucus mechanics: voting with other parties.
- Events, elections, and progression (e.g. Mayor → President).
