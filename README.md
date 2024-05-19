## Description: 
This is an interview assessment task for TuneIn.
This project is SPA which consumes one enpoint and displays radio stations list.

Project UI is based on grid item so it is scaling very well when it comes to client browser width.

For each radio station user can display details which consist description, rating and tags.

At the beginning I've started with Redux and MaterialUI (can be seen in git commits history). While working I decided to change path, MaterialUI which is no longer maintained like it used to be (at least for next.js) was replaced with more suitable library *Mantine*.
Redux was setup and and running but since this project is so small I decided to remove it, general data load is done with *Next.js* async data loading, so main page can remain SSR. On further development I'd consider introducing context to store the list data for client side components.

Audio manager is kept in Context provider (*AudioContext*) because of ease of use and and for such thing I think this is a perfect choice. Because in clean architecture it behaves like a single source of truth.

## TODO list:  
* Create more tests (only setup Jest and created one test)
* Implement list filtering and sorting - for that there is need to create client side context or setup Redux
* When above item is done then adding next/previous station buttons is a piece of cake
* When thinking about more data to come we can implement pagination or infinite scroll with lazy loading (images)

## Tech stack
* Next.js 14.2.3 with TypeScript
* React 18
* Mantine for the UI
* Tabler for icons
* Jest for testing
* SCSS modules for styling

## Starting the project

Run the development server:

```bash
# installing dependencies
npm i
# running dev server
npm run dev
# running tests
npm run test
# linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).