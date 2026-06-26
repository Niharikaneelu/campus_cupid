# Campus Cupid

This repository is organized as a small workspace:

- [frontend](frontend) - React app
- [backend](backend) - Node auth, profile, and matching API

## From the repository root

Use these scripts from the top level:

```bash
npm install
npm start
npm test
npm run build
```

These commands proxy into the frontend app inside [frontend](frontend).

## Folder Notes

- The React app still keeps its own package file at [frontend/package.json](frontend/package.json).
- The root [package.json](package.json) is the workspace entry point.
- The [backend](backend) folder now serves authentication, profile, discovery, swipe, and match routes.

## Backend Routes

- `GET /health`
- `POST /auth/register`
- `POST /auth/login`
- `GET /auth/me`
- `GET /profile`
- `PUT /profile`
- `GET /profiles/discover`
- `POST /swipes`
- `GET /matches`
- `GET /chats`
- `GET /chats/:matchId/messages`
- `POST /chats/:matchId/messages`
- `POST /auth/logout`

## EchoAPI

Import [backend/echoapi.openapi.json](backend/echoapi.openapi.json) into EchoAPI to create the request collection for these routes.
