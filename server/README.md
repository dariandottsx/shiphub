# ShipHub Server

This is the backend server for the ShipHub marketplace platform, built with Node.js, Express, and Supabase.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
PORT=3001
FRONTEND_URL=http://localhost:3000
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
npm start
```

## API Endpoints

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `POST /api/projects` - Create a new project
- `PATCH /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

## Development

The server is written in TypeScript and uses Express for routing. Supabase is used as the database and authentication provider.

### Project Structure

- `src/` - Source code
  - `routes/` - API route handlers
  - `index.ts` - Server entry point
- `dist/` - Compiled JavaScript (generated)
- `package.json` - Project configuration
- `tsconfig.json` - TypeScript configuration 