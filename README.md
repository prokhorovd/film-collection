# Film Collection

## Description

Film Collection is a simple Angular application that demonstrates core Angular concepts using standalone components and Signals.

The application allows users to browse a list of films, search by title, mark films as favorites, and view detailed information about each film.

---

## Features

- Film catalog (grid layout)
- Search by title (real-time filtering)
- Add/remove favorites
- Film details page
- Breadcrumbs navigation
- Custom autofocus directive
- Custom duration pipe
- 404 page for unknown routes

---

## Tech Stack

- Angular (standalone components)
- Angular Signals (state management)
- Angular Router
- TypeScript (strict mode)
- CSS (no UI libraries)

---

## Project Structure

```text
src/app/
  layout/          // header, footer, breadcrumbs
  pages/           // home, details, about, 404
  features/films/  // film domain (service, types, mock data, components)
  shared/          // directives and pipes
```

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the application

```bash
ng serve
```

Then open:

```text
http://localhost:4200
```

---

## Notes

- The project does not use RxJS — all reactivity is implemented with Angular Signals.
- Film data is mocked and stored locally.
- The application uses standalone components instead of NgModules.

---

## Author

Prokhorov Dmitry

---

## GitHub

https://github.com/prokhorovd
