# Harness-Node.js
Sample Node.js app for Harness CI pipeline

# Node.js CI Demo

Sample Node.js application for Harness CI/CD pipeline demonstration.

## Features

- Express.js REST API
- Unit tests with Jest
- Docker support
- CI/CD ready

## Local Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

\`\`\`bash
# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test

# Build application
npm run build
\`\`\`

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `POST /api/users` - Create user

## Docker

\`\`\`bash
# Build image
docker build -t nodejs-ci-demo .

# Run container
docker run -p 3000:3000 nodejs-ci-demo
\`\`\`

## Testing

\`\`\`bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
\`\`\`
