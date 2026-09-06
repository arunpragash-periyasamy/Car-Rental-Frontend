# Car Rental Frontend

A React single-page app for browsing, listing, and booking rental cars — the client half of a car
rental platform, talking to a separate backend API over REST.

## Status

**Prototype / in progress.** Core flows (browse cars, view a car, sign up/sign in, add a car as a
lessor, book a car, view bookings) are wired up end-to-end against a live backend, but there's no
automated test suite, no CI pipeline, and a leftover placeholder form component still sits in the
router (see [Known Issues](./ARCHITECTURE.md#known-issues--limitations)).

## Overview

Car Rental Frontend lets two kinds of users share one app: a **lessor** who lists cars for rent
(with photos, pricing, specs) and a **renter** who searches available cars, checks out, pays, and
tracks their bookings. The UI is route-protected by a JWT held in Redux (mirrored to
`localStorage`), and all data — cars, bookings, auth — comes from a REST API hosted separately
(see `BACKEND_URL` in `src/utils/constants.jsx`). This repo is the client only; it has no server,
database, or business logic of its own.

## Tech stack

- **React 18** + **Vite 5** — SPA build and dev server
- **React Router 6** (`createBrowserRouter`) — client-side routing, including a custom
  `ProtectedRoute` gate
- **Redux Toolkit** + **React Redux** — global state: auth (`userSlice`), car image staging
  (`carSlice`), multi-step booking form data (`formDataSlice`)
- **Axios** — two preconfigured instances (`axiosAuth`, `axiosInstance`) with a request
  interceptor that attaches the JWT
- **Ant Design (antd)** + **@ant-design/icons** — forms (login, register, add-car, billing)
- **Tailwind CSS** + PostCSS/Autoprefixer — utility-first styling
- **react-slick** / **slick-carousel** — image carousels on car listings
- **react-toastify** — toast notifications
- **dayjs** / **moment** — date handling (both are present as dependencies)
- **ESLint** (`eslint:recommended`, React/React Hooks plugins) — linting only, no test runner

No test framework, no CI configuration (no `.github/workflows`) is present in this repo.

## Features

Verified against the actual page/component code:

- Browse available cars on the home page (`GET /api/cars`)
- View a single car's detail page (`GET /api/cars/:id`)
- Sign up / sign in with a username + password, storing a JWT (`POST /api/auth/register`,
  `POST /api/auth/login`)
- Route protection: pages like car detail, checkout, billing, add-car, and view-cars redirect to
  `/login` when there's no token (`ProtectedRoute`)
- Lessor flow: add or edit a car with specs, pricing, and multi-image upload
  (`POST`/`PUT /api/cars`)
- Lessor flow: view your own listed cars (`GET /api/cars/myCars`)
- Renter flow: multi-step checkout — location/date selection, billing form, card details — ending
  in a booking (`POST /api/bookings`)
- Renter flow: view your bookings (`GET /api/bookings`)
- Session check on app load: pings `/api/users/expired` to detect an expired token and log the
  user out
- Deploy-ready SPA routing config for both **Netlify** (`netlify.toml`) and **Vercel**
  (`vercel.json`)

## Architecture

This is a single-layer frontend: pages call Axios, Axios talks to an external API, Redux holds
client-side session/form state. See [ARCHITECTURE.md](./ARCHITECTURE.md) for the component
diagram, request flow, and a folder-by-folder tour.

## Folder structure

```
src/
├── components/   # 29 reusable UI components, one folder per component
├── pages/        # Route-level screens wired up in utils/Router.jsx
└── utils/
    ├── axios.jsx        # axiosAuth / axiosInstance instances + JWT interceptor
    ├── constants.jsx    # BACKEND_URL
    ├── Router.jsx       # createBrowserRouter route tree
    ├── ProtectedRoute.jsx
    ├── Utility.jsx      # date/string helpers
    ├── store/store.jsx  # Redux store (user, car, form reducers)
    └── slices/          # userSlice, carSlice, formDataSlice
public/           # Static assets served as-is (logo, images)
dist/             # Vite production build output
```

## Getting started

```bash
npm install
npm run dev       # starts the Vite dev server
```

Other scripts (from `package.json`):

```bash
npm run build      # production build to dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint over src/*.{js,jsx}
```

The API base URL is hardcoded in `src/utils/constants.jsx` (`BACKEND_URL`) rather than read from an
environment variable — point it at your own backend instance if you're not using the one currently
configured there.

## Usage example

Once running, visit `/register` to create an account (choose **User** to book cars, or
**Lessor** to list them), then `/login`. A lessor lands on `/add-car` and `/view-cars`; a user
browses cars on `/` and books through `/car/:id` → `/billing` → `/checkout`.

## Contributing / License

No `LICENSE` file or contribution guide is present in this repo.
