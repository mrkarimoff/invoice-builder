# Invoice Builder App

The Invoice Builder App is a web application developed using Next.js, React, and TypeScript. It allows users to easily create and print professional invoices.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)

## Features

- Build Your Invoice: The app allows users to create their own invoices by filling out a form with the necessary details.
- Print Functionality: Users can easily print their invoices using the React-To-Print library, making it convenient for offline use or physical copies.

## Technologies

I used the following technologies:

- **Next.js 14 and React 18 (with TypeScript)**

- **Prisma + PostgreSQL for DB**

- **React-Hook-Form + Zod for forms**

- **React-Markdown for rendering markdown**

- **React-To-Print for printing the page**

- **Tailwind CSS + Shadcn/UI**

## Development

To run the app locally:

1. Run `npm install` to install the dependencies.
2. Set up the required environment variables in the `.env` file (refer to the template in `.env.example`).
3. Run Migrations `npx prisma migrate dev`
4. Run `npm run dev` to start the development server.
