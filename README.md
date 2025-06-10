# Sprinting

A simple web tool to kick off a sprint for a development team. Data is stored locally in your browser as a JSON object.

## Features

- Manage a list of team members.
- Configure basic sprint information (name and dates).
- Data is saved to `localStorage` so it persists between sessions.

## Usage

Build the TypeScript sources and open `index.html` in your browser. Use the `+` buttons to add team members and configure the current sprint.

## Development

This project uses React and TypeScript without a bundler. Install the dependencies and run the build script:

```bash
npm install
npm run build
```

The compiled files are placed in `dist/`. Then open `index.html` to run the app.
