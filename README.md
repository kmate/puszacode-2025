# Advent Calendar App

This is a private advent calendar application that allows users to interact with a calendar and reveal daily surprises. 

## Features

- Interactive calendar view
- Daily content reveal
- Responsive design

## Project Structure

```
advent-calendar
├── src
│   ├── app.ts               # Entry point of the application
│   ├── components
│   │   └── calendar.ts      # Calendar component
│   ├── pages
│   │   ├── index.html       # Main landing page
│   │   └── day-template.html # Template for daily content
│   ├── styles
│   │   └── main.css         # Styles for the application
│   └── types
│       └── index.ts         # Type definitions
├── .github
│   └── workflows
│       └── deploy-pages.yml  # GitHub Actions for deployment
├── .nojekyll                 # Bypass Jekyll processing
├── package.json              # npm configuration
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/advent-calendar.git
   ```
2. Navigate to the project directory:
   ```
   cd advent-calendar
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

Open your browser and navigate to `http://localhost:3000` to view the advent calendar.

## Deployment

This project is set up to deploy to GitHub Pages automatically. Make sure to configure the GitHub Actions workflow in `.github/workflows/deploy-pages.yml` to suit your needs.

## License

This project is licensed under the MIT License. See the LICENSE file for details.