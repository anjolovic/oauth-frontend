# OAuth Frontend

This is a Next.js-based frontend application that integrates with a custom OAuth implementation provided by a Rails API backend.

## Project Structure
├── README.md
├── components.json
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components
│   │   ├── AuthProvider.tsx
│   │   └── ui
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       └── input.tsx
│   ├── contexts
│   │   ���── AuthProvider.tsx
│   ├── lib
│   │   └── utils.ts
│   ├── pages
│   │   ├── _app.tsx
│   │   ├── dashboard.tsx
│   │   ├── index.tsx
│   │   ├── login.tsx
│   │   └── signup.tsx
│   └── utils
│       └── api.ts
├── tailwind.config.ts
└── tsconfig.json


## Features

- Custom OAuth authentication flow
- Login and Signup functionality
- Protected dashboard route
- Responsive design using Tailwind CSS
- UI components from shadcn/ui

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios for API calls
- shadcn/ui for UI components

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following content:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
   NEXT_PUBLIC_CLIENT_ID=your_client_id
   NEXT_PUBLIC_CLIENT_SECRET=your_client_secret
   ```
   Replace `your_client_id` and `your_client_secret` with your actual OAuth client credentials.

4. Run the development server:
   ```
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Pages

- `/`: Home page with a link to login
- `/login`: User login page
- `/signup`: New user registration page
- `/dashboard`: Protected route for authenticated users

## Authentication

The app uses a custom OAuth flow with the following key features:
- Token-based authentication (access token and refresh token)
- Automatic token refresh on expiration
- Secure storage of tokens in localStorage

## API Integration

The `src/utils/api.ts` file contains an Axios instance configured for making API calls to the backend. It includes interceptors for handling authentication tokens and refreshing expired tokens.

## Styling

The app uses Tailwind CSS for styling, with custom configurations in `tailwind.config.ts`. The global styles are defined in `src/app/globals.css`.

## Components

Custom UI components are located in `src/components/ui/`. These are based on shadcn/ui and can be easily customized.

## Context

The `AuthContext` in `src/contexts/AuthProvider.tsx` manages the global authentication state and provides methods for login, logout, and signup.

## Development

To contribute to this project:

1. Fork the repository
2. Create a new branch for your feature
3. Make your changes
4. Submit a pull request

Please ensure that your code follows the existing style and includes appropriate tests.

## License

[MIT License](LICENSE)
