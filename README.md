# Red Jacks | Punk Rock Venue Management App

A Next.js 15 application for managing events, tickets, and staff operations at the Red Jacks punk rock venue.

## Project Overview

This application helps venue staff manage events, sell tickets, and verify attendance using QR codes. It includes role-based access control for different staff positions and integrates with Stripe for payments and Supabase for data storage.

## Features

- **Authentication**: User sign-up, login, and session management via Clerk
- **Role-based Access**: Different UI and permissions for users, staff, management, and admins
- **Event Management**: Create, update, delete, and list upcoming events
- **Ticket Sales**: Purchase tickets through Stripe integration
- **QR Code Ticketing**: Generate QR codes for tickets and scan for entry validation
- **User Management**: Admin interface for managing user roles and permissions

## Tech Stack

- **Frontend**: Next.js 15 with App Router, React 19
- **Styling**: TailwindCSS with ShadCN/UI components
- **Authentication**: Clerk
- **Database**: Supabase with Drizzle ORM
- **Payments**: Stripe
- **State Management**: Zustand (as needed)
- **QR Code**: jsQR for generation and scanning

## Project Structure

```
/src
  /app                    # Next.js App Router pages
  /components             # Reusable UI components
  /features               # Feature-specific business logic
    /events               # Event management features
    /tickets              # Ticketing features
    /users                # User management features
  /lib                    # Shared library code
    /clerk                # Clerk authentication utilities
    /drizzle              # Database schemas and utilities
    /stripe               # Stripe payment utilities
    /supabase             # Supabase client and utilities
  /utils                  # Utility functions
```

## Environment Variables

The application requires the following environment variables:

```
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_...
CLERK_SECRET_KEY=sk_...
CLERK_WEBHOOK_SECRET=whsec_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJh...
SUPABASE_SERVICE_ROLE_KEY=eyJh...

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables in `.env.local`
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Database Setup

1. Create a Supabase project
2. Set up tables using Drizzle migrations:
   ```bash
   npm run db:generate
   npm run db:push
   ```

## Deployment

This application is configured for deployment on Netlify:

1. Connect your GitHub repository to Netlify
2. Configure environment variables in the Netlify dashboard
3. Deploy!

## Development Progress

- [x] Project initialization with Next.js 15
- [x] TailwindCSS and ShadCN/UI setup with dark theme
- [x] Custom blood-red script font for the “Red Jacks” logo
- [ ] Clerk setup for user sign-up, login, and session
- [ ] Role-based access control
- [ ] Drizzle ORM with Supabase database
- [ ] Supabase storage for event images and other media
- [ ] Stripe configuration for product and price data
- [ ] Event listing and detail pages
- [ ] QR code generation and scanning
- [ ] Zustand for shared state management
- [ ] Clean design system
- [ ] Mobile-friendly layouts
- [ ] Documentation of app setup, environment variables, design decisions, and folder structure
- [ ] Deployment steps (e.g., Netlify integration)

## License

This project is private and proprietary.
